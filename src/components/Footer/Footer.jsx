import React from "react";
import {Button} from '../../globalStyles';
import { FooterContainer, FooterSubscription, FooterSubHeading, FooterSubText, Form, FormInput, FooterLinksContainer, FooterLinksWrapper, FooterLinksItems, FooterLinkTitle, FooterLink, SocialMedia, SocialMediaWrap,  SocialLogo, SocialIcon, WebsiteRights, SocialIcons, SocialIconLink} from './Footer.elements';
import { FaFacebook, FaInstagram, FaGithub } from 'react-icons/fa'
import "./Footer.css";

const Footer = () => {
  return (
    <div >
      <FooterContainer>
        <FooterSubscription>
          <FooterSubHeading>
            Contact now
          </FooterSubHeading>
          <FooterSubText>
            Unsubscribe
          </FooterSubText>
            <Form>
              <FormInput name="email" type="email" placeholder="Your Email"/>
                <Button fontBig>Subscribe</Button>
            </Form>
        </FooterSubscription>
        <FooterLinksContainer>
          <FooterLinksWrapper>
            <FooterLinksItems>
              <FooterLinkTitle>About Us</FooterLinkTitle>
              <FooterLink to='/signup'>How it works</FooterLink>
              <FooterLink to='/'>Testimonials</FooterLink>
              <FooterLink to='/'>Careers</FooterLink>
              <FooterLink to='/'>How Investiors</FooterLink>
            </FooterLinksItems>
            <FooterLinksItems>
              <FooterLinkTitle>Contact Us</FooterLinkTitle>
              <FooterLink to='/signup'>How it works</FooterLink>
              <FooterLink to='/'>Testimonials</FooterLink>
              <FooterLink to='/'>Careers</FooterLink>
              <FooterLink to='/'>How Investiors</FooterLink>
            </FooterLinksItems>
          </FooterLinksWrapper>

          <FooterLinksWrapper>
            <FooterLinksItems>
              <FooterLinkTitle>Social</FooterLinkTitle>
              <FooterLink to='/signup'>How it works</FooterLink>
              <FooterLink to='/'>Testimonials</FooterLink>
              <FooterLink to='/'>Careers</FooterLink>
              <FooterLink to='/'>How Investiors</FooterLink>
            </FooterLinksItems>
          </FooterLinksWrapper>
        </FooterLinksContainer>
        <SocialMedia>
          <SocialMediaWrap>
            <SocialLogo to="/">
              <SocialIcon/>
              Instagram
            </SocialLogo>
            <WebsiteRights>Ryan Lee 2021</WebsiteRights>
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



      {/* <div>Ryan Lee</div>
      <div className="socials">
        <a className="social-link">LinkedIn</a>
        <a className="social-link">Github</a>
        <a className="social-link">Instagram</a>
      </div> */}

    </div>
  )
};

export default Footer;