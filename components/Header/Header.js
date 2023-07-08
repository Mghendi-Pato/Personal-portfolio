import Link from "next/link";
import React from "react";
import { AiFillGithub, AiFillInstagram, AiFillLinkedin } from "react-icons/ai";
import { DiCssdeck } from "react-icons/di";

import {
  Container,
  Div1,
  Div2,
  Div3,
  NavLink,
  SocialIcons,
  Span,
  Portfolio,
} from "./HeaderStyles";

const Header = () => (
  <div>
    <Container>
      <Div1>
        <Link href="/">
          <Portfolio>
            <DiCssdeck size="3rem" /> <Span>Mghendi Pato</Span>
          </Portfolio>
        </Link>
      </Div1>
      <Div2>
        <li>
          <NavLink href="#projects">Projects</NavLink>
        </li>
        <li>
          <NavLink href="#tech">Technologies</NavLink>
        </li>
        <li>
          <NavLink href="#about">About</NavLink>
        </li>
      </Div2>
      <Div3>
        <SocialIcons href="https://github.com/Mghendi-Pato" target="_blank">
          <AiFillGithub size="3rem" />
        </SocialIcons>
        <SocialIcons
          href="https://www.linkedin.com/in/mwamburi-patrick-7561b8246/"
          target="_blank"
        >
          <AiFillLinkedin size="3rem" />
        </SocialIcons>
        <SocialIcons
          href="https://www.instagram.com/mghendipato/"
          target="_blank"
        >
          <AiFillInstagram size="3rem" />
        </SocialIcons>
      </Div3>
    </Container>
  </div>
);

export default Header;
