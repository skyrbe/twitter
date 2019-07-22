import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import AddTweetForm from '@components/AddTweet';
import { addTweet } from '@reducers/tweets';

const AddTweet = (props) => {
  const handleAdd = (data) => {
    const tweetObj = {
      content: data,
      postedBy: props.postedBy,
      postedAt: new Date().getTime()
    };
    props.addTweet(tweetObj);
  };

  return (
    <AddTweetForm onAdd={handleAdd} />
  );
};

function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    addTweet,
  }, dispatch);
}

export default connect(null, mapDispatchToProps)(AddTweet);
