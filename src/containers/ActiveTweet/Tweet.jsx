import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { getTweet, editTweet } from '@reducers/tweets';
import Tweet from '@components/Tweet';
import EditTweet from '@containers/Tweets/EditTweet';
import styles from './Tweet.module.css';

const ActiveTweet = (props) => {
  const [showEditor, setShowEditor] = useState(false);
  useEffect(
    () => {
      props.getTweet(parseInt(props.match.params.id, 10));
    },
    []
  );

  const handleEdit = (data) => {
    props.editTweet(data);
  };

  const handleShowEditor = () => {
    setShowEditor(!showEditor);
  };

  return (
    <div className={styles.activeTweetContainer}>
      {props.tweet && (
        <Tweet
          key={props.tweet.id}
          data={props.tweet}
          onEdit={handleShowEditor}
          canEdit
          isfromLoggedInUser={props.tweet.postedBy === props.loggedInUser}
        />
      )}
      {showEditor && (
        <EditTweet
          postedBy={props.match.params.username}
          data={props.tweet}
          onEdit={handleEdit}
        />
      )}
    </div>
  );
};

function mapStateToProps({ tweets, auth }) {
  return {
    tweet: tweets.activeTweet,
    loggedInUser: auth.loggedInUser && auth.loggedInUser.username
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    getTweet,
    editTweet,
  }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(ActiveTweet);
