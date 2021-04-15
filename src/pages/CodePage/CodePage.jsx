import React, { useEffect, useCallback, useState } from "react";
import { TextSection, PortfolioSection } from "../../components";
import { CodeTextHeader, PortfolioSectionData } from './Data';

import "./CodePage.css"

const CodePage = () => {

  const [mouseX, setMouseX] = useState(0);
  
  // find window size
  
  const mouseMove = useCallback(
    (e) => {
      const xPos = e.clientX;
      setMouseX(xPos);
    },
    [],
  )

  useEffect(() => {
    document.addEventListener("mousemove", mouseMove); 
    return () => {
      document.removeEventListener("mousemove", mouseMove);
    }
  }, [mouseMove])

  return (
    <>
    <TextSection {...CodeTextHeader} mouseX={mouseX}/>
    <PortfolioSection {...PortfolioSectionData}/>
    </>
  )
}

export default CodePage;