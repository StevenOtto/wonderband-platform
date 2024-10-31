import styled from "styled-components";
import bpMax from "../../styles/functions/bpMax";
import cssVars from "../../styles/cssVars";

const StyledDesktop = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: space-between;

  ${bpMax.md`
    flex-direction: column;
  `}

  .logo {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 50vw;
    height: auto;

    ${bpMax.md`
      width: 60%;
    `}
  }

  &::before {
    content: "";
    position: absolute;
    z-index: 0;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-image: url("/images/logo_bg.png");
    background-repeat: space;
    background-size: 300px auto;
    opacity: 0.05;
    pointer-events: none;

    ${bpMax.md`
      background-size: 150px auto;
    `}
  }

  ul {
    z-index: 1;
    li {
      list-style: none;
      button {
        cursor: pointer;
      }
    }
  }

  ul.menu {
    padding: 20px 0 0 10px;
    list-style: none;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    align-items: flex-start;
    justify-content: center;
    gap: 15px;
    width: fit-content;

    li {
      list-style: none;
      display: flex;
      justify-content: center;

      button {
        display: flex;
        align-items: center;
        flex-direction: column;
        padding: 10px;

        &:active {
          transform: scale(0.98);
        }

        &.active {
          /* outline: 2px dotted ${cssVars.colors.darkGreen}; */
        }

        img {
          width: 48px;
          margin-bottom: 10px;
          height: auto;
        }

        span {
          text-align: center;
          font-size: 14px;
          line-height: 1;
        }
      }
    }
  }

  ul.photos {
    padding: 30px 40px 30px 30px;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    align-items: flex-start;
    justify-content: center;
    gap: 25px;
    width: fit-content;

    ${bpMax.md`
      grid-template-columns: repeat(4, 1fr);
    `}

    li {
      display: flex;
      flex-direction: column;
      gap: 10px;

      button {
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 10px;

        &:active {
          transform: scale(0.98);
        }

        img {
          width: 48px;
          height: auto;
        }

        span {
          display: block;
          word-break: break-all;
          max-width: 70px;
          text-overflow: ellipsis;
          font-size: 14px;
          line-height: 1;
          text-align: center;
        }
      }
    }
  }
`;

export default StyledDesktop;
