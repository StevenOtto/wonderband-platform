import styled from "styled-components";
import cssVars from "../../../styles/cssVars";
import { DraggabbleWindowOuter } from "../../../components/common/DraggableWindow/DraggableWindow.styles";
import bpMax from "../../../styles/functions/bpMax";

const StyledAboutWindow = styled(DraggabbleWindowOuter)`
  .inner {
    padding: 40px 30px 20px 50px;
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    gap: 60px;
    background-image: radial-gradient(
      circle at center,
      ${cssVars.colors.beigeDark},
      transparent,
      transparent,
      transparent,
      transparent
    );
    background-size: 12px 12px;
    background-repeat: repeat;

    ${bpMax.md`
      flex-direction: column;
      padding: 20px;
      gap: 10px;
    `}
  }

  .decoration {
    width: 100%;
    height: 100px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 60px 0;

    &:first-of-type {
      img {
        transform: translateX(-20px);
      }
    }

    img {
      width: 140px;
      height: 140px;
      transform: translateX(20px);
    }
  }

  .text-wrap {
    background-color: ${cssVars.colors.white};
    padding: 20px;
    border-width: 2px;
    border-style: solid;
    margin-bottom: 20px;

    &--green {
      border-color: ${cssVars.colors.green};
      box-shadow: 3px 3px 0px 0px ${cssVars.colors.green};
    }

    &--blue {
      border-color: ${cssVars.colors.blue};
      box-shadow: 3px 3px 0px 0px ${cssVars.colors.blue};
    }

    &--purple {
      border-color: ${cssVars.colors.purple};
      box-shadow: 3px 3px 0px 0px ${cssVars.colors.purple};
    }

    p {
      font-size: 1rem;
    }
  }
`;

export default StyledAboutWindow;
