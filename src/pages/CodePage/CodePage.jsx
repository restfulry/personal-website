import React from "react";
import { TextSection, PortfolioSection } from "../../components";
import { CodeTextHeader, PortfolioSectionData } from './Data';

import "./CodePage.css"

const codePage = () => {
  return (
    <>
    <TextSection {...CodeTextHeader}/>
    <PortfolioSection {...PortfolioSectionData}/>
    </>
  )
}

export default codePage;