import styled from "styled-components";

export const InfoSec = styled.div`
  color: #fff;
  background: rgb(72, 29, 168);
  background: ${({ purpleBg, whiteBg, orangeBg, blueBg }) =>
    purpleBg
      ? "linear-gradient(rgba(98, 44, 173, 1) 0%,rgba(87, 25, 172, 1) 45%,rgba(77, 15, 152, 1) 60%,rgba(85, 26, 171, 1) 65%,rgba(98, 44, 173, 1) 100%)"
      : whiteBg
      ? "linear-gradient(rgba(255,250,250,1) 0%, rgba(255,251,250,1) 45%, rgba(255,251,250,1) 50%, rgba(245,239,237, 1) 65%, rgba(255,250,250,1) 100%)"
      : orangeBg
      ? "#dd6546"
      : blueBg
      ? "linear-gradient(180deg, rgba(17,71,176,1) 0%, rgba(13,32,162,1) 45%, rgba(13,27,161,1) 50%, rgba(17,71,176,1) 65%, rgba(13,32,162,1) 100%)"
      : "#000"};
`;

export const InfoRow = styled.div`
  height: calc(100vh - 160px);
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const TextWrapper = styled.div`
  max-width: 100vw;
  padding-top: 0;
  perspective: 50px;
  perspective-origin: 50% 50%;

  opacity: ${({animate}) => (animate ? "1.0" : "0")};
  transition: opacity 2s;

  @media screen and (max-width: 768px) {
    padding-bottom: 65px;
  }
`;

export const ImgWrapper = styled.div`
  perspective: 100px;
  perspective-origin: ${({xStretch}) => xStretch ? xStretch : 50}% ${({yStretch}) => yStretch ? yStretch : 50}%;
  transition: all 2s ease-out;
`;

export const Img = styled.img`
  padding-right: 0;
  padding-left: 50vh;
  border: 0;
  max-width: 100%;
  vertical-align: middle;
  display: inline-block;
  max-height: 500px;
  transition: all 2s ease-out;
`;

export const Heading = styled.h1`
  text-align: center;
  padding-top: 35px;
  margin-bottom: 0px;
  font-size: 30vh;
  transition: all 2s ease-out;
  perspective: 100px;
  perspective-origin: ${({xStretch}) => xStretch ? xStretch : 50}% ${({yStretch}) => yStretch ? yStretch : 50}%;
  color: ${({ greenText, yellowText }) =>
    greenText ? "#85FF9E" : yellowText ? "#f4e044" : "#ededf5"};
`;

export const HeadingStatic = styled.h1`
  margin-bottom: -500px;
  font-size: 25vh;
  color: ${({ greenText, blackText, yellowText }) =>
    greenText
      ? "#85FF9E"
      : blackText
      ? "#080808"
      : yellowText
      ? "#f4e044"
      : "#FFF"};
`;

export const Subtitle = styled.p`
  max-width: 540px;
  margin-bottom: 20px;
  font-size: 5vh;
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
