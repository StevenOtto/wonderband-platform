import React from "react";
import Draggable from "react-draggable"; // Both at the same time
import StyledDragableWindow from "./DraggableWindow.styles";

export type DraggableWindowUIProps = {
  isOpen: boolean;
  style?: React.CSSProperties;
  closeCallback: () => void;
  onStart: () => void;
};

type DragableWindowProps = {
  title: string;
  children: React.ReactNode;
  size?: "small" | "medium" | "large";
};

const DraggableWindow: React.FC<
  DragableWindowProps & DraggableWindowUIProps
> = ({ title, children, size = "medium", isOpen, closeCallback, onStart }) => {
  return (
    <Draggable handle=".dragHandle" onStart={onStart}>
      <StyledDragableWindow $size={size} $isOpen={isOpen}>
        <header className="dragHandle">
          <h2>{title}</h2>
          <div className="bars">
            <span></span>
            <span></span>
            <span></span>
          </div>
          <button className="close" onClick={() => closeCallback()}>
            <span>x</span>
          </button>
        </header>
        <div className="content">{children}</div>
      </StyledDragableWindow>
    </Draggable>
  );
};

export default DraggableWindow;
