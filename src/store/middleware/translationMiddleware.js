import { TranslateAPI } from "../../components/Translate/TranslateAPI";
import {
	ACTION_TRANSLATION_CREATE,
	ACTION_TRANSLATION_CLEAR,
	translationCreateErrorAction,
} from "../actions/translationActions";
import { sessionSetAction } from "../actions/sessionActions";

export const translationMiddleware =
	({ dispatch }) =>
	next =>
	action => {
		next(action);

		if (action.type === ACTION_TRANSLATION_CREATE) {
			// use the TranslateAPI function
			TranslateAPI.createTranslation(
				action.payload.translations,
				action.payload.id
			)
				// API returns an updated user object
				.then(user => {
					// update the session
					dispatch(sessionSetAction(user));
				})
				.catch(error => {
					// relay the error message
					dispatch(translationCreateErrorAction(error.message));
				});
		}

		if (action.type === ACTION_TRANSLATION_CLEAR) {
			// use the TranslateAPI
			TranslateAPI.clearTranslations(
				action.payload.translations,
				action.payload.id
			)
				// API returns an updated user object
				.then(user => {
					// update the session
					dispatch(sessionSetAction(user));
				})
				.catch(error => {
					// not handeled currently, API doesn't return error messages
				});
		}
	};
