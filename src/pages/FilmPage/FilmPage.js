import React from "react";
import ReactPlayer from "react-player";
import styles from "./FilmPage.css";
import { Navbar2, MainTitleSection, TextSection } from "../../components";
import { FilmTextHeader, TextSectionData } from "./Data";

const filmPage = ({
  xStretch,
  yStretch,
  xAxisRotate,
  yAxisRotate,
  xTranslate,
  yTranslate,
}) => {
  return (
    <>
      <Navbar2 whiteBg="true" />
      <MainTitleSection
        {...FilmTextHeader}
        xStretch={xStretch}
        yStretch={yStretch}
        xAxisRotate={xAxisRotate}
        yAxisRotate={yAxisRotate}
        xTranslate={xTranslate}
        yTranslate={yTranslate}
      />
      <TextSection {...TextSectionData} />
      <div className="player-wrapper">
        <ReactPlayer
          className="react-player"
          url="https://vimeo.com/aliacreative/aliademo2018"
          width="100%"
          height="100%"
          controls="true"
        />
      </div>
    </>
  );
};

export default filmPage;
