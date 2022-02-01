export const ACTION_REGISTER_ATTEMPT = "[register] ATTEMPT";
export const ACTION_REGISTER_SUCCESS = "[register] SUCCESS";
export const ACTION_REGISTER_ERROR = "[register] ERROR";

// the code for these actions are modified from the example project source code at
// https://gitlab.com/sumodevelopment/react-txt-forum-client

// redux action for register attempt
export const registerAttemptAction = user => ({
	type: ACTION_REGISTER_ATTEMPT,
	payload: user,
});

// redux action for a successful registration
export const registerSuccessAction = user => ({
	type: ACTION_REGISTER_SUCCESS,
	payload: user,
});

// redux action for an successful registration
export const registerErrorAction = error => ({
	type: ACTION_REGISTER_ERROR,
	payload: error,
});
