"use client"
import Image from "next/image";
import Navbar from "./component/navbar";
import { DndContext } from "@dnd-kit/core";
import { useState } from "react";
import {Draggable} from "./component/draggable"
import {Droppable} from './component/droppable';
import { ExCard } from "./component/excard";

export default function Home() {
  const containers = ['A']
  const [parent, setParent] = useState(null);

  const draggableMarkup = (
    <Draggable id="d1"><ExCard/></Draggable>
  );
  return (
    <main className=" min-h-screen ">
      <div className=" w-full flex flex-col items-center  ">
        <Navbar></Navbar>
      </div>
      <div className="p-8 flex justify-center space-x-3 flex-row">

   
      <DndContext onDragEnd={handleDragEnd}>
    <div className='items-center flex flex-col border-2 w-4/6 h-96'>
      To save
      {parent === null ? draggableMarkup : null}
    </div>
     
   
    <div className='flex flex-col items-center border-2 w-2/6 '>
      Saved
      {containers.map((id) => (
        // We updated the Droppable component so it would accept an `id`
        // prop and pass it to `useDroppable`
       
        <Droppable key={id} id={id}>
          {parent === id ? draggableMarkup : <div className="bg-amber-200 w-96 h-96"></div>}
        </Droppable>

     
      ))}
           </div>
    </DndContext>

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
