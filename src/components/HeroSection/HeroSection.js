import React from "react";
import { Link } from "react-router-dom";
import { Container, Button } from "../../globalStyles";
import { HeroSec, HeroRow, TextWrapper, Heading } from "./HeroSection.Elements";

const HeroSection = ({
  primary,
  purpleBg,
  orangeBg,
  lightText,
  headline,
  linkTo,
}) => {
  return (
    <>
      <HeroSec purpleBg={purpleBg} orangeBg={orangeBg}>
        <Container>
          <HeroRow>
            <Link to={`/${linkTo}`}>
              <Heading lightText={lightText}>{headline}</Heading>
            </Link>
          </HeroRow>
        </Container>
      </HeroSec>
    </>
  );
};

export default HeroSection;
