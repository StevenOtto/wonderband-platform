import styled from "styled-components";
import cssVars from "../../../styles/cssVars";

const StyledShowsWindow = styled.div`
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
