import React from 'react';
import {useDraggable} from '@dnd-kit/core';

type DraggableProps = {
  id: string | number,
  children: React.ReactNode,
  disabled?: boolean
}

export function Draggable({id, children, disabled=false}: DraggableProps) {
  const {attributes, listeners, setNodeRef, transform} = useDraggable({
    id: id,
    disabled: disabled
  });
  const style = transform ? {
    transform: `translate3d(${transform.x}px, ${transform.y}px, 0)`,
  } : undefined;

  
  return (
    <button ref={setNodeRef} style={style} {...listeners} {...attributes}>
      {children}
    </button>
  );
}