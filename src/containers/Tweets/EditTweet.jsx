import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import EditTweetForm from '@components/AddTweet';
import { editTweet } from '@reducers/tweets';

const EditTweet = (props) => {
  const handleEdit = (data) => {
    const tweetObj = {
      ...props.data,
      postedAt: new Date().getTime(),
      content: data
    };
    props.editTweet(tweetObj);
  };

  return (
    <EditTweetForm onAdd={handleEdit} content={props.data.content} />
  );
};

function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    editTweet,
  }, dispatch);
}

export default connect(null, mapDispatchToProps)(EditTweet);
