import React from "react";
import Logo from "../Logo/Logo";
import styled from "styled-components";
import { NavLink } from "react-router-dom";

const Nav = () => (
  <div>
    <NavLink to="/">
      <Logo />
    </NavLink>
  </div>
);

const Wrapper = styled.nav``;

export default Nav;
