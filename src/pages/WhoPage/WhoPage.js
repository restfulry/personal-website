import React from "react";
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
  return (
    <>
      <NavBar2 orangeBg="true" />
      <MainTitleSection
        {...ChocoTextHeader}
        xStretch={xStretch}
        yStretch={yStretch}
        xAxisRotate={xAxisRotate}
        yAxisRotate={yAxisRotate}
        xTranslate={xTranslate}
        yTranslate={yTranslate}
        rotateAngle={rotateAngle}
      />
      <TextSection {...TextSectionData} />
    </>
  );
};

export default ChocolatePage;
