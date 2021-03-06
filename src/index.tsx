import React from "react";
import ReactDOM from "react-dom";
import "./root/index.css";
import App from "./root/App";
import { Provider } from "react-redux";
import reportWebVitals from "./reportWebVitals";

// Store
import store from "./redux/configureStore";

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
