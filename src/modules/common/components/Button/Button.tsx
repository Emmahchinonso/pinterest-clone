import React, { ReactNode } from "react";
import styled, { CSSProperties, StyledComponent } from "styled-components";

interface ButtonProps {
  children: ReactNode;
  variant?: string;
  color?: string;
  onClick?: () => void;
  to?: string;
  size?: string;
  disabled?: boolean;
}

export interface Style extends CSSProperties {
  "--color": string;
  "--bg-color": string;
  "--hover-color": string;
}

type Variant = Record<string, StyledComponent<"button", any, object, never>>;

const Button = ({
  children,
  variant = "default",
  color = "primary",
  ...restprops
}: ButtonProps) => {
  const { textColor, bg } = colorsMap[color];
  const Component = variantsMap[variant];

  return (
    <Component
      style={{ "--color": textColor, "--bg-color": bg } as Style}
      {...restprops}
    >
      {children}
    </Component>
  );
};

const BaseButton = styled.button`
  border: none;
  background-color: transparent;
  font-size: 1rem;
  border-radius: 8px;
  color: var(--color, #fff);
  background-color: var(--bg-color, #000);
  padding: 12px 16px;
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

const colorsMap: Record<string, { bg: string; textColor: string }> = {
  primary: { bg: "--red-400", textColor: "--white" },
  secondary: { bg: "--grey-100", textColor: "--grey-900" },
};

export default Button;
