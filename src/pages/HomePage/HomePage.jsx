import React from "react";
import { Navbar2, HeroSection } from "../../components";
import { homeHeroOne, homeHeroTwo, homeHeroThree } from './Data';

import "./HomePage.css"

const homePage = () => {
  return (
    <div>
      <Navbar2 />
      <HeroSection {...homeHeroOne}/>
      <HeroSection {...homeHeroTwo}/>
      <HeroSection {...homeHeroThree}/>
    </div>
  )
}

export default homePage;