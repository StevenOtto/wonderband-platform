import React from "react";
import DraggableWindow, {
  DraggableWindowUIProps,
} from "../../common/DraggableWindow/DraggableWindow";
import StyledPhotoWindow, { StyledMetaData } from "./PhotoWindow.styles";
import { PhotoType } from "../../Desktop/Desktop";

type PhotoWindowProps = DraggableWindowUIProps & PhotoType;

const PhotoWindow: React.FC<PhotoWindowProps> = ({
  title,
  dimensions,
  isOpen,
  style,
  onStart,
  source,
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
            <StyledMetaData>
              <p className="title">{title}</p>
              <p className="dimensions">{dimensions}</p>
            </StyledMetaData>
            <img src={source} alt={title} />
          </div>
        </div>
      </DraggableWindow>
    </StyledPhotoWindow>
  );
};

export default PhotoWindow;
