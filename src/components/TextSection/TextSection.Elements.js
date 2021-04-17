import styled from "styled-components";

export const InfoSec = styled.div`
  color: #fff;
  background: rgb(72, 29, 168);
  background: ${({ purpleBg, whiteBg, orangeBg, blueBg }) =>
    purpleBg
      ? "linear-gradient(rgba(98, 44, 173, 1) 0%,rgba(87, 25, 172, 1) 45%,rgba(77, 15, 152, 1) 60%,rgba(85, 26, 171, 1) 65%,rgba(98, 44, 173, 1) 100%)"
      : whiteBg
      ? "linear-gradient(rgba(255,250,250,1) 0%, rgba(255,251,250,1) 45%, rgba(255,251,250,1) 50%, #f5efed 65%, rgba(255,250,250,1) 100%)"
      : orangeBg
      ? "#FFF"
      : blueBg
      ? "linear-gradient(180deg, rgba(17,71,176,1) 0%, rgba(13,32,162,1) 45%, rgba(13,27,161,1) 50%, rgba(17,71,176,1) 65%, rgba(13,32,162,1) 100%)"
      : "#FFF"};
`;

export const InfoRow = styled.div`
  height: calc(100vh - 160px);
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
`;

export const TextWrapper = styled.div`
  max-width: 1080px;
  padding-top: 0;

  @media screen and (max-width: 768px) {
    padding-bottom: 65px;
  }
`;

export const Heading = styled.h1`
  text-align: center;
  padding-top: 35px;
  margin-bottom: 0px;
  font-size: 30vh;
  transition: all 2s ease-out;
  color: ${({ greenText }) => (greenText ? "#85FF9E" : "#ededf5")};
`;

export const HeadingStatic = styled.h1`
  margin-bottom: -500px;
  font-size: 30vh;
  color: ${({ greenText, blackText }) =>
    greenText ? "#85FF9E" : blackText ? "#080808" : "#FFF"};
`;

export const Subtitle = styled.p`
  max-width: 540px;
  margin-bottom: 20px;
  font-size: 18vh;
  font-weight: bold;
  color: ${({ lightTextDesc }) => (lightTextDesc ? "#a9b3c1" : "#080808")};
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
