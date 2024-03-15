# simple-dnd

## Description

This is a simple example of the basic of drag and drop in react. Here contain two example with one is using react's `onDrag` prop and the other is using `addEventListener` to handle the drag and drop event.

## Usage

1. For the wrapper one, you need to wrap the content like this

```jsx
  <div>
        <DnDContext onDragEnd={OnDragEnd}>
          {Object.entries(table).map(([key, value]) => {
            return (
              <Droppable
                className="border-black border p-5 m-5"
                droppableId={key}
                key={key}
                // WrapperTag={Wrapper}
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
```

2. For the hook one, in each component you need to use the hook like this:

```jsx
const App = () => {
	const [table, setTable] = useState<{ [key: DnDId]: string[] }>({
		1: ['aaa', 'bbb'],
		2: ['ccc', 'ddd'],
		3: ['eee', 'ggg'],
	});

	const OnDragEnd = (result) => {
    // some code
	};

	return (
		<DndContext onDragEnd={OnDragEnd}>
			{Object.entries(table).map(([key, value], index) => {
				return (
					<Column className='border-black border p-5 m-5' dndId={key} key={index}>
						{value.map((content, index) => (
							<Card dndId={index} key={content + index + key}>{content}</Card>
						))}
					</Column>
				);
			})}
		</DndContext>
	);
}

const Column = ({children}) => {
  const { dropRef, isOver } = useDroppable({id});
  return (
    <div ref={dropRef} className={`border p-5 m-5 ${isOver ? 'bg-gray-200' : ''}`}>
      {children}
    </div>
  )
}

const Draggable = ({children}) => {
  const { dragRef, isDragging } = useDraggable({id});
  return (
    <div ref={dragRef} className="border p-5 m-5">
      {children}
    </div>
  )
}
```

## Reference

- [dnd-kit](https://github.com/clauderic/dnd-kit)
- [react-beautiful-dnd](https://github.com/atlassian/react-beautiful-dnd)
