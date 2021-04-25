import React from "react";
import { MainTitleSection, PortfolioSection, TextSection } from "../../components";
import {
  CodeTextHeader,
  PortfolioSectionData,
  TextSectionData,
} from "./Data";
import { Navbar2 } from "../../components";

import "./CodePage.css";
import { TextSec } from "../../components/TextSection/TextSection.Elements";

const CodePage = ({
  xStretch,
  yStretch,
  xAxisRotate,
  yAxisRotate,
  xTranslate,
  yTranslate,
}) => {
  return (
    <>
      <Navbar2 blueBg="true" />
      <MainTitleSection
        {...CodeTextHeader}
        xStretch={xStretch}
        yStretch={yStretch}
        xAxisRotate={xAxisRotate}
        yAxisRotate={yAxisRotate}
        xTranslate={xTranslate}
        yTranslate={yTranslate}
      />
      <TextSection {...TextSectionData} />
      <PortfolioSection {...PortfolioSectionData} />
    </>
  );
};

export default CodePage;
