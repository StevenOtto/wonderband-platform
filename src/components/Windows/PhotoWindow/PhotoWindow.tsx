import React from "react";
import DraggableWindow, {
  DraggableWindowUIProps,
} from "../../common/DraggableWindow/DraggableWindow";
import StyledPhotoWindow from "./PhotoWindow.styles";
import { PhotoType } from "../../Desktop/Desktop";

type PhotoWindowProps = DraggableWindowUIProps & PhotoType;

const PhotoWindow: React.FC<PhotoWindowProps> = ({
  title,
  dimensions,
  isOpen,
  style,
  onStart,
  closeCallback,
}) => {
  return (
    <StyledPhotoWindow style={style}>
      <DraggableWindow
        title={"Foto"}
        isOpen={isOpen}
        onStart={onStart}
        closeCallback={closeCallback}
      >
        <div className="inner">
          <div className="image-wrap">
            <div className="meta-data">
              <p className="title">{title}</p>
              <p className="dimensions">{dimensions}</p>
            </div>
            <img src="https://via.placeholder.com/600x400" alt={title} />
          </div>
        </div>
      </DraggableWindow>
    </StyledPhotoWindow>
  );
};

export default PhotoWindow;
