import React from "react";
import { Container } from "../../globalStyles";
import {
  InfoSec,
  InfoRow,
  InfoColumn,
  TextWrapper,
  Heading,
  Subtitle,
  DescriptionText,
} from "./TextSection.Elements";

const TextSection = ({
  purpleBg,
  greenText,
  lightTextDesc,
  subtitle,
  headline,
  description,
  mouseX,
}) => {
  return (
    <>
      <InfoSec purpleBg={purpleBg}>
        <Container>
          <InfoRow>
            <TextWrapper>
              <Heading greenText={greenText} mouseX={mouseX}>
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