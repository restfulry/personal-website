import React from "react";
import {
  MainTitleSection,
  TextSection,
} from "../../components";
import { ChocoTextHeader, TextSectionData } from "./Data";
import { NavBarTwo } from "../../components";

const ChocolatePage = ({
  xStretch,
  yStretch,
  xAxisRotate,
  yAxisRotate,
  rotateAngle,
  xTranslate,
  yTranslate,
}) => {
  return (
    <>
      <NavBarTwo orangeBg="true" />
      <TextSection {...TextSectionData} />
    </>
  );
};

export default ChocolatePage;
