import {
  ACTION_SESSION_CLEAR,
  ACTION_SESSION_LOGOUT,
  ACTION_SESSION_SET,
} from "../actions/sessionActions";

const initialState = {
  id: "",
  username: "",
  translations: [],
  loggedIn: false,
};

// the code for the reducer is modified from the example project source code at
// https://gitlab.com/sumodevelopment/react-txt-forum-client

export const sessionReducer = (state = { ...initialState }, action) => {
  switch (action.type) {
    case ACTION_SESSION_SET:
      return {
        ...action.payload,
        loggedIn: true,
      };
    case ACTION_SESSION_CLEAR:
      return {
        ...initialState,
      };
    case ACTION_SESSION_LOGOUT:
      return {
        ...state,
        loggedIn: false,
      };
    default:
      return state;
  }
};
