import styled from "styled-components";

export const TextSec = styled.div`
  color: #fff;
  padding: 10px 0;
  background: ${({ purpleBg, blueBg, orangeBg, whiteBg }) =>
    purpleBg ? "#622cad" : blueBg ? "#0d20a2" : orangeBg ? "#dd6546" : whiteBg ? "#FFFAFA" : "#101522"};
`;

export const TextRow = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
`;

export const TextWrapper = styled.div`
  padding-top: 0;
  padding-bottom: 60px;
  max-width: 75%;

  text-align: center;

  transform: translateX(${({ animate }) => (animate ? "0" : "-100vw")});
  transition: transform 1s;

  @media screen and (max-width: 768px) {
    padding-bottom: 65px;
  }
`;

export const Heading = styled.h2`
  margin-top: 20px;
  margin-bottom: 3px;
  font-size: 1.2vh;
  letter-spacing: .1rem;
  text-transform: uppercase;
  border-bottom: 2px solid #f5efed;
  color: ${({ greenText, blackText, yellowText }) =>
  greenText
    ? "#85FF9E"
    : blackText
    ? "#080808"
    : yellowText
    ? "#f4e044"
    : "#FFF"};
`;

export const Subheading = styled.p`
  margin-top: 20px;
  margin-bottom: 3px;
  font-size: 3vh;
  color: ${({ greenText, blackText, yellowText }) =>
  greenText
    ? "#85FF9E"
    : blackText
    ? "#080808"
    : yellowText
    ? "#f4e044"
    : "#FFF"};
`;

export const Paragraph = styled.p`
  margin-top: 20px;
  margin-bottom: 3px;
  font-size: 1.2vh;
  color: ${({ greenText, blackText, yellowText }) =>
  greenText
    ? "#85FF9E"
    : blackText
    ? "#080808"
    : yellowText
    ? "#f4e044"
    : "#FFF"};
`;
