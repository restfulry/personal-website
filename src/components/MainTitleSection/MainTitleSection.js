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
  ImgWrapper,
  Img,
} from "./MainTitleSection.Elements";

const MainTitleSection = ({
  ref2,
  animate,
  purpleBg,
  blueBg,
  orangeBg,
  whiteBg,
  greenText,
  blackText,
  yellowText,
  lightTextDesc,
  img,
  alt,
  subtitle,
  headline,
  headlineBg,
  description,
  xStretch,
  yStretch,
  xAxisRotate,
  yAxisRotate,
  rotateAngle,
  xTranslate,
  yTranslate,
}) => {
  return (
    <div>
      <InfoSec purpleBg={purpleBg} blueBg={blueBg} orangeBg={orangeBg} whiteBg={whiteBg}>
        <Container>
          <InfoRow>
            <TextWrapper ref={ref2} animate={animate}>
              <HeadingStatic
                greenText={greenText}
                blackText={blackText}
                yellowText={yellowText}
              >
                {headlineBg}
              </HeadingStatic>
              <ImgWrapper                   
                  xStretch={xStretch}
                  yStretch={yStretch}>
                <Img
                  src={img}
                  alt={alt}
                  xStretch={xStretch}
                  yStretch={yStretch}
                  xAxisRotate={xAxisRotate}
                  yAxisRotate={yAxisRotate}
                  xTranslate={xTranslate}
                  yTranslate={yTranslate}
                  style={{
                    transform: `
                      rotateY(${yAxisRotate}deg) 
                      translate(${xTranslate}px, ${yTranslate}px) 
                      `,
                  }}
                />
              </ImgWrapper>
              <Heading
                xStretch={xStretch}
                yStretch={yStretch}
                xAxisRotate={xAxisRotate}
                yAxisRotate={yAxisRotate}
                xTranslate={xTranslate}
                yTranslate={yTranslate}
                style={{
                  transform: `
                    rotateY(${yAxisRotate}deg) 
                    translate(${xTranslate}px, ${yTranslate}px) 
                    `,
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
    </div>
  );
};

export default MainTitleSection;
