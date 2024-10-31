import styled from "styled-components";
import { DraggabbleWindowOuter } from "../../common/DraggableWindow/DraggableWindow.styles";

const StyledVideoWindow = styled(DraggabbleWindowOuter)`
  .inner {
    position: relative;
    aspect-ratio: 16 / 9;
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
    height: auto;
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
  }
`;

export default StyledVideoWindow;
