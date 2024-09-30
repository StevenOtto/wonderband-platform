import styled from "styled-components";

const StyledPhotoWindow = styled.div`
  position: absolute;
  .inner {
  }

  .image-wrap {
    position: relative;
  }

  .meta-data {
    position: absolute;
    top: 0;
    left: 0;
    background-color: rgba(0, 0, 0, 0.5);
    color: white;
    padding: 10px;
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 5px;

    .title {
      font-size: 1rem;
      font-style: italic;
    }

    .dimensions {
      font-size: 0.8rem;
      font-style: italic;
    }
  }
`;

export default StyledPhotoWindow;
