import styled from "styled-components";

export const HeroSec = styled.div`
  color: #fff;
  padding: 50px 0;
  background: ${({ purpleBg, orangeBg }) =>
    purpleBg ? "#622cad" : orangeBg ? "#dd6546" : "#ededf5"};
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
  color: ${({ lightText }) => (lightText ? "#f4e044" : "#1c2237")};
  transition: all 0.5s ease;

  &:hover {
    font-size: 15.3vw;
  }
`;
