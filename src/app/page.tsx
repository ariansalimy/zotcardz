"use client"
import Image from "next/image";
import Navbar from "./component/navbar";
import Event_card from "./component/Event_card";
import Save_button from "./component/Save_button";
import { DndContext } from "@dnd-kit/core";
import { useState } from "react";
import {Draggable} from "./component/draggable"
import {Droppable} from './component/droppable';
import { ExCard } from "./component/excard";

export default function Home() {
  const containers = ['A']
  const [parent, setParent] = useState(null);

  const draggableMarkup = (
    <Draggable id="d1"><Event_card></Event_card></Draggable>
  );

  const events_section = {
    display: "flex",
    justifyContent: "center",
    backgroundColor: "#6AA2B8",
    padding: '10px 10px',
    width: "1128px",
    height: "500px",
    borderRadius: '16px',
    
  }

  const save_section = {
    display: "flex",
    justifyContent: "center",
    backgroundColor: "#6AA2B8",
    padding: '10px 10px',
    width: "1128px",
    height: "300px",
    borderRadius: '16px',
  }

  const header = {
    color: "white",
    fontWeight: "bold",
    fontSize: "24px",
  }

  const container = {
    display: "grid",
    gap: "10px",
}

  const item = {
    padding: "3px",
  }

  

  return (
    <main className=" min-h-screen ">
      <div className=" w-full flex flex-col items-center  ">
        <Navbar></Navbar>
      </div>

      {/*drag and drop section*/}
      <div style={container}>
      <div style={item}>
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
    

        {/*events section*/}
        <div className="flex justify-center p-10">
        <div style={events_section}>
          <div style={container}>

          <h1 style={header}>UCI Events</h1>
          
          <div style={container}>
            <div style={item}><Event_card></Event_card></div>
            <div style={item}><Event_card></Event_card></div>
          </div>

          </div>
        </div>
        </div>

        <div className="flex justify-center p-3">
          <div style={save_section}>
            <div style={container}>
            <h1 style={header}>Events to Save</h1>
            <div className="flex justify-center p-3">
            <Save_button></Save_button>
            </div>
            </div>
            
            
            
          </div>
        </div>

  </div>
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
