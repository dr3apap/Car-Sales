import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import logger from "redux-logger";
import { createStore, applyMiddleware } from "redux";
import "bulma/css/bulma.css";
import "./styles.scss";
import { Provider } from "react-redux";
import { carReducer } from "./carReducer";
// const reduxLogger = require("redux-logger");
// const logger = reduxLogger.createLogger();
// const applyMiddleware = redux.applyMiddleware;
const rootElement = document.getElementById("root");

const store = createStore(carReducer);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  rootElement,
);
