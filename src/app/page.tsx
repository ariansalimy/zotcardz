"use client"
import Image from "next/image";
import Navbar from "./component/navbar";
import { DndContext } from "@dnd-kit/core";
import { useState } from "react";
import {Draggable} from "./component/draggable"
import {Droppable} from './component/droppable';
import { ExCard } from "./component/excard";

export default function Home() {
  const containers = ['A','B','C','D'];
  const [parent, setParent] = useState(null);

  const draggableMarkup = (
    <Draggable id="draggable"><ExCard/></Draggable>
  );
  return (
    <main className=" min-h-screen ">
      <div className=" w-full flex flex-col items-center  ">
        <Navbar></Navbar>
      </div>
      <div className="p-12 flex justify-between flex-row">

   
      <DndContext onDragEnd={handleDragEnd}>
      {parent === null ? draggableMarkup : null}

      {containers.map((id) => (
        // We updated the Droppable component so it would accept an `id`
        // prop and pass it to `useDroppable`
        <Droppable key={id} id={id}>
          {parent === id ? draggableMarkup :"Drop here"}
        </Droppable>
      ))}
    </DndContext>
  );
  </div>
    </main>
  );
  function handleDragEnd(event:any) {
    const {over} = event;

    // If the item is dropped over a container, set it as the parent
    // otherwise reset the parent to `null`
    setParent(over ? over.id : null);
  }
}
