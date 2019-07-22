import v4 from 'uuid/v4';

export const SET_NOTIFICATION_MESSAGE = 'notification/SET_NOTIFICATION_MESSAGE';
export const UNSET_NOTIFICATION_MESSAGE = 'notification/UNSET_NOTIFICATION_MESSAGE';

const initialState = {
  message: [],
};

export default (state = initialState, action) => {
  switch (action.type) {
    case SET_NOTIFICATION_MESSAGE: {
      return {
        ...state,
        message: [...state.message.concat(action.payload)],
      };
    }
    case UNSET_NOTIFICATION_MESSAGE: {
      return {
        ...state,
        message: [...state.message.filter(notification => notification.id !== action.payload)],
      };
    }
    default:
      return state;
  }
};

export const setNotificationMessage = (message, time = 5000) => {
  let { autoClose } = message;
  if (autoClose !== false) {
    autoClose = true;
  }
  const messageDetails = {
    ...message,
    autoClose,
    id: v4()
  };
  return (dispatch) => {
    dispatch({
      type: SET_NOTIFICATION_MESSAGE,
      payload: messageDetails,
    });

    if (messageDetails.autoClose) {
      window.setTimeout(
        () => dispatch({
          type: UNSET_NOTIFICATION_MESSAGE,
          payload: messageDetails.id,
        }),
        time
      );
    }
  };
};

export const closeNotification = (id) => {
  return (dispatch) => {
    dispatch({
      type: UNSET_NOTIFICATION_MESSAGE,
      payload: id,
    });
  };
};
