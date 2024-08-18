import React from "react";
import StyledButton from "./Button.styles";

export type ButtonThemes = "primary" | "secondary" | "tertiary";

export type ButtonProps = {
  theme: ButtonThemes;
  text: string;
  onClick?: () => void;
  type?: "button" | "submit" | "reset";
  disabled?: boolean;
  className?: string;
  id?: string;
  name?: string;
  value?: string;
  autoFocus?: boolean;
};

const Button: React.FC<ButtonProps> = ({ theme, text, ...rest }) => {
  return (
    <StyledButton $theme={theme} {...rest}>
      <span>{text}</span>
    </StyledButton>
  );
};

export default Button;
