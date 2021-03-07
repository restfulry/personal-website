import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import "./App.css";

import NavBar from "../../components/NavBar/NavBar";
import HomePage from "../HomePage/HomePage";
import CodePage from "../CodePage/CodePage";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Switch>
        <Route exact path="/" render={() => <HomePage />} />
        <Route exact path="/code" render={() => <CodePage />} />
        <Route exact path="/film" render={() => <HomePage />} />
        <Route exact path="/chocolate" render={() => <HomePage />} />
      </Switch>
    </div>
  );
}

export default App;
