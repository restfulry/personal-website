import React, { useLayoutEffect, useEffect, useState, useRef } from "react";
import {
  MainTitleSection,
  TextSection,
} from "../../components";
import { ChocoTextHeader, TextSectionData } from "./Data";
import { NavBar2 } from "../../components";

const ChocolatePage = ({
  xStretch,
  yStretch,
  xAxisRotate,
  yAxisRotate,
  rotateAngle,
  xTranslate,
  yTranslate,
}) => {

  const [show, doShow] = useState({ 
    showRef1: false, 
    showRef2: false, 
    showRef3: false, 
  });

  const ref1 = useRef(null),
        ref2 = useRef(null),
        ref3 = useRef(null);

  useLayoutEffect(() => {
    const topPos = element => element.getBoundingClientRect().top;
    const div1Pos = topPos(ref1.current),
          div2Pos = topPos(ref2.current),
          div3Pos = topPos(ref3.current);

   const onScroll = () => {
     const scrollPos = window.scrollY + window.innerHeight;
     if (div1Pos < scrollPos) {
       doShow(state => ({...state, showRef1: true}));
     }
    
     if (div2Pos < scrollPos) {
      doShow(state => ({...state, showRef2: true}));
    }
    
     if (div3Pos < scrollPos) {
      doShow(state => ({...state, showRef3: true}));
    }
   };

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    doShow(state => ({...state, showRef2: true}));
  }, [])

  return (
    <>
      <NavBar2 orangeBg="true" animate={show.showRef1} ref1={ref1}/>
      <MainTitleSection
        {...ChocoTextHeader}
        animate={show.showRef2}
        ref2={ref2}
        xStretch={xStretch}
        yStretch={yStretch}
        xAxisRotate={xAxisRotate}
        yAxisRotate={yAxisRotate}
        xTranslate={xTranslate}
        yTranslate={yTranslate}
        rotateAngle={rotateAngle}
      />
      <TextSection {...TextSectionData} animate={show.showRef3} ref3={ref3}/>
    </>
  );
};

export default ChocolatePage;
