import { RegisterAPI } from "../../components/Register/RegisterAPI";
import {
  ACTION_REGISTER_ATTEMPT,
  ACTION_REGISTER_SUCCESS,
  registerErrorAction,
  registerSuccessAction,
} from "../actions/registerActions";

// the code for this middleware is modified from the example project source code at
// https://gitlab.com/sumodevelopment/react-txt-forum-client


export const registerMiddleware =
  ({ dispatch }) =>
  (next) =>
  (action) => {
    next(action);

    if (action.type === ACTION_REGISTER_ATTEMPT) {
      // use the RegisterAPI, payload is the username
      RegisterAPI.register(action.payload)
        // API returns an user object
        .then((user) => {
          // succesful registration
          dispatch(registerSuccessAction(user));
        })
        .catch((error) => {
          // unsuccessful registration
          dispatch(registerErrorAction(error.message));
        });
    }

    if (action.type === ACTION_REGISTER_SUCCESS) {
      // do nothing since we don't want to log the user in automatically
    }
  };
