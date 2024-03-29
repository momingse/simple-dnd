import { FC, HTMLProps, ReactNode, useContext } from "react";
import { ContextStore, DnDInfo } from "./DnDContext";

type DroppableProps = {
  children?: (droppableContext: DroppableContext) => ReactNode;
  className?: HTMLProps<HTMLElement>["className"];
  droppableId: number | string;
  WrapperTag?: JSX.ElementType;
};

export type DroppableContext = {
  handleOnDrag: (index: number) => void;
};

const Droppable: FC<DroppableProps> = ({
  children,
  className = "",
  droppableId,
  WrapperTag = "div",
}) => {
  const { onDragEnd, setSoure } = useContext(ContextStore);
  const handleOnDrop = (e: React.DragEvent<HTMLDivElement>) => {
    console.log("drop");
    e.stopPropagation();
    e.preventDefault();
    const destination: DnDInfo = { id: droppableId, index: 0 };
    onDragEnd(e, destination);
  };

  const handleOnDrag = (index: number) => {
    const source: DnDInfo = {
      id: droppableId,
      index,
    };
    setSoure(source);
  };

  const droppableContext: DroppableContext = {
    handleOnDrag,
  };

  const handleOnDragOver = (e: React.DragEvent<HTMLDivElement>) => {
    // console.log(e);
    e.stopPropagation();
    e.preventDefault();
  };

  return (
    <WrapperTag
      className={className}
      onDrop={handleOnDrop}
      onDragOver={handleOnDragOver}
    >
      {children && children(droppableContext)}
    </WrapperTag>
  );
};

export default Droppable;
