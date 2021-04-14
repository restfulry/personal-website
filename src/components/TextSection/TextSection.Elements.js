import styled from "styled-components";

export const InfoSec = styled.div`
  color: #fff;
  padding-top: 5vh;
  padding-bottom: 5vh;
  background: ${({ purpleBg }) => (purpleBg ? "#622cad" : "#101522")};
`;

export const InfoRow = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
`;

export const TextWrapper = styled.div`
  max-width: 540px;
  padding-top: 0;

  @media screen and (max-width: 768px) {
    padding-bottom: 65px;
  }
`;

export const Heading = styled.h1`
  margin-bottom: 3px;
  font-size: 8vh;
  color: ${({ greenText }) => (greenText ? "#85FF9E" : "#ededf5")};
`;

export const Subtitle = styled.p`
  max-width: 540px;
  margin-bottom: 20px;
  font-size: 4.5vh;
  font-weight: bold;
  color: ${({ lightTextDesc }) => (lightTextDesc ? "#a9b3c1" : "#ededf5")};
`;

export const DescriptionText = styled.p`
  max-width: 540px;
  margin-bottom: 35px;
  padding-right: 50px;
  font-size: 18px;
  font-weight: bold;
  line-height: 24px;
  align-self: center;
  color: #ededf5;
`;
