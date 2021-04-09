import React from "react";
import { Link } from 'react-router-dom';
import { InfoSection, HeroSection } from "../../components";
import { homeHeroOne, homeHeroTwo, homeHeroThree, homeObjTwo, homeObjThree, homeObjFour } from './Data';

import "./HomePage.css"

const homePage = () => {
  return (
    <div>
      <HeroSection {...homeHeroOne}/>
      <HeroSection {...homeHeroTwo}/>
      <HeroSection {...homeHeroThree}/>
    </div>
  )
}

export default homePage;