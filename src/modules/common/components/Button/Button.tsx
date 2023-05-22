import React, { ReactElement, ReactNode } from "react";
import styled from "styled-components";

interface ButtonProps {
  children: ReactNode;
  variant?: string;
  onClick?: () => void;
  to?: string;
  size?: string;
}

const Button = ({ children, variant }: ButtonProps) => {
  return <Wrapper>{children}</Wrapper>;
};

const Wrapper = styled.button``;

export default Button;
