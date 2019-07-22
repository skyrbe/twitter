export const LOGIN_USER = 'auth/LOGIN_USER';
export const LOGOUT_USER = 'auth/LOGOUT_USER';
export const SIGNUP_USER = 'auth/SIGNUP_USER';

const initialState = {
  loggedInUser: null,
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
    case LOGOUT_USER: {
      return {
        ...state,
        loggedInUser: null
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
        firstname: data.firstname
      }
    });
  };
};

export const logoutUser = () => {
  return {
    type: LOGOUT_USER
  };
};
