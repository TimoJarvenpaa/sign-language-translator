import { LoginAPI } from "../../components/Login/LoginAPI";
import {
  ACTION_LOGIN_ATTEMPT,
  ACTION_LOGIN_SUCCESS,
  loginErrorAction,
  loginSuccessAction,
} from "../actions/loginActions";
import { sessionSetAction } from "../actions/sessionActions";

export const loginMiddleware =
  ({ dispatch }) =>
  (next) =>
  (action) => {
    next(action);

    if (action.type === ACTION_LOGIN_ATTEMPT) {
      LoginAPI.login(action.payload)
        .then((user) => {
          dispatch(loginSuccessAction(user));
        })
        .catch((error) => {
          dispatch(loginErrorAction(error.message));
        });
    }

    if (action.type === ACTION_LOGIN_SUCCESS) {
      dispatch(sessionSetAction(action.payload));
    }
  };
