import styled from "styled-components";

export const InfoSec = styled.div`
  color: #fff;
  padding: 10px 0;
  background: ${({ purpleBg, blueBg }) =>
    purpleBg ? "#622cad" : blueBg ? "#0d20a2" : "#101522"};
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

export const PortfolioWrapper = styled.div`
opacity: ${({animate}) => (animate ? "1" : "0")};
transform: translateY(${({ animate }) => (animate ? "0" : "10vw")});
transition: opacity 1.6s, transform 1.4s ease-out;
`

export const Heading = styled.h2`
  margin-top: 20px;
  margin-bottom: 3px;
  font-size: 1.2vh;
  letter-spacing: .1rem;
  text-transform: uppercase;
  border-bottom: 2px solid #f5efed;
  color: ${({ greenText }) => (greenText ? "#85FF9E" : "#ededf5")};

  opacity: ${({animate}) => (animate ? "1.0" : "0")};
  transition: opacity 3s ease-out;
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
