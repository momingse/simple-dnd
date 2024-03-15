import { useState } from 'react';
import DndContext from './DndContext';
import Column from './Column';
import Card from './Card';
import { DnDId } from '../Example1/DnDContext';

const HookExample = () => {
	const [table, setTable] = useState<{ [key: DnDId]: string[] }>({
		1: ['aaa', 'bbb'],
		2: ['ccc', 'ddd'],
		3: ['eee', 'ggg'],
	});

	const OnDragEnd = (result) => {
		const {over, from, item} = result;
		if (over === from) return;

		const newTable = { ...table };
		const fromColumn = newTable[from];
		const overColumn = newTable[over];

		const [dragged] = fromColumn.splice(item, 1);
		overColumn.push(dragged);

		setTable(newTable);
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
};

export default HookExample;
