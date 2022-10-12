import React from "react";
import ReactDOM from "react-dom/client";
// import { legacy_createStore as createStore } from "redux";
import { legacy_createStore as createStore } from "redux";
import "./index.css";
import App from "./components/App";
import rootReducer from "./reducers";
// import { createStore } from "redux";

const store = createStore(rootReducer);
// const store = createStore(movies);
// console.log(store);
// console.log(store.getState());

// store.dispatch({
//   type: "ADD_MOVIES",
//   movies: [{ name: "don" }],
// });

// console.log("after State", store.getState());

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App store={store} />);
