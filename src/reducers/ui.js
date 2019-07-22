const currentReducer = 'ui';

export const SET_HEADER_STYLE = `${currentReducer}/SET_HEADER_STYLE`;
export const TOGGLE_MAIN_MENU = `${currentReducer}/TOGGLE_MAIN_MENU`;
export const CLOSE_MAIN_MENU = `${currentReducer}/CLOSE_MAIN_MENU`;
export const TOGGLE_PROFILE_MENU = `${currentReducer}/TOGGLE_PROFILE_MENU`;
export const CLOSE_PROFILE_MENU = `${currentReducer}/CLOSE_PROFILE_MENU`;

const initialState = {
  headerStyle: window.scrollY > 100 ? 'compact' : 'full',
  mainMenuOpen: false,
  profileMenuOpen: false
};

export default (state = initialState, action) => {
  switch (action.type) {
    case SET_HEADER_STYLE: {
      return {
        ...state,
        headerStyle: window.scrollY > 100 ? 'compact' : 'full'
      };
    }
    case TOGGLE_MAIN_MENU: {
      return {
        ...state,
        mainMenuOpen: !state.mainMenuOpen
      };
    }
    case CLOSE_MAIN_MENU: {
      return {
        ...state,
        mainMenuOpen: false
      };
    }
    case TOGGLE_PROFILE_MENU: {
      return {
        ...state,
        profileMenuOpen: !state.profileMenuOpen
      };
    }
    case CLOSE_PROFILE_MENU: {
      return {
        ...state,
        profileMenuOpen: false
      };
    }
    default:
      return state;
  }
};

export const setHeaderStyle = () => {
  return {
    type: SET_HEADER_STYLE
  };
};

export const toggleMainMenu = () => {
  return {
    type: TOGGLE_MAIN_MENU
  };
};

export const closeMainMenu = () => {
  return {
    type: CLOSE_MAIN_MENU
  };
};

export const toggleProfileMenu = () => {
  return {
    type: TOGGLE_PROFILE_MENU
  };
};

export const closeProfileMenu = () => {
  return {
    type: CLOSE_PROFILE_MENU
  };
};
