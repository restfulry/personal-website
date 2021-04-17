import React from "react";
import ReactPlayer from "react-player";
import styles from "./FilmPage.css";
import { Navbar2, TextSection, PortfolioSection } from "../../components";
import { FilmTextHeader, PortfolioSectionData } from "./Data";

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
      <TextSection
        {...FilmTextHeader}
        xStretch={xStretch}
        yStretch={yStretch}
        xAxisRotate={xAxisRotate}
        yAxisRotate={yAxisRotate}
        xTranslate={xTranslate}
        yTranslate={yTranslate}
      />
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
