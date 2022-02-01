import { createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import rootReducer from "./reducers";
import rootMiddleware from "./middleware";

// NB!
// the templates for login/register/session and the boilerplate code for the redux setup was
// implemented by following the example project source code written by Dewald Els in
// https://gitlab.com/sumodevelopment/react-txt-forum-client

export default createStore(rootReducer, composeWithDevTools(rootMiddleware));