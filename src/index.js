import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { Provider } from "react-redux";
import store from "./store";
import { sessionInitAction } from "./store/actions/sessionActions";
import "bootstrap/dist/css/bootstrap.min.css";

// checks the local storage for an existing session and sets it as the current session state
store.dispatch(sessionInitAction());

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
