import React, { useEffect } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { getAllTweets, deleteTweet } from '@reducers/tweets';
import Tweet from '@components/Tweet';
import styles from './Tweets.module.css';

const GenerateTweets = (props) => {
  useEffect(
    () => {
      props.getAllTweets();
    },
    []
  );

  const handleDelete = (id) => {
    props.deleteTweet(id);
  };

  const generateTweets = () => {
    return props.tweets
      .sort((a, b) => b.postedAt - a.postedAt)
      .map((tweet) => {
        return (
          <Tweet
            key={tweet.id}
            data={tweet}
            onDelete={handleDelete}
            canDelete
            isfromLoggedInUser={tweet.postedBy === props.loggedInUser}
          />
        );
      });
  };

  return (
    <div className={styles.tweetsContainer}>
      {generateTweets()}
    </div>
  );
};

function mapStateToProps({ tweets }) {
  return {
    tweets: tweets.data
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    getAllTweets,
    deleteTweet
  }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(GenerateTweets);
