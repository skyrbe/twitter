export const GET_ALL_TWEETS = 'tweets/GET_ALL_TWEETS';
export const GET_TWEET = 'tweets/GET_TWEET';
export const ADD_TWEET = 'tweets/ADD_TWEET';
export const EDIT_TWEET = 'tweets/EDIT_TWEET';
export const DELETE_TWEET = 'tweets/DELETE_TWEET';

const initialState = {
  data: [],
  activeTweet: null
};

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_ALL_TWEETS: {
      return {
        ...state,
      };
    }
    case GET_TWEET: {
      return {
        ...state,
        activeTweet: state.data.find(tweet => tweet.id === action.payload)
      };
    }
    case ADD_TWEET: {
      const newTweet = Object.assign(
        {},
        action.payload,
        {
          id: state.data.length + 1
        }
      );
      return {
        ...state,
        data: [newTweet].concat(state.data)
      };
    }
    case EDIT_TWEET: {
      const editedTweet = {
        ...state.activeTweet,
        content: action.payload.content
      };

      const indexOfTweet = state.data.findIndex(tweet => tweet.id === action.payload.id);

      return {
        ...state,
        activeTweet: editedTweet,
        data: [
          ...state.data.slice(0, indexOfTweet),
          editedTweet,
          ...state.data.slice(indexOfTweet + 1)
        ]
      };
    }
    case DELETE_TWEET: {
      return {
        ...state,
        data: state.data.filter(tweet => tweet.id !== action.payload)
      };
    }
    default:
      return state;
  }
};

export const getAllTweets = () => {
  return {
    type: GET_ALL_TWEETS,
  };
};

export const getTweet = (id) => {
  return {
    type: GET_TWEET,
    payload: id
  };
};

export const addTweet = (data) => {
  return {
    type: ADD_TWEET,
    payload: data,
  };
};

export const editTweet = (data) => {
  return {
    type: EDIT_TWEET,
    payload: data,
  };
};

export const deleteTweet = (id) => {
  return {
    type: DELETE_TWEET,
    payload: id,
  };
};
