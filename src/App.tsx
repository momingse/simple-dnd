import { useState } from "react";
import Droppable from "./components/Droppable";
import DnDContext, {
  DnDId,
  DnDInfo,
  OnDragEndFunc,
} from "./components/DnDContext";
import Draggable from "./components/Draggable";

function App() {
  const [table, setTable] = useState<{ [key: DnDId]: any[] }>({
    1: ["aaa", "bbb"],
    2: ["ccc", "ddd"],
    3: ["eee", "ggg"],
  });
  const OnDragEnd: OnDragEndFunc = (result) => {
    const { source, destination } = result;
    if (source.id === destination.id) return;

    const newSource = [...table[source.id]];
    const item = newSource.splice(source.index, 1);
    const newDestination = [...table[destination.id]];
    newDestination.splice(destination.index, 0, item);
    console.log(newSource, newDestination);

    setTable({
      ...table,
      [source.id]: newSource,
      [destination.id]: newDestination,
    });
  };

  return (
    <>
      <div>
        <DnDContext onDragEnd={OnDragEnd}>
          {Object.entries(table).map(([key, value]) => {
            return (
              <Droppable
                className="border-black border p-5 m-5"
                droppableId={key}
                key={key}
              >
                {(droppableContext) => {
                  {
                    return value.map((content, index) => (
                      <Draggable
                        draggableId={content}
                        key={content}
                        droppableContext={droppableContext}
                        index={index}
                      >
                        {content}
                      </Draggable>
                    ));
                  }
                }}
              </Droppable>
            );
          })}
        </DnDContext>
      </div>
    </>
  );
}

export default App;
