import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { applyMiddleware, legacy_createStore as createStore } from "redux";
import thunk from "redux-thunk";

import "./index.css";
import App from "./components/App";
import rootReducer from "./reducers";

const logger =
  ({ dispatch, getState }) =>
  (next) =>
  (action) => {
    if (typeof action !== "function") {
      // console.log("ACTION_TYPE", action.type);
    }

    next(action);
  };

const store = createStore(rootReducer, applyMiddleware(logger, thunk));


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);
