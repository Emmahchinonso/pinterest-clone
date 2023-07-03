import React, { ReactNode } from "react";
import styled, { StyledComponentBase } from "styled-components";

interface ButtonProps {
  children: ReactNode;
  variant?: string;
  color?: string;
  onClick?: () => void;
  to?: string;
  size?: string;
  disabled?: boolean;
}

type Variant = Record<
  string,
  StyledComponentBase<"button", any, object, never>
>;

const Button = ({
  children,
  variant = "default",
  color,
  ...restprops
}: ButtonProps) => {
  const Component = variantsMap[variant];

  return <Component {...restprops}>{children}</Component>;
};

const BaseButton = styled.button`
  border: none;
  background-color: transparent;
  font-size: 1rem;
  border-radius: 8px;
  color: var(--color, #fff);
  background-color: var(--bg-color, #000);
`;

const OutlineButton = styled(BaseButton)`
  border: 1px solid var(--color);
  color: var(--color);
`;

const GhostButton = styled(BaseButton)`
  color: var(color);
`;

const variantsMap: Variant = {
  default: BaseButton,
  outline: OutlineButton,
  ghost: GhostButton,
};

export default Button;
