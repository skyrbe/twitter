import React from 'react';
import AddTweet from '@containers/Tweets/AddTweet';
import GenerateTweets from '@containers/Tweets/GenerateTweets';

const Timeline = (props) => {
  return (
    <div className="container fh">
      <GenerateTweets
        loggedInUser={props.match.params.username}
      />
      <AddTweet
        postedBy={props.match.params.username}
      />
    </div>
  );
};

export default Timeline;
