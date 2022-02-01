export const ACTION_TRANSLATION_SET = "[translation] SET";
export const ACTION_TRANSLATION_CREATE = "[translation] CREATE";
export const ACTION_TRANSLATION_CLEAR = "[translation] CLEAR";
export const ACTION_TRANSLATION_CREATE_ERROR = "[translation] CREATE_ERROR";

// redux action for setting the translation state to match the payload
export const translationsSetAction = translations => ({
	type: ACTION_TRANSLATION_SET,
	payload: translations,
});

// redux action for appending a new translation to the translations,
// payload is an object with translations and an user id
export const translationCreateAction = payload => ({
	type: ACTION_TRANSLATION_CREATE,
	payload: payload,
});

// redux action for clearing the translations of an user
// payload is an object with translations and an user id
export const translationClearAction = payload => ({
	type: ACTION_TRANSLATION_CLEAR,
	payload: payload,
});

// redux action for setting an error message if translations can't be saved
// not used in the application currently
export const translationCreateErrorAction = error => ({
	type: ACTION_TRANSLATION_CREATE_ERROR,
	payload: error,
});
