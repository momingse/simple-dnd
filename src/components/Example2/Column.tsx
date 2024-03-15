import React, { FC } from 'react';
import { DnDId } from '../Example1/DnDContext';
import useDroppable from '../../util/useDroppable';

type ColumnProps = {
	children: React.ReactNode;
	className: React.HTMLAttributes<HTMLDivElement>['className'];
	dndId: DnDId;
};

const Column: FC<ColumnProps> = ({ children, className, dndId }) => {
	const { setNodeRef, isOver } = useDroppable({ id: dndId });

	return (
		<div className={className} ref={setNodeRef} style={{
			border: isOver ? '2px solid red' : '2px solid black',
		}}>
			{children}
		</div>
	);
};

export default Column;
