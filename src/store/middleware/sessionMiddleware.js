import {
  ACTION_SESSION_CLEAR,
  ACTION_SESSION_INIT,
  ACTION_SESSION_LOGOUT,
  ACTION_SESSION_SET,
  sessionClearAction,
  sessionSetAction,
} from "../actions/sessionActions";

export const sessionMiddleware =
  ({ dispatch }) =>
  (next) =>
  (action) => {
    next(action);

    if (action.type === ACTION_SESSION_INIT) {
      const storedSession = localStorage.getItem("slt-session");
      if (!storedSession) {
        return;
      }
      const session = JSON.parse(storedSession);
      dispatch(sessionSetAction(session));
    }

    if (action.type === ACTION_SESSION_SET) {
      localStorage.setItem("slt-session", JSON.stringify(action.payload));
    }

    if (action.type === ACTION_SESSION_CLEAR) {
      localStorage.removeItem("slt-session");
    }

    if (action.type === ACTION_SESSION_LOGOUT) {
      dispatch(sessionClearAction());
    }
  };
