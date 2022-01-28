export const ACTION_TRANSLATION_SET = "[translation] SET";
export const ACTION_TRANSLATION_CREATE = "[translation] CREATE";
export const ACTION_TRANSLATION_CREATE_ERROR = "[translation] CREATE_ERROR";

export const translationsSetAction = translations => ({
	type: ACTION_TRANSLATION_SET,
	payload: translations,
});

export const translationCreateAction = translation => ({
	type: ACTION_TRANSLATION_CREATE,
	payload: translation,
});

export const translationCreateErrorAction = error => ({
	type: ACTION_TRANSLATION_CREATE_ERROR,
	payload: error,
});
