export const ACTION_SESSION_INIT = "[session] INIT";
export const ACTION_SESSION_SET = "[session] SET";
export const ACTION_SESSION_CLEAR = "[session] CLEAR";
export const ACTION_SESSION_LOGOUT = "[session] LOGOUT";

// the code for these actions are modified from the example project source code at
// https://gitlab.com/sumodevelopment/react-txt-forum-client

// redux action for setting the session state to the object from the payload
export const sessionSetAction = (session) => ({
  type: ACTION_SESSION_SET,
  payload: session,
});

// redux action for logging out
export const sessionLogoutAction = () => ({
  type: ACTION_SESSION_LOGOUT,
});

// redux action to initialize session from local storage
export const sessionInitAction = () => ({
  type: ACTION_SESSION_INIT,
});

// redux action to clear session from local storage
export const sessionClearAction = () => ({
  type: ACTION_SESSION_CLEAR,
});
