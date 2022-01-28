import {
  ACTION_TRANSLATION_CREATE_ERROR,
  ACTION_TRANSLATION_SET,
} from "../actions/translationActions";

const initialState = {
  translations: [],
  translationCreateError: "",
};

export const translationReducer = (state = { ...initialState }, action) => {
  switch (action.type) {
    case ACTION_TRANSLATION_SET:
      return {
        ...state,
        translations: action.payload,
      };
    case ACTION_TRANSLATION_CREATE_ERROR:
      return {
        ...state,
        translationCreateError: action.payload,
      };
    default:
      return state;
  }
};
