import React from "react";
import { TextSection, PortfolioSection } from "../../components";
import { CodeTextHeader, CodeTextHeaderBackground, PortfolioSectionData } from './Data';
import { Navbar2 } from "../../components";

import "./CodePage.css"

const CodePage = ({  
  xStretch,
  yStretch,
  xAxisRotate,
  yAxisRotate,
  xTranslate,
  yTranslate}) => {

  return (
    <>
    <Navbar2 blueBg="true"/>
    <TextSection 
      {...CodeTextHeader} 
      xStretch={xStretch} 
      yStretch={yStretch} 
      xAxisRotate={xAxisRotate} 
      yAxisRotate={yAxisRotate} 
      xTranslate={xTranslate} 
      yTranslate={yTranslate}/>
    <PortfolioSection {...PortfolioSectionData}/>
    </>
  )
}

export default CodePage;