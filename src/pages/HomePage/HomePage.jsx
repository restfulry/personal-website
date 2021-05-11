import React from "react";
import { NavBar2, HeroSection } from "../../components";
import { homeHeroOne, homeHeroTwo, homeHeroThree } from './Data';

import "./HomePage.css"

const homePage = () => {
  return (
    <div>
      <NavBar2 />
      <HeroSection {...homeHeroOne}/>
      <HeroSection {...homeHeroTwo}/>
      <HeroSection {...homeHeroThree}/>
    </div>
  )
}

export default homePage;