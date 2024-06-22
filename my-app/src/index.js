import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { Provider } from "react-redux";
import { applyMiddleware, compose } from 'redux';
import { createStore } from 'redux';
import thunk from "redux-thunk";
import Reducers from "./Reducers";

const store = createStore(Reducers, compose(applyMiddleware(thunk)));

//const clientId = "311871137229-4b5lsvtmg0sjnfic8g41dv610c7k7kbr.apps.googleusercontent.com"; // Replace with your Google client ID

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  
    <Provider store={store}>
      <React.StrictMode>
        <App />
      </React.StrictMode>
    </Provider>
  
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

