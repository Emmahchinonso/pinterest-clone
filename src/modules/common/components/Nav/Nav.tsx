import React from "react";
import Logo from "../Logo/Logo";
import styled from "styled-components";
import { NavLink } from "react-router-dom";
import { navLinks } from "modules/lib/links";
import { Container } from "../Container/Container";

const Nav = () => (
  <Wrapper>
    <Logo />

    <ul>
      {navLinks.map((link) => (
        <NavLink key={link.title} to={link.href}>
          {link.title}
        </NavLink>
      ))}
    </ul>
  </Wrapper>
);

const Wrapper = styled(Container)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-block: 16px;
`;

export default Nav;
