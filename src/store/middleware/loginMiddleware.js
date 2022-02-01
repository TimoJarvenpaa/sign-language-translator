import { LoginAPI } from "../../components/Login/LoginAPI";
import {
  ACTION_LOGIN_ATTEMPT,
  ACTION_LOGIN_SUCCESS,
  loginErrorAction,
  loginSuccessAction,
} from "../actions/loginActions";
import { sessionSetAction } from "../actions/sessionActions";

// the code for this middleware is modified from the example project source code at
// https://gitlab.com/sumodevelopment/react-txt-forum-client

export const loginMiddleware =
  ({ dispatch }) =>
  (next) =>
  (action) => {
    next(action);

    if (action.type === ACTION_LOGIN_ATTEMPT) {
      // use the LoginAPI, payload is the username
      LoginAPI.login(action.payload)
        // API returns an user object
        .then((user) => {
          // successful login
          dispatch(loginSuccessAction(user));
        })
        .catch((error) => {
          // unsuccessful login
          dispatch(loginErrorAction(error.message));
        });
    }

    if (action.type === ACTION_LOGIN_SUCCESS) {
      // set the user object as the current session state
      dispatch(sessionSetAction(action.payload));
    }
  };
