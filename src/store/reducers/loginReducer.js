import {
  ACTION_LOGIN_ATTEMPT,
  ACTION_LOGIN_ERROR,
  ACTION_LOGIN_SUCCESS,
} from "../actions/loginActions";
const initialState = {
  loginAttempting: false,
  loginError: "",
};

// the code for the reducer is modified from the example project source code at
// https://gitlab.com/sumodevelopment/react-txt-forum-client

export const loginReducer = (state = { ...initialState }, action) => {
  switch (action.type) {
    case ACTION_LOGIN_ATTEMPT:
      return {
        ...state,
        loginAttempting: true,
        loginError: "",
      };
    case ACTION_LOGIN_SUCCESS:
      return {
        ...initialState,
      };
    case ACTION_LOGIN_ERROR:
      return {
        ...state,
        loginAttempting: false,
        loginError: action.payload,
      };
    default:
      return state;
  }
};