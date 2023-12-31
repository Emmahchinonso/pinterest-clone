import React from "react";
import Logo from "../Logo/Logo";
import styled from "styled-components";
import { NavLink } from "react-router-dom";
import { navLinks } from "modules/common/api/constants";
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
      <ButtonContainer>
        <Button>Login</Button>
        <Button>Sign Up</Button>
      </ButtonContainer>
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
  gap: 36px;
`;

const Link = styled(NavLink)`
  color: hsl(0deg 0% 0%);
  text-decoration: none;
`;

const ButtonContainer = styled.div`
  display: flex;
  gap: 10px;
`;

export default Nav;
