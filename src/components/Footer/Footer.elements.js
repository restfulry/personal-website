import styled from "styled-components";

export const FooterContainer = styled.div`
  background-color: #f5efed;
  padding: 0.2rem 0 0.2rem 0;
  display: flex;
  justify-content: center;
  align-items: space-around;
`;

export const FooterSubText = styled.p`
  font-size: 15px;
`;

export const FooterLinksContainer = styled.div`
  align-self: center;
  width: 100%;
  max-width: 1000px;
  display: flex;
  padding-left: 3vw;
  justify-content: flex-start;

  @media screen and (max-width: 820px) {
    padding-top: 32px;
  }
`;

export const FooterLinksItems = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin: 16px;
  text-align: left;
  width: 175px;
  box-sizing: border-box;
  color: #fff;

  @media screen and (max-width: 420px) {
    margin: 0;
    padding: 10px;
    width: 100%;
  }
`;

export const FooterLinkTitle = styled.h2`
  font-size: 1rem;
`;

export const SocialMedia = styled.section`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  width: 100%;
  max-width: 1000px;

  @media screen and (max-width: 820px) {
    flex-direction: column;
  }
`;

export const SocialIcons = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: flex-end;
  padding-right: 3vw;
  width: 250px;
`;

export const SocialIconLink = styled.a`
  padding-top: 10px;
  color: #080808;
  font-size: 24px;
`;
