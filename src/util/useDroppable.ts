import { useContext, useRef } from 'react';
import { DnDId } from '../components/Example1/DnDContext';
import { HookContextStore } from '../components/Example2/DndContext';

type UseDroppableArgs = {
	id: DnDId;
};

type UseDroppableReturn = {
	setNodeRef: (node: HTMLElement | null) => void;
	isOver: boolean;
};

const useDroppable = ({ id }: UseDroppableArgs): UseDroppableReturn => {
	const setup = useRef(false);
	const {addDroppable, isOver} = useContext(HookContextStore);

	const setNodeRef = (node: HTMLElement | null) => {
		if (setup.current) return;
		setup.current = true;
		if (!node) return;

		addDroppable(id, node);
	};

	return { setNodeRef, isOver: isOver == id };
};

export default useDroppable;
