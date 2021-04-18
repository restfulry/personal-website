import styled from "styled-components";

export const HeroSec = styled.div`
  color: #fff;
  padding: 18vw 0;
  background: ${({ purpleBg, orangeBg, darkBg }) =>
    purpleBg
      ? "linear-gradient(rgba(98, 44, 173, 1) 0%,rgba(87, 25, 172, 1) 45%,rgba(77, 15, 152, 1) 60%,rgba(85, 26, 171, 1) 65%,rgba(98, 44, 173, 1) 100%)"
      : orangeBg
      ? "#dd6546"
      : darkBg
      ? "linear-gradient(0deg, rgba(20,20,20,1) 0%, rgba(15,15,15,1) 45%, rgba(8,8,8,1) 60%, rgba(20,20,20,1) 65%, rgba(15,15,15,1) 100%)"
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
      ? "#080808"
      : greenText
      ? "#85FF9E"
      : "#ededf5"};
  transition: all 0.5s ease;

  &:hover {
    transform: scale(1.03);
  }
`;
