import React from "react";
import { Link } from "react-router-dom";
import { Container } from "../../globalStyles";
import {
  TextSec,
  TextWrapper,
  Heading,
  Paragraph,
  PortfolioItem,
  SkillsContainer,
  SkillsWrapper,
  SkillsItems,
  SkillItem,
} from "./TextSection.Elements";

const TextSection = ({
  purpleBg,
  blueBg,
  greenText,
  paragraphHeadline,
  paragraph,
}) => {
  return (
    <>
      <TextSec purpleBg={purpleBg} blueBg={blueBg}>
        <Container>
          <TextWrapper>
            <Heading greenText={greenText}>{paragraphHeadline}</Heading>
            <Paragraph>{paragraph}</Paragraph>
          </TextWrapper>
        </Container>
      </TextSec>
    </>
  );
};

export default TextSection;
