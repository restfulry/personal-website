import React from "react";
import { Container } from "../../globalStyles";
import {
  InfoSec,
  InfoRow,
  TextWrapper,
  Heading,
  HeadingStatic,
  Subtitle,
  DescriptionText,
} from "./MainTitleSection.Elements";

const MainTitleSection = ({
  purpleBg,
  blueBg,
  orangeBg,
  greenText,
  blackText,
  yellowText,
  lightTextDesc,
  subtitle,
  headline,
  headlineBg,
  description,
  xStretch,
  yStretch,
  xAxisRotate,
  yAxisRotate,
  xTranslate,
  yTranslate,
}) => {
  return (
    <>
      <InfoSec purpleBg={purpleBg} blueBg={blueBg} orangeBg={orangeBg}>
        <Container>
          <InfoRow>
            <TextWrapper>
              <HeadingStatic
                greenText={greenText}
                blackText={blackText}
                yellowText={yellowText}
              >
                {headlineBg}
              </HeadingStatic>
              <Heading
                xStretch={xStretch}
                yStretch={yStretch}
                xAxisRotate={xAxisRotate}
                yAxisRotate={yAxisRotate}
                xTranslate={xTranslate}
                yTranslate={yTranslate}
                style={{
                  transform: `rotate3d(
                  ${xAxisRotate},
                   ${yAxisRotate},
                  0,
                  0.5rad
                ) translate(${xTranslate}px, ${yTranslate}px) skew(${xStretch}deg, ${yStretch}deg)`,
                }}
              >
                {headline}
              </Heading>
              <Subtitle lightTextDesc={lightTextDesc}>{subtitle}</Subtitle>
              <DescriptionText>{description}</DescriptionText>
            </TextWrapper>
          </InfoRow>
        </Container>
      </InfoSec>
    </>
  );
};

export default MainTitleSection;
