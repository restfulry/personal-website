import React from "react";
import { FooterContainer, FooterSubText, FooterLinksContainer, FooterLinkTitle, SocialMedia, SocialIcons, SocialIconLink} from './Footer.elements';
import { FaTwitter, FaInstagram, FaGithub, FaLinkedin, FaVimeo } from 'react-icons/fa'
import "./Footer.css";

const Footer = () => {
  return (
    <div >
      <FooterContainer>
        <FooterLinksContainer>
            <FooterLinkTitle>
              Ryan Lee
              <FooterSubText>
              </FooterSubText>
            </FooterLinkTitle>
        </FooterLinksContainer>
        <SocialMedia>
            <SocialIcons>
              <SocialIconLink href='/' target="_blank" aria-label="LinkedIn">
                <FaLinkedin />
              </SocialIconLink>
              <SocialIconLink href='/' target="_blank" aria-label="Vimeo">
                <FaVimeo />
              </SocialIconLink>
              <SocialIconLink href='/' target="_blank" aria-label="Github">
                <FaGithub />
              </SocialIconLink>
              <SocialIconLink href='/' target="_blank" aria-label="Twitter">
                <FaTwitter />
              </SocialIconLink>
              <SocialIconLink href='/' target="_blank" aria-label="Instagram">
                <FaInstagram />
              </SocialIconLink>
            </SocialIcons>
        </SocialMedia>
      </FooterContainer>
    </div>
  )
};

export default Footer;