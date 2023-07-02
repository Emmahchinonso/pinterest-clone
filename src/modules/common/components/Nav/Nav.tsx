import React from "react";
import Logo from "../Logo/Logo";
import styled from "styled-components";
import { NavLink } from "react-router-dom";
import { navLinks } from "modules/common/api/links";
import { Container } from "../Container/Container";
import Button from "../Button/Button";

const Nav = () => (
  <Wrapper>
    <Logo />

    <LinksContainer>
      {navLinks.map((link) => (
        <Link key={link.title} to={link.href}>
          {link.title}
        </Link>
      ))}
      <Button>Login</Button>
      <Button>Sign Up</Button>
    </LinksContainer>
  </Wrapper>
);

const Wrapper = styled(Container)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-block: 16px;
`;

const LinksContainer = styled.ul`
  display: flex;
  gap: 16px;
`;

const Link = styled(NavLink)`
  color: hsl(0deg 0% 0%);
  text-decoration: none;
`;

export default Nav;
