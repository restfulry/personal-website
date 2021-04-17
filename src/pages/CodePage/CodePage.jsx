import React, { useEffect, useCallback, useState } from "react";
import {useThrottle} from 'react-use';
import { TextSection, PortfolioSection } from "../../components";
import { CodeTextHeader, CodeTextHeaderBackground, PortfolioSectionData } from './Data';

import "./CodePage.css"

const CodePage = () => {
  const [mouseX, setMouseX] = useState(0);
  const [mouseY, SetMouseY] = useState(0);
  const throttledMouseX = useThrottle(mouseX, 170);
  const throttledMouseY = useThrottle(mouseY, 170);

  const [mouseRelX, setMouseRelX] = useState(0);
  const [mouseRelY, setMouseRelY] = useState(0);
  const [xStretch, setXStretch] = useState(0.9996);
  const [yStretch, setYStretch] = useState(0.9996);
  const [xAxisRotate, setXAxisRotate] = useState(0);
  const [yAxisRotate, setYAxisRotate] = useState(0);
  const [xTranslate, setXTranslate] = useState(0);
  const [yTranslate, setYTranslate] = useState(0);

  const mouseMove = useCallback(
    (e) => {
        setMouseX(e.clientX);
        SetMouseY(e.clientY);
    },
    []
  )

  useEffect(() => {
        const winWidth = window.innerWidth;
        const winHeight = window.innerHeight;
        const relXPos = (throttledMouseX/winWidth * 2) - 1;
        const relYPos = (throttledMouseY/winHeight * 2) - 1;
  
        const xStretch = 0.9996 + relXPos * 0.000012;
        const yStretch = 0.9996 + relYPos * 0.000012;
        
        const xAxisRotate = -relYPos * .0286474;
        const yAxisRotate = -relXPos * .0286474;
  
        const xTranslate = relXPos * 18;
        const yTranslate = relYPos * 44;

        setMouseRelX(relXPos);
        setMouseRelY(relYPos);
  
        setXStretch(xStretch);
        setYStretch(yStretch);
  
        setXAxisRotate(xAxisRotate.toFixed(2));
        setYAxisRotate(yAxisRotate.toFixed(2));
  
        setXTranslate(xTranslate);
        setYTranslate(yTranslate);
    },
    [throttledMouseX, throttledMouseY]
  );

  useEffect(() => {
    document.addEventListener("mousemove", mouseMove); 
    return () => {
      document.removeEventListener("mousemove", mouseMove);
    }
  }, [mouseMove])

  return (
    <>
    <TextSection 
      {...CodeTextHeader} 
      mouseX={mouseX} 
      mouseRelX={mouseRelX} 
      mouseRelY={mouseRelY} 
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