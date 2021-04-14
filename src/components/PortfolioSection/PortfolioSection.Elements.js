import styled from "styled-components";

export const InfoSec = styled.div`
  color: #fff;
  padding: 10px 0;
  background: ${({ purpleBg }) => (purpleBg ? "#622cad" : "#101522")};
`;

export const InfoRow = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
`;

export const TextWrapper = styled.div`
  padding-top: 0;
  padding-bottom: 60px;

  @media screen and (max-width: 768px) {
    padding-bottom: 65px;
  }
`;

export const Heading = styled.h2`
  margin-top: 20px;
  margin-bottom: 3px;
  font-size: 1vh;
  text-transform: uppercase;
  color: ${({ greenText }) => (greenText ? "#85FF9E" : "#ededf5")};
`;

export const PortfolioItem = styled.h1`
  text-decoration: none;
  margin-bottom: 3px;
  font-size: 12vmin;
  color: ${({ greenText }) => (greenText ? "#85FF9E" : "#ededf5")};
`;

export const SkillsContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 50px;

  @media screen and (max-width: 820px) {
    padding-top: 32px;
  }
`;

export const SkillsWrapper = styled.div`
  display: flex;

  @media screen and (max-width: 820px) {
    flex-direction: column;
  }
`;

export const SkillsItems = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 16px;
  text-align: center;
  width: 160px;
  box-sizing: border-box;
  color: #fff;

  @media screen and (max-width: 420px) {
    margin: 0;
    padding: 10px;
    width: 100%;
  }
`;

export const SkillItem = styled.h2`
  margin-bottom: 16px;
`;
