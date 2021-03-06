import React from "react";
import { Link } from "react-router-dom";
import { Container } from "../../globalStyles";
import { HeroSec, HeroRow, Heading } from "./HeroSection.Elements";

const HeroSection = ({
  purpleBg,
  orangeBg,
  darkBg,
  greenText,
  yellowText,
  blackText,
  headline,
  linkTo,
}) => {
  return (
    <>
      <HeroSec purpleBg={purpleBg} orangeBg={orangeBg} darkBg={darkBg}>
        <Container>
          <HeroRow>
            <Link to={`/${linkTo}`}>
              <Heading
                yellowText={yellowText}
                blackText={blackText}
                greenText={greenText}
              >
                {headline}
              </Heading>
            </Link>
          </HeroRow>
        </Container>
      </HeroSec>
    </>
  );
};

export default HeroSection;
