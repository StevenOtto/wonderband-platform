// src/components/Loader/Loader.styles.ts
import styled from "styled-components";
import cssVars from "../../../styles/cssVars";

const StyledLoader = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: ${cssVars.colors.blue};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  z-index: 9997;

  .loader-content {
    position: relative;
    z-index: 2;
    width: 80%;
    max-width: 500px;
    text-align: center;
  }

  .logo-container {
    margin-bottom: 60px;

    img {
      width: 300px;
      height: auto;
    }
  }

  .progress-container {
    background-color: ${cssVars.colors.beige};
    border: 2px solid ${cssVars.colors.black};
    border-radius: 8px;
    padding: 20px;
    box-shadow: 5px 5px 0 rgba(0, 0, 0, 0.2);
  }

  .progress-bar {
    height: 20px;
    background-color: ${cssVars.colors.beigeDark};
    border: 2px solid ${cssVars.colors.black};
    border-radius: 4px;
    margin-bottom: 15px;
    overflow: hidden;
    position: relative;
  }

  .progress {
    height: 100%;
    background: linear-gradient(
      to right,
      ${cssVars.colors.darkGreen},
      ${cssVars.colors.green},
      ${cssVars.colors.white},
      ${cssVars.colors.purple}
    );
    transition: width 0.3s ease;
  }

  .progress-text {
    font-family: ${cssVars.fonts.default};
    text-align: left;
    margin-bottom: 5px;
    font-size: 14px;
    font-weight: 500;
    min-height: 20px;
  }

  .progress-percentage {
    text-align: right;
    font-family: ${cssVars.fonts.default};
    font-weight: bold;
  }

  .disk-led {
    display: flex;
    align-items: center;
    position: fixed;
    left: 10px;
    bottom: 10px;
    gap: 8px;
    font-size: 12px;
  }

  .led {
    width: 12px;
    height: 12px;
    background-color: #444;
    border: 1px solid #000;
    border-radius: 50%;

    &.active {
      background-color: #ff3333;
      box-shadow: 0 0 5px #ff3333;
    }
  }

  &::after {
    content: "";
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(
      rgba(18, 16, 16, 0) 50%,
      rgba(0, 0, 0, 0.1) 50%
    );
    background-size: 100% 4px;
    z-index: 1;
    pointer-events: none;
  }

  // Voeg deze animatie toe aan de StyledLoader
  @keyframes flicker {
    0% {
      opacity: 0.97;
    }
    5% {
      opacity: 0.9;
    }
    10% {
      opacity: 0.97;
    }
    15% {
      opacity: 1;
    }
    20% {
      opacity: 0.97;
    }
    25% {
      opacity: 0.9;
    }
    30% {
      opacity: 0.97;
    }
    35% {
      opacity: 1;
    }
    40% {
      opacity: 0.97;
    }
    45% {
      opacity: 1;
    }
    50% {
      opacity: 0.97;
    }
    55% {
      opacity: 1;
    }
    60% {
      opacity: 0.97;
    }
    80% {
      opacity: 1;
    }
    100% {
      opacity: 0.97;
    }
  }

  // En pas deze toe op de hele loader component door toe te voegen:
  animation: flicker 5s infinite;
`;

export default StyledLoader;
