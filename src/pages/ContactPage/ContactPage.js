import React from "react";
import {
  MainTitleSection,
  TextSection,
} from "../../components";
import { ChocoTextHeader, TextSectionData } from "./Data";
import { Navbar2 } from "../../components";

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
      <Navbar2 orangeBg="true" />
      <TextSection {...TextSectionData} />
    </>
  );
};

export default ChocolatePage;
