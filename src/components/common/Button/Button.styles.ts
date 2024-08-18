import styled from "styled-components";
import { ButtonThemes } from "./Button";
import cssVars from "../../../styles/cssVars";

const StyledButton = styled.button<{ $theme: ButtonThemes }>`
  border-radius: 4px;
  padding: 8px 24px;
  font-size: 16px;
  text-transform: uppercase;
  border: 2px solid ${cssVars.colors.black};
  align-self: flex-start;
  transition: box-shadow 0.1s ease-in-out, background-color 0.2s ease-in-out;

  &:hover {
    cursor: pointer;
  }

  // on press
  &:active {
    box-shadow: none;
  }

  span {
    font-weight: 700;
    line-height: 24px;
  }

  ${({ $theme }) => {
    switch ($theme) {
      case "primary":
        return `
            box-shadow: inset 0px -3px 0px 0px #049A20, inset 0px 1px 0px 1px #9EF9AF;
            background-color: ${cssVars.colors.green};
            color: ${cssVars.colors.black};
            `;
      case "secondary":
        return `
            background-color: ${cssVars.colors.white};
            color: ${cssVars.colors.black};
            `;
      default:
        return "";
    }
  }}
`;

export default StyledButton;
