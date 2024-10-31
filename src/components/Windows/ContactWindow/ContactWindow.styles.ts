import styled from "styled-components";
import cssVars from "../../../styles/cssVars";
import { DraggabbleWindowOuter } from "../../common/DraggableWindow/DraggableWindow.styles";

const StyledContactWindow = styled(DraggabbleWindowOuter)`
  .inner {
    padding: 20px;
  }

  p {
    font-weight: 400;
    font-style: italic;
    margin-bottom: 20px;
    font-size: 16px;
  }

  form {
    display: flex;
    flex-direction: column;

    label {
      display: block;
      text-transform: uppercase;
      font-weight: 600;
      margin-bottom: 6px;
      font-size: 16px;
      letter-spacing: 0.05em;
    }

    textarea,
    input {
      border: 2px solid ${cssVars.colors.black};
      border-radius: 4px;
      padding: 12px;
      background-color: ${cssVars.colors.white};
      margin-bottom: 20px;
    }
  }
`;

export default StyledContactWindow;
