import React from "react";
import { Link } from "react-router-dom";
import { Container } from "../../globalStyles";
import {
  InfoSec,
  InfoRow,
  TextWrapper,
  Heading,
  PortfolioItem,
  SkillsContainer,
  SkillsWrapper,
  SkillsItems,
  SkillItem,
} from "./PortfolioSection.Elements";

const PortfolioSection = ({
  purpleBg,
  greenText,
  headline,
  headlineSkills,
  portfolioItem,
  portfolioItem2,
  portfolioItem3,
}) => {
  return (
    <>
      <InfoSec purpleBg={purpleBg}>
        <Container>
          <InfoRow>
            <TextWrapper>
              <Heading greenText={greenText}>{headline}</Heading>
            </TextWrapper>
          </InfoRow>
          <InfoRow>
            <TextWrapper>
              <Link to="/info">
                <PortfolioItem>{portfolioItem}</PortfolioItem>
              </Link>
            </TextWrapper>
          </InfoRow>
          <InfoRow>
            <TextWrapper>
              <Link to="/info">
                <PortfolioItem>{portfolioItem2}</PortfolioItem>
              </Link>
            </TextWrapper>
          </InfoRow>
          <InfoRow>
            <TextWrapper>
              <Link to="/info">
                <PortfolioItem>{portfolioItem3}</PortfolioItem>
              </Link>
            </TextWrapper>
          </InfoRow>
        </Container>
        <Container>
          <InfoRow>
            <TextWrapper>
              <Heading greenText={greenText}>{headlineSkills}</Heading>
            </TextWrapper>
          </InfoRow>
          <SkillsContainer>
            <SkillsWrapper>
              <SkillsItems>
                <SkillItem>React</SkillItem>
                <SkillItem>Express</SkillItem>
                <SkillItem>Node.js</SkillItem>
              </SkillsItems>
            </SkillsWrapper>
            <SkillsWrapper>
              <SkillsItems>
                <SkillItem>MongoDB</SkillItem>
                <SkillItem>SQL</SkillItem>
                <SkillItem>Django</SkillItem>
              </SkillsItems>
            </SkillsWrapper>
            <SkillsWrapper>
              <SkillsItems>
                <SkillItem>JavaScript</SkillItem>
                <SkillItem>HTML</SkillItem>
                <SkillItem>CSS</SkillItem>
              </SkillsItems>
            </SkillsWrapper>
          </SkillsContainer>
        </Container>
      </InfoSec>
    </>
  );
};

export default PortfolioSection;
