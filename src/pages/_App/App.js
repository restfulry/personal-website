import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import "./App.css";

import NavBar from "../../components/NavBar/NavBar";
import CodePage from "../CodePage/CodePage";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Switch>
        <CodePage />
        <div className="flex-h film">
          <h1 className="header-large film">Film.</h1>
        </div>
        <div className="flex-h chocolate">
          <h1 className="header-large chocolate">Chocolate.</h1>
        </div>
      </Switch>
    </div>
  );
}

export default App;
