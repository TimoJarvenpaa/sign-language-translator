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
			TranslateAPI.createTranslation(
				action.payload.translations,
				action.payload.id
			)
				.then(user => {
					dispatch(sessionSetAction(user));
				})
				.catch(error => {
					dispatch(translationCreateErrorAction(error.message));
				});
		}

		if (action.type === ACTION_TRANSLATION_CLEAR) {
			TranslateAPI.clearTranslations(
				action.payload.translations,
				action.payload.id
			)
				.then(user => {
					dispatch(sessionSetAction(user));
				})
				.catch(error => {
					// TODO
				});
		}
	};
