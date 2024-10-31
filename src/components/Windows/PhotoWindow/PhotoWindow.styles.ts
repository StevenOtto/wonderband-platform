import styled from "styled-components";
import { DraggabbleWindowOuter } from "../../common/DraggableWindow/DraggableWindow.styles";

export const StyledMetaData = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.5);
  color: white;
  padding: 5px 10px;
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  gap: 5px;
  z-index: 1;

  .title {
    font-size: 1rem;
    font-style: italic;
  }

  .dimensions {
    font-size: 0.8rem;
    font-style: italic;
  }

  .video-progress {
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 5px;
  }

  .bars {
    display: flex;
    flex-direction: row;
    gap: 2px;
    // bars going up and down animation
    animation: bars 1s infinite alternate;
  }
`;

const StyledPhotoWindow = styled(DraggabbleWindowOuter)`
  .inner {
  }

  .image-wrap {
    position: relative;
  }
`;

export default StyledPhotoWindow;
