import {
  ACTION_SESSION_CLEAR,
  ACTION_SESSION_INIT,
  ACTION_SESSION_LOGOUT,
  ACTION_SESSION_SET,
  sessionClearAction,
  sessionSetAction,
} from "../actions/sessionActions";
import { translationsSetAction } from "../actions/translationActions";

// the code for this middleware is modified from the example project source code at
// https://gitlab.com/sumodevelopment/react-txt-forum-client

export const sessionMiddleware =
  ({ dispatch }) =>
  (next) =>
  (action) => {
    next(action);

    if (action.type === ACTION_SESSION_INIT) {
      // check local storage for an existing session
      const storedSession = localStorage.getItem("slt-session");
      if (!storedSession) {
        return;
      }
      // parse it from a string to an object
      const session = JSON.parse(storedSession);
      // set the session
      dispatch(sessionSetAction(session));
    }

    if (action.type === ACTION_SESSION_SET) {
      // create (or overwrite) a new item in local storage to store the session
      localStorage.setItem("slt-session", JSON.stringify(action.payload));
      // also set the current translations state to match the session data
      dispatch(translationsSetAction(action.payload.translations));
    }

    if (action.type === ACTION_SESSION_CLEAR) {
      // clear the session from local storage
      localStorage.removeItem("slt-session");
    }

    if (action.type === ACTION_SESSION_LOGOUT) {
      dispatch(sessionClearAction());
    }
  };
