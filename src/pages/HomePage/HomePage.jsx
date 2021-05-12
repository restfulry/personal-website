import React from "react";
import { NavBarTwo, HeroSection } from "../../components";
import { homeHeroOne, homeHeroTwo, homeHeroThree } from './Data';

import "./HomePage.css"

const homePage = () => {
  return (
    <div>
      <NavBarTwo />
      <HeroSection {...homeHeroOne}/>
      <HeroSection {...homeHeroTwo}/>
      <HeroSection {...homeHeroThree}/>
    </div>
  )
}

export default homePage;