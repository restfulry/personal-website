import React from "react";
import ReactPlayer from "react-player";
import styles from "./FilmPage.css";
import { TextSection, PortfolioSection } from "../../components";
import { FilmTextHeader, PortfolioSectionData } from "./Data";

const filmPage = () => {
  return (
    <>
      <TextSection {...FilmTextHeader} />
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
