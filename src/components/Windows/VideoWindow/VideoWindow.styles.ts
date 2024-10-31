import styled from "styled-components";
import { DraggabbleWindowOuter } from "../../common/DraggableWindow/DraggableWindow.styles";
import bpMax from "../../../styles/functions/bpMax";

const StyledVideoWindow = styled(DraggabbleWindowOuter)`
  .inner {
    position: relative;
    aspect-ratio: 16 / 9;

    ${bpMax.md`
      aspect-ratio: 9 / 16;
    `}
  }

  .image-wrap {
    position: relative;
  }

  video {
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    object-fit: cover;
  }

  .controls {
    z-index: 1;
    display: flex;
    gap: 10px;
    justify-content: center;
    position: absolute;
    bottom: 20px;
    left: 50%;
    transform: translateX(-50%);

    ${bpMax.md`
      flex-direction: column;
      bottom: 10px;

      button {
        align-self: center;
      }
    `}
  }
`;

export default StyledVideoWindow;
