import React from "react";
import { Link } from 'react-router-dom';

import "./NavBar.css";

const NavBar = () => {
  return (
    <div className="header-footer nav">
      <Link to={{pathname: "/"}} className="NavBar" id="home">Ryan Lee</Link>
      <Link to={{pathname: "/code"}} className="NavBar-link">Code</Link>
      <Link to={{pathname: "/film"}} className="NavBar-link">Film</Link>
      <Link to={{pathname: "/chocolate"}} className="NavBar-link">Chocolate</Link>
    </div>
  )
};

export default NavBar;