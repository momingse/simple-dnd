import { FC } from 'react';
import useDraggable from '../../util/useDraggable';
import { DnDId } from '../Example1/DnDContext';

type CardProps = {
	children: React.ReactNode;
	className?: React.HTMLAttributes<HTMLDivElement>['className'];
	dndId: DnDId;
};

const Card: FC<CardProps> = ({ children, className, dndId }) => {
	const { setNodeRef, attributes } = useDraggable({ id: dndId });
	console.log('rendering card', children);

	return (
		<div className={className} ref={setNodeRef} {...attributes}>
			{children}
		</div>
	);
};

export default Card;
