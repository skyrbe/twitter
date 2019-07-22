import { combineReducers } from 'redux';
import notification from './notification';
import ui from './ui';
import auth from './auth';
import tweets from './tweets';

const appReducer = combineReducers({
  notification,
  ui,
  auth,
  tweets
});

// Setup root reducer
const rootReducer = (state, action) => {
  return appReducer(state, action);
};

export default rootReducer;
