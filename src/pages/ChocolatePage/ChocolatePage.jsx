import React from "react";
import {
  MainTitleSection,
  PortfolioSection,
  TextSection,
} from "../../components";
import { ChocoTextHeader, PortfolioSectionData, TextSectionData } from "./Data";
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
      <PortfolioSection {...PortfolioSectionData} />
    </>
  );
};

export default ChocolatePage;
