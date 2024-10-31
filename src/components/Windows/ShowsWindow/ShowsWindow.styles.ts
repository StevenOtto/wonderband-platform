import styled from "styled-components";
import cssVars from "../../../styles/cssVars";
import { DraggabbleWindowOuter } from "../../common/DraggableWindow/DraggableWindow.styles";

const StyledShowsWindow = styled(DraggabbleWindowOuter)`
  .inner {
    padding: 20px;
  }

  h3 {
    text-transform: uppercase;
  }

  ul {
    list-style: none;
    margin-bottom: 20px;
    width: 100%;
    padding-left: 0;

    li {
      width: 100%;
      display: flex;
      text-transform: uppercase;

      span {
        flex-grow: 1; // fills out rest of space
        opacity: 0.3;
        border-bottom: dotted 3px ${cssVars.colors.black};
        position: relative;
        display: block;
        height: 20px;
        margin: 0 15px;
      }
    }
  }
`;

export default StyledShowsWindow;
