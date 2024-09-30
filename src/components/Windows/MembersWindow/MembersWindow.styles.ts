import styled from "styled-components";
import cssVars from "../../../styles/cssVars";

const StyledMembersWindow = styled.div`
  position: absolute;
  .inner {
    padding: 40px;
  }

  ul {
    list-style: none;
    margin-bottom: 20px;
    width: 100%;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    align-items: start;
    gap: 40px;

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
