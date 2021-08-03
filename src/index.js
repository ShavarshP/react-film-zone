import React, { createContext } from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import firebase from "firebase";
import "firebase/firestore";
import "firebase/auth";

firebase.initializeApp({
  apiKey: "AIzaSyBn_6lWBlSPT6r5tWQfpOYaw6gI4hzfxuk",
  authDomain: "creat-react.firebaseapp.com",
  projectId: "creat-react",
  storageBucket: "creat-react.appspot.com",
  messagingSenderId: "807023016779",
  appId: "1:807023016779:web:ae84ae4df83acb932ac6ce",
  measurementId: "G-ZW5E6ZCZ8G",
});

export const Context = createContext(null);

const auth = firebase.auth();
const firestore = firebase.firestore();

ReactDOM.render(
  <Context.Provider
    value={{
      firebase,
      auth,
      firestore,
    }}
  >
    <App />
  </Context.Provider>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
