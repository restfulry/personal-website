import React, { useLayoutEffect, useRef, useState } from "react";
import { MainTitleSection, PortfolioSection, TextSection } from "../../components";
import {
  CodeTextHeader,
  PortfolioSectionData,
  TextSectionData,
} from "./Data";
import { Navbar2 } from "../../components";

import "./CodePage.css";

const CodePage = ({
  xStretch,
  yStretch,
  xAxisRotate,
  yAxisRotate,
  xTranslate,
  yTranslate,
}) => {

  const [show, doShow] = useState({ showNavbar2: false, showMainTitleSection: false, showTextSection: false, showPortfolioSection: false});

  const ref1 = useRef(null),
        ref2 = useRef(null),
        ref3 = useRef(null),
        ref4 = useRef(null);

  useLayoutEffect(() => {
    const topPos = element => element.getBoundingClientRect().top;
    const div1Pos = topPos(ref1.current),
          div2Pos = topPos(ref2.current),
          div3Pos = topPos(ref3.current),
          div4Pos = topPos(ref4.current);

   const onScroll = () => {
     const scrollPos = window.scrollY + window.innerHeight;
     if (div1Pos < scrollPos) {
       console.log(div3Pos);
       doShow(state => ({...state, showNavbar2: true}));
     }
    
     if (div2Pos < scrollPos) {
      doShow(state => ({...state, showMainTitleSection: true}));
    }
    
     if (div3Pos < scrollPos) {
      doShow(state => ({...state, showTextSection: true}));
    }
     if (div4Pos < scrollPos) {
      doShow(state => ({...state, showPortfolioSection: true}));
    }
   };


    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);


  return (
    <>
      <Navbar2 blueBg="true" ref1={ref1}/>
      <MainTitleSection
        {...CodeTextHeader}
        xStretch={xStretch}
        yStretch={yStretch}
        xAxisRotate={xAxisRotate}
        yAxisRotate={yAxisRotate}
        xTranslate={xTranslate}
        yTranslate={yTranslate}
        animate={show.showMainTitleSection}
        ref2={ref2}
      />
      <div ref={ref3}>

        <TextSection {...TextSectionData} animate={show.showTextSection} />
      </div>
      <PortfolioSection {...PortfolioSectionData} ref4={ref4}/>
    </>
  );
};

export default CodePage;
