import React from "react";
import { Link } from 'react-router-dom';

const NavBar = () => {
  return (
    <div>
      <Link to={{pathname: "/code"}} className="NavBar-link align-flex-start">Code</Link>
    </div>
  )
};

export default NavBar;