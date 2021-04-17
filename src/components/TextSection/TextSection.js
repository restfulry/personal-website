import React from "react";
import { Container } from "../../globalStyles";
import {
  InfoSec,
  InfoRow,
  InfoColumn,
  TextWrapper,
  Heading,
  HeadingStatic,
  Subtitle,
  DescriptionText,
} from "./TextSection.Elements";

const TextSection = ({
  purpleBg,
  blueBg,
  greenText,
  blackText,
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
      <InfoSec purpleBg={purpleBg} blueBg={blueBg}>
        <Container>
          <InfoRow>
            <TextWrapper>
              <HeadingStatic greenText={greenText} blackText={blackText}>
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

export default TextSection;
