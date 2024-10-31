import styled from "styled-components";
import cssVars from "../../../styles/cssVars";
import { DraggabbleWindowOuter } from "../../common/DraggableWindow/DraggableWindow.styles";
import bpMax from "../../../styles/functions/bpMax";

const StyledMembersWindow = styled(DraggabbleWindowOuter)`
  .inner {
    padding: 40px;

    ${bpMax.md`
      padding: 30px 0;
    `}
  }

  ul {
    list-style: none;
    margin-bottom: 20px;
    width: 100%;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    align-items: start;
    gap: 40px;

    ${bpMax.md`
      grid-template-columns: repeat(2, 1fr);
      gap: 20px;
      
    `}

    li {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;

      .image-wrap {
        border-width: 2px;
        border-style: solid;

        img {
          width: 120px;
          height: 150px;
          object-fit: cover;

          ${bpMax.md`
            width: 100px;
            height: 125px;
          `}
        }
      }

      &:nth-child(3n + 1) .image-wrap {
        border-color: ${cssVars.colors.purple};
        box-shadow: 3px 3px 0px 0px ${cssVars.colors.purple};
      }

      &:nth-child(3n + 2) .image-wrap {
        border-color: ${cssVars.colors.darkGreen};
        box-shadow: 3px 3px 0px 0px ${cssVars.colors.darkGreen};
      }

      &:nth-child(3n + 3) .image-wrap {
        border-color: ${cssVars.colors.green};
        box-shadow: 3px 3px 0px 0px ${cssVars.colors.green};
      }

      .name {
        font-size: 1.2rem;
        font-weight: 600;
        margin-top: 15px;
      }

      .role {
        font-size: 0.9rem;
        font-weight: 400;
        text-align: center;
        margin-top: 5px;
      }
    }
  }
`;

export default StyledMembersWindow;
