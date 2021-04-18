import React from "react";
import {Button} from '../../globalStyles';
import { FooterContainer, FooterSubscription, FooterSubHeading, FooterSubText, Form, FormInput, FooterLinksContainer, FooterLinksWrapper, FooterLinksItems, FooterLinkTitle, FooterLink, SocialMedia, SocialMediaWrap,  SocialLogo, SocialIcon, WebsiteRights, SocialIcons, SocialIconLink} from './Footer.elements';
import { FaFacebook, FaInstagram, FaGithub } from 'react-icons/fa'
import "./Footer.css";

const Footer = () => {
  return (
    <div >
      <FooterContainer>
        <FooterLinksContainer>
          <FooterLinksWrapper>
            <FooterLinkTitle>
              Ryan Lee
              <FooterSubText>
              </FooterSubText>
            </FooterLinkTitle>
          </FooterLinksWrapper>
        </FooterLinksContainer>
        <SocialMedia>
          <SocialMediaWrap>
            <SocialIcons>
              <SocialIconLink href='/' target="_blank" aria-label="Facebook">
                <FaFacebook />
              </SocialIconLink>
              <SocialIconLink href='/' target="_blank" aria-label="Instagram">
                <FaInstagram />
              </SocialIconLink>
              <SocialIconLink href='/' target="_blank" aria-label="Github">
                <FaGithub />
              </SocialIconLink>
            </SocialIcons>
          </SocialMediaWrap>
        </SocialMedia>
      </FooterContainer>
    </div>
  )
};

export default Footer;