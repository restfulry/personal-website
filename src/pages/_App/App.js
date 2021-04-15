import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import "./App.css";
import GlobalStyle from "../../globalStyles";

import { Navbar2, Footer } from "../../components";

// import NavBar from "../../components/NavBar/NavBar";
// import Footer from "../Footer/Footer";
import HomePage from "../HomePage/HomePage";
import CodePage from "../CodePage/CodePage";
import FilmPage from "../FilmPage/FilmPage";
import ScrollToTop from "../../components/ScrollToTop";

function App() {
  return (
    <div className="App">
      <GlobalStyle />
      <ScrollToTop />
      <Navbar2 />
      <Switch>
        <Route exact path="/" render={() => <HomePage />} />
        <Route exact path="/code" render={() => <CodePage />} />
        <Route exact path="/film" render={() => <FilmPage />} />
        <Route exact path="/chocolate" render={() => <HomePage />} />
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
