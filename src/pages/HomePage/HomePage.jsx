import React from "react";
import { Link } from 'react-router-dom';
import { InfoSection } from "../../components";
import { homeObjOne, homeObjTwo, homeObjThree, homeObjFour } from './Data';

import "./HomePage.css"

const homePage = () => {
  return (
    <div>
      <InfoSection {...homeObjOne}/>
      <InfoSection {...homeObjTwo}/>
      <InfoSection {...homeObjThree}/>
      <InfoSection {...homeObjFour}/>

      <div className="flex-h code">
          <Link to={{pathname: "/code"}} className="HomePage-link code">
            <h1 className="header-large code">Code.</h1>
          </Link>
      </div>

      <div className="flex-h film">
          <Link to={{pathname: "/film"}} className="HomePage-link film">
              <h1 className="header-large film">Film.</h1>
          </Link>
      </div>

      <div className="flex-h chocolate">
          <Link to={{pathname: "/chocolate"}} className="HomePage-link chocolate">
              <h1 className="header-large chocolate">Chocolate.</h1>
          </Link>
      </div>
    </div>
  )
}

export default homePage;