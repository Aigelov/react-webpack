import React from "react";
import { Provider } from "react-redux";
import { render } from "react-dom";
import { App } from "./components/App.jsx";
import { store } from "./reducers/index";
import "./index.less";

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
