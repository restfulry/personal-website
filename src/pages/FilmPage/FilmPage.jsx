import React, { useLayoutEffect, useEffect, useState, useRef } from "react";
import ReactPlayer from "react-player";
import styles from "./FilmPage.css";
import { Button } from "../../globalStyles";
import { NavBarTwo, MainTitleSection, TextSection } from "../../components";
import { FilmTextHeader, TextSectionData } from "./Data";

const FilmPage = ({
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
  });

  const [vimeoUrl, setVimeoUrl] = useState("https:/vimeo.com/aliacreative/aliademo2018");

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
  }, []);

  const handleClick = (input) => {
    if (input === "vid1") {
      setVimeoUrl("https://vimeo.com/273438866");
    };
  };

  return (
    <>
      <NavBarTwo whiteBg="true" animate={show.showRef1} ref1={ref1}/>
      <MainTitleSection
        {...FilmTextHeader}
        animate={show.showRef2}
        ref2={ref2}
        xStretch={xStretch}
        yStretch={yStretch}
        xAxisRotate={xAxisRotate}
        yAxisRotate={yAxisRotate}
        xTranslate={xTranslate}
        yTranslate={yTranslate}
      />
      <TextSection {...TextSectionData} animate={show.showRef3} ref3={ref3}/>
      <Button>1</Button> <Button onClick={handleClick} >2</Button> <Button>3</Button> <Button>4</Button>
      <div className="video-section">
        <div className="player-wrapper">
          <ReactPlayer
            className="react-player"
            url={vimeoUrl}
            width="100%"
            height="100%"
            controls="true"
          />
        </div>
        <div className="player-wrapper">
          <ReactPlayer
            className="react-player"
            url="https://vimeo.com/273438866"
            width="100%"
            height="100%"
            controls="true"
          />
        </div>
        <div className="player-wrapper">
          <ReactPlayer
            className="react-player"
            url="https://vimeo.com/346423179"
            width="100%"
            height="100%"
            controls="true"
          />
        </div>
      </div>
    </>
  );
};

export default FilmPage;
