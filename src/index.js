import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { Provider } from "react-redux";
import store from "./store";
import { sessionInitAction } from './store/actions/sessionActions';
import "bootstrap/dist/css/bootstrap.min.css";

store.dispatch(sessionInitAction());

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
