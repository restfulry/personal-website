import React from "react";
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
  ref3,
  animate,
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
    <div>
      <TextSec purpleBg={purpleBg} blueBg={blueBg} orangeBg={orangeBg} whiteBg={whiteBg}>
        <Container>
        <TextRow>
          <TextWrapper ref={ref3}>
            <Heading greenText={greenText} blackText={blackText} animate={animate}>{paragraphHeadline}</Heading>
          </TextWrapper>
        </TextRow>
        <TextRow>
          <TextWrapper>    
            <Subheading blackText={blackText} animate={animate}>{subheading}</Subheading>
            <Paragraph blackText={blackText} animate={animate}>{paragraph}</Paragraph>
          </TextWrapper>
        </TextRow>
        </Container>
      </TextSec>
    </div>
  );
};

export default TextSection;
