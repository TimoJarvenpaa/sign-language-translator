import {
  ACTION_REGISTER_ATTEMPT,
  ACTION_REGISTER_ERROR,
  ACTION_REGISTER_SUCCESS,
} from "../actions/registerActions";

const initialState = {
  registerAttempting: false,
  registerError: "",
};

// the code for the reducer is modified from the example project source code at
// https://gitlab.com/sumodevelopment/react-txt-forum-client

export const registerReducer = (state = { ...initialState }, action) => {
  switch (action.type) {
    case ACTION_REGISTER_ATTEMPT:
      return {
        ...state,
        registerAttempting: true,
        registerError: "",
      };
    case ACTION_REGISTER_SUCCESS:
      return {
        ...initialState,
      };
    case ACTION_REGISTER_ERROR:
      return {
        ...state,
        registerAttempting: false,
        registerError: action.payload,
      };
    default:
      return state;
  }
};