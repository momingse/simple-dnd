import { FC, ReactNode, createContext, useRef } from "react";

export type DnDId = number | string | symbol;
export type DnDInfo = {
  id: DnDId;
  index: number;
};

export type OnDragEndFunc = (result: {
  source: DnDInfo;
  destination: DnDInfo;
}) => void;

type DnDContext = {
  onDragEnd: (e: React.DragEvent<HTMLDivElement>, destination: DnDInfo) => void;
  setSoure: (source: DnDInfo) => void;
  source: null | DnDInfo;
};

export const ContextStore = createContext<DnDContext>({
  onDragEnd: (e: React.DragEvent<HTMLDivElement>, destination: DnDInfo) => {},
  setSoure: (source: DnDInfo) => {},
  source: null,
});

type DnDContextProps = {
  onDragEnd: OnDragEndFunc;
  children?: ReactNode;
};

const DnDContext: FC<DnDContextProps> = ({ onDragEnd, children }) => {
  const source = useRef<DnDInfo | null>(null);

  const contextOnDragEnd = (
    e: React.DragEvent<HTMLDivElement>,
    destination: DnDInfo,
  ) => {
    const result = {
      source: source.current!,
      destination,
    };

    onDragEnd(result);
  };

  const setSoure = (_source: DnDInfo) => {
    source.current = _source;
  };

  return (
    <ContextStore.Provider
      value={{ onDragEnd: contextOnDragEnd, setSoure, source: source.current }}
    >
      {children}
    </ContextStore.Provider>
  );
};

export default DnDContext;
