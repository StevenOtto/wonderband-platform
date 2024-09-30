import styled from "styled-components";
import cssVars from "../../styles/cssVars";

const StyledDesktop = styled.div`
  height: 100dvh;
  width: 100dvw;

  ul {
    padding: 20px 0 0 20px;
    li {
      list-style: none;
      button {
        cursor: pointer;
      }
    }
  }

  ul.menu {
    list-style: none;

    li {
      margin-bottom: 20px;
      list-style: none;

      button {
        cursor: pointer;
      }
    }
  }

  ul.photos {
    right: 0;
    top: 0;
    padding-right: 20px;
    position: absolute;
  }
`;

export default StyledDesktop;
