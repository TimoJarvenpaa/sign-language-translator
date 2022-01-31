export const ACTION_TRANSLATION_SET = "[translation] SET";
export const ACTION_TRANSLATION_CREATE = "[translation] CREATE";
export const ACTION_TRANSLATION_CLEAR = "[translation] CLEAR";
export const ACTION_TRANSLATION_CREATE_ERROR = "[translation] CREATE_ERROR";

export const translationsSetAction = translations => ({
	type: ACTION_TRANSLATION_SET,
	payload: translations,
});

export const translationCreateAction = payload => ({
	type: ACTION_TRANSLATION_CREATE,
	payload: payload,
});

export const translationClearAction = payload => ({
	type: ACTION_TRANSLATION_CLEAR,
	payload: payload,
});

export const translationCreateErrorAction = error => ({
	type: ACTION_TRANSLATION_CREATE_ERROR,
	payload: error,
});
