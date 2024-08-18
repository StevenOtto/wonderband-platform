import React from "react";
import Draggable from "react-draggable"; // Both at the same time
import StyledDragableWindow from "./DraggableWindow.styles";

type DragableWindowProps = {
  title: string;
  children: React.ReactNode;
};

const DraggableWindow: React.FC<DragableWindowProps> = ({
  title,
  children,
}) => {
  return (
    <Draggable handle=".dragHandle">
      <StyledDragableWindow>
        <header className="dragHandle">
          <h2>{title}</h2>
          <div className="bars">
            <span></span>
            <span></span>
            <span></span>
          </div>
          <button className="close">
            <span>x</span>
          </button>
        </header>
        <div className="content">{children}</div>
      </StyledDragableWindow>
    </Draggable>
  );
};

export default DraggableWindow;
