import React from "react";
import DraggableWindow, {
  DraggableWindowUIProps,
} from "../../common/DraggableWindow/DraggableWindow";
import StyledAboutWindow from "./AboutWindow.styles";

const AboutWindow: React.FC<DraggableWindowUIProps> = ({
  isOpen,
  style,
  onStart,
  closeCallback,
}) => {
  return (
    <DraggableWindow
      title="Over de wonderband"
      size="large"
      isOpen={isOpen}
      onStart={onStart}
      closeCallback={closeCallback}
    >
      <StyledAboutWindow style={style}>
        <div className="inner">
          <div className="left">
            <div className="text-wrap text-wrap--green">
              <p>
                Lorem ipsum, or lipsum as it is sometimes known, is dummy text
                used in laying out print, graphic or web designs. The passage is
                attributed to an unknown typesetter in the 15th century who is
                thought to have scrambled parts.
              </p>
            </div>
            <div className="decoration" style={{ height: "100px" }}></div>
            <div className="text-wrap text-wrap--blue">
              <p>
                Lorem ipsum, or lipsum as it is sometimes known, is dummy text
                used in laying out print, graphic or web designs. The passage is
                attributed to an unknown typesetter in the 15th century who is
                thought to have scrambled parts.
              </p>
            </div>
          </div>

          <div className="right">
            <div className="decoration" style={{ height: "100px" }}></div>
            <div className="text-wrap text-wrap--purple">
              <p>
                Lorem ipsum, or lipsum as it is sometimes known, is dummy text
                used in laying out print, graphic or web designs. The passage is
                attributed to an unknown typesetter in the 15th century who is
                thought to have scrambled parts.
              </p>
            </div>
          </div>
        </div>
      </StyledAboutWindow>
    </DraggableWindow>
  );
};

export default AboutWindow;
