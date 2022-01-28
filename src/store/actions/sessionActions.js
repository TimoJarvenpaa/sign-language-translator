export const ACTION_SESSION_INIT = "[session] INIT";
export const ACTION_SESSION_SET = "[session] SET";
export const ACTION_SESSION_CLEAR = "[session] CLEAR";
export const ACTION_SESSION_LOGOUT = "[session] LOGOUT";

export const sessionSetAction = (session) => ({
  type: ACTION_SESSION_SET,
  payload: session,
});

export const sessionLogoutAction = () => ({
  type: ACTION_SESSION_LOGOUT,
});

export const sessionInitAction = () => ({
  type: ACTION_SESSION_INIT,
});

export const sessionClearAction = () => ({
  type: ACTION_SESSION_CLEAR,
});
