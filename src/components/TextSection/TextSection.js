import React from "react";
import { Link } from "react-router-dom";
import { Container } from "../../globalStyles";
import {
  TextSec,
  TextWrapper,
  Heading,
  Paragraph,
  Subheading,
  TextRow,
} from "./TextSection.Elements";

const TextSection = ({
  purpleBg,
  blueBg,
  orangeBg,
  whiteBg,
  greenText,
  blackText,
  paragraphHeadline,
  paragraph,
  subheading,
}) => {
  return (
    <>
      <TextSec purpleBg={purpleBg} blueBg={blueBg} orangeBg={orangeBg} whiteBg={whiteBg}>
        <Container>
        <TextRow>
          <TextWrapper>
            <Heading greenText={greenText} blackText={blackText}>{paragraphHeadline}</Heading>
          </TextWrapper>
        </TextRow>
        <TextRow>
          <TextWrapper>    
            <Subheading blackText={blackText}>{subheading}</Subheading>
            <Paragraph blackText={blackText}>{paragraph}</Paragraph>
          </TextWrapper>
        </TextRow>
        </Container>
      </TextSec>
    </>
  );
};

export default TextSection;
