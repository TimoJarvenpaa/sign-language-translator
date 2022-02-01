export const ACTION_LOGIN_ATTEMPT = "[login] ATTEMPT";
export const ACTION_LOGIN_SUCCESS = "[login] SUCCESS";
export const ACTION_LOGIN_ERROR = "[login] ERROR";

// the code for these actions are modified from the example project source code at
// https://gitlab.com/sumodevelopment/react-txt-forum-client

// redux action for login attempt
export const loginAttemptAction = (username) => ({
  type: ACTION_LOGIN_ATTEMPT,
  payload: username,
});

// redux action for a successful login
export const loginSuccessAction = (user) => ({
  type: ACTION_LOGIN_SUCCESS,
  payload: user,
});

// redux action for an unsuccessful login
export const loginErrorAction = (error) => ({
  type: ACTION_LOGIN_ERROR,
  payload: error,
});
