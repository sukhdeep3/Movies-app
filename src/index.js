import React from "react";
import ReactDOM from "react-dom/client";
// import { legacy_createStore as createStore } from "redux";
import { applyMiddleware, legacy_createStore as createStore } from "redux";
import "./index.css";
import App from "./components/App";
import rootReducer from "./reducers";
// import { createStore } from "redux";

// const logger = function ({ dispatch, getState }) {
//   return function (next) {
//     return function (action) {
//       console.log("Action_type", action.type);
//       next(action);
//     };
//   };
// };

const logger =
  ({ dispatch, getState }) =>
  (next) =>
  (action) => {
    console.log("ACTION_TYPE", action.type);
    next(action)
  };

const store = createStore(rootReducer, applyMiddleware(logger));

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App store={store} />);
