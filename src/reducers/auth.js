export const LOGIN_USER = 'auth/LOGIN_USER';
export const SIGNUP_USER = 'auth/SIGNUP_USER';

const initialState = {
  loggedInUser: {
    firstname: 'Harsha',
    username: 'asdf'
  },
  users: []
};

export default (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_USER: {
      return {
        ...state,
        loggedInUser: action.payload,
      };
    }
    case SIGNUP_USER: {
      return {
        ...state,
        users: state.users.concat(action.payload)
      };
    }
    default:
      return state;
  }
};

export const loginUser = (data) => {
  return {
    type: LOGIN_USER,
    payload: data,
  };
};

export const signupUser = (data) => {
  return (dispatch) => {
    dispatch({
      type: SIGNUP_USER,
      payload: data,
    });
    dispatch({
      type: LOGIN_USER,
      payload: {
        username: data.username,
        password: data.password
      }
    });
  };
};
