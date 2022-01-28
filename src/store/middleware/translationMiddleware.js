import { TranslateAPI } from "../../components/Translate/TranslateAPI";
import {
  ACTION_TRANSLATION_CREATE,
  translationCreateErrorAction,
} from "../actions/translationActions";
import { sessionSetAction } from "../actions/sessionActions";

export const translationMiddleware =
  ({ dispatch }) =>
  (next) =>
  (action) => {
    next(action);

    if (action.type === ACTION_TRANSLATION_CREATE) {
      TranslateAPI.createTranslation(action.payload)
        .then((user) => {
          dispatch(sessionSetAction(user));
        })
        .catch((error) => {
          dispatch(translationCreateErrorAction(error.message));
        });
    }
  };
