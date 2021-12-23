import React from "react";
import ReactDOM from "react-dom";
import { ToastProvider } from "react-toast-notifications";
import { Provider } from "react-redux";

import App from "./App";
import store from "./store";

import "bootstrap/dist/css/bootstrap.min.css";

ReactDOM.render(
  <Provider store={store}>
    <ToastProvider placement="top-center">
      <App />
    </ToastProvider>
  </Provider>,
  document.getElementById("root")
);
