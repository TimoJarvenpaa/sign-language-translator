import { combineReducers } from "redux";
import { ACTION_SESSION_CLEAR } from "../actions/sessionActions";
import { loginReducer } from "./loginReducer";
import { sessionReducer } from "./sessionReducer";
import { registerReducer } from "./registerReducer";
import { translationReducer } from "./translationReducer";

const appReducer = combineReducers({
  login: loginReducer,
  session: sessionReducer,
  register: registerReducer,
  translation: translationReducer
});

const rootReducer = (state, action) => {
  if (action.type === ACTION_SESSION_CLEAR) {
      state = undefined
  }
  return appReducer(state, action)
}


export default rootReducer;
