import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, HashRouter, Route } from "react-router-dom";
import "./index.css";
import App from "./pages/_App/App";
import reportWebVitals from "./reportWebVitals";

ReactDOM.render(
  <Router>
    <App />
  </Router>,
  document.getElementById("root")
);

reportWebVitals();
