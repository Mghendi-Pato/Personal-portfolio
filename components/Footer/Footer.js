import React from "react";
import { AiFillGithub, AiFillInstagram, AiFillLinkedin } from "react-icons/ai";

import { SocialIcons } from "../Header/HeaderStyles";
import {
  CompanyContainer,
  FooterWrapper,
  LinkColumn,
  LinkItem,
  LinkList,
  LinkTitle,
  Slogan,
  SocialContainer,
  SocialIconsContainer,
} from "./FooterStyles";

const Footer = () => {
  return (
    <FooterWrapper>
      <LinkList>
        <LinkColumn>
          <LinkTitle>Call</LinkTitle>
          <LinkItem href="tel:+254 706 465 398">+254 706 465 398</LinkItem>
        </LinkColumn>
        <LinkColumn>
          <LinkTitle>Email</LinkTitle>
          <LinkItem href="mailto: mwamburipatrick8@gmail.com">
            mwamburipatrick8@gmail.com
          </LinkItem>
        </LinkColumn>
      </LinkList>
      <SocialContainer>
        <CompanyContainer>
          <Slogan>Always making progress</Slogan>
        </CompanyContainer>
        <SocialContainer></SocialContainer>
        <SocialIcons href="https://github.com/Mghendi-Pato" target="_blank">
          <AiFillGithub size="2.5rem" />
        </SocialIcons>
        <SocialIcons
          href="https://www.linkedin.com/in/mwamburi-patrick-7561b8246/"
          target="_blank"
        >
          <AiFillLinkedin size="2.5rem" />
        </SocialIcons>
        <SocialIcons
          href="https://www.instagram.com/mghendipato/"
          target="_blank"
        >
          <AiFillInstagram size="2.5rem" />
        </SocialIcons>
      </SocialContainer>
    </FooterWrapper>
  );
};

export default Footer;
