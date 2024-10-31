import styled from "styled-components";
import cssVars from "../../../styles/cssVars";
import bpMax from "../../../styles/functions/bpMax";

export const DraggabbleWindowOuter = styled.div`
  position: absolute;
  z-index: 1;
  transform: translate(-50%, -50%);
  left: 50%;
  top: 50%;
`;

// type
type StyledDraggableWindowType = {
  $size?: "small" | "medium" | "large";
  $isOpen?: boolean;
};

const StyledDraggableWindow = styled.div<StyledDraggableWindowType>`
  box-shadow: 7px 7px 0px 0px rgba(0, 0, 0, 0.25);
  width: ${({ $size }) =>
    $size === "small" ? "300px" : $size === "large" ? "900px" : "600px"};
  border-radius: 8px;

  ${({ $isOpen }) =>
    $isOpen
      ? `
    pointer-events: auto;
    opacity: 1;
    `
      : `
    pointer-events: none;
    opacity: 0;
    `}

  ${bpMax.md`
    max-width: 90vw;
  `}

  header {
    border-top-left-radius: 6px;
    border-top-right-radius: 6px;
    border: 2px solid ${cssVars.colors.black};
    overflow: hidden;
    background-color: ${cssVars.colors.beigeDark};
    color: ${cssVars.colors.black};
    padding: 6px 8px;
    border-bottom: 2px solid ${cssVars.colors.black};
    display: flex;
    align-items: center;
    cursor: move;

    h2 {
      text-transform: uppercase;
      font-weight: 600;
      font-size: 16px;
    }

    .bars {
      flex-grow: 1;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      padding: 8px;

      span {
        display: block;
        content: "";
        height: 1px;
        margin: 2px 0;
        width: 100%;
        background-color: ${cssVars.colors.black};
      }
    }

    .close {
      width: 24px;
      height: 24px;
      cursor: pointer;
      border-radius: 4px;
      border: 2px solid ${cssVars.colors.black};
      align-items: center;
      display: flex;
      justify-content: center;

      span {
        line-height: 1;
        font-weight: 600;
        margin-bottom: 3px;
      }
    }
  }

  .content {
    background-color: ${cssVars.colors.beige};
    max-height: 600px;
    overflow: auto;
    border-bottom-left-radius: 6px;
    border-bottom-right-radius: 6px;
    border: 2px solid ${cssVars.colors.black};
    border-top: 0;
  }
`;

export default StyledDraggableWindow;
