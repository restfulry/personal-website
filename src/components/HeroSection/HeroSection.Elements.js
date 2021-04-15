import styled from "styled-components";

export const HeroSec = styled.div`
  color: #fff;
  padding: 18vw 0;
  background: ${({ purpleBg, orangeBg, darkBg }) =>
    purpleBg
      ? "#622cad"
      : orangeBg
      ? "#dd6546"
      : darkBg
      ? "#151513"
      : "#ededf5"};
`;

export const HeroRow = styled.div`
  display: flex;
  justify-content: center;
  margin: 0 -15px -15px -15px;
  flex-wrap: wrap;
  align-items: center;
`;

export const TextWrapper = styled.div`
  max-width: 540px;
  padding-top: 0;
  padding-bottom: 60px;

  @media screen and (max-width: 768px) {
    padding-bottom: 65px;
  }
`;

export const Heading = styled.h1`
  margin-bottom: 24px;
  font-size: 15vw;
  line-height: 1.1;
  color: ${({ yellowText, blackText, greenText }) =>
    yellowText
      ? "#f4e044"
      : blackText
      ? "#00000"
      : greenText
      ? "#85FF9E"
      : "#ededf5"};
  transition: all 0.5s ease;

  &:hover {
    transform: scale(1.03);
  }
`;
