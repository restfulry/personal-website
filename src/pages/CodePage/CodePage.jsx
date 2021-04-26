import React, { useEffect, useLayoutEffect, useRef, useState } from "react";
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

  const [show, doShow] = useState({ 
    showRef1: false, 
    showRef2: false, 
    showRef3: false, 
    showRef4: false,
    showRef5: false,
  });

  const ref1 = useRef(null),
        ref2 = useRef(null),
        ref3 = useRef(null),
        ref4 = useRef(null),
        ref5 = useRef(null);

  useLayoutEffect(() => {
    const topPos = element => element.getBoundingClientRect().top;
    const div1Pos = topPos(ref1.current),
          div2Pos = topPos(ref2.current),
          div3Pos = topPos(ref3.current),
          div4Pos = topPos(ref4.current),
          div5Pos = topPos(ref5.current);

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

     if (div4Pos < scrollPos) {
      doShow(state => ({...state, showRef4: true}));
    }

     if (div5Pos < scrollPos) {
      doShow(state => ({...state, showRef5: true}));
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
      <Navbar2 blueBg="true" animate={show.showRef1} ref1={ref1}/>
      <MainTitleSection
        {...CodeTextHeader}
        animate={show.showRef2}
        ref2={ref2}
        xStretch={xStretch}
        yStretch={yStretch}
        xAxisRotate={xAxisRotate}
        yAxisRotate={yAxisRotate}
        xTranslate={xTranslate}
        yTranslate={yTranslate}
      />
      <div>
        <TextSection {...TextSectionData} animate={show.showRef3} ref3={ref3}/>
      </div>
      <div>
        <PortfolioSection {...PortfolioSectionData} ref4={ref4} ref5={ref5} animate={show.showRef4} animate5={show.showRef5}/>
      </div>
    </>
  );
};

export default CodePage;
