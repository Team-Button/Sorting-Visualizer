import React from "react";
import ReactDOM from "react-dom";
import "./styling/dist/styles.css";
import App from "./App";
import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import { rootReducer } from "./states/reducers";
import thunk from "redux-thunk";
import * as serviceWorker from "./serviceWorker";

const store = createStore(rootReducer, applyMiddleware(thunk));

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
serviceWorker.unregister();
