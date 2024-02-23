import React, { FC, ReactNode } from "react";
import { DroppableContext } from "./Droppable";

type DraggableProps = {
  children?: ReactNode;
  draggableId: number | string;
  droppableContext: DroppableContext;
  index: number;
};

const Draggable: FC<DraggableProps> = ({
  children,
  draggableId,
  droppableContext,
  index,
}) => {
  const handleOnDragStart = (e: React.DragEvent<HTMLDivElement>) => {
    droppableContext.handleOnDrag(index);
    console.log("drag");
  };

  return (
    <div draggable onDragStart={handleOnDragStart}>
      {children}
    </div>
  );
};

export default Draggable;
