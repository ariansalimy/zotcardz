"use client";

import { DndContext } from "@dnd-kit/core";
import { Draggable } from "./component/draggable";
import Event_card from "./component/Event_card";
import { Dispatch, SetStateAction, useState } from "react";
import { Droppable } from "./component/droppable";
import Save_button from "./component/Save_button";
import { CardData } from "./data/card-data";

type FindProps = {
  unsavedEvents: Record<string, CardData>;
  setUnsavedEvents: Dispatch<SetStateAction<Record<string, CardData>>>;
};

export default function Find({ unsavedEvents, setUnsavedEvents }: FindProps) {
  const containers = ["A"];
  const [parent, setParent] = useState(null);
  const [parent2, setParent2] = useState(null);

  const events_section = {
    display: "flex",
    justifyContent: "center",
    backgroundColor: "#6AA2B8",
    padding: "10px 10px",
    width: "1128px",
    height: "500px",
    borderRadius: "16px",
  };

  const save_section = {
    display: "flex",
    justifyContent: "center",
    backgroundColor: "#6AA2B8",
    padding: "10px 10px",
    width: "1128px",
    height: "300px",
    borderRadius: "16px",
  };

  const header = {
    color: "white",
    fontWeight: "bold",
    fontSize: "24px",
  };

  const container = {
    display: "grid",
    gap: "10px",
  };

  const events_grid = {
    display: "grid",
    gap: "10px",
    gridTemplateColumns: "repeat(3, 1fr)"
  }

  const item = {
    padding: "3px",
  };

  const draggableMarkup = (
    <div style={item}>
      <Draggable id="d1">
        <Event_card></Event_card>
      </Draggable>
    </div>
  );

  return (
      <>
        {/*events section*/}

        <DndContext onDragEnd={handleDragEnd}>
          <div className="flex justify-center p-10">
            <div style={events_section}>
              <div style={container}>

                <div style={item}>
                <h1 style={header} className="flex justify-center">UCI Events</h1>
                </div>
                
                <div style={item}>
                <div style={events_grid}>
                  {Object.keys(unsavedEvents).map((id) => (
                    <Draggable id={id}>
                      <div style={item} key={id}>
                        <Event_card></Event_card>
                      </div>
                    </Draggable>
                  ))}
                  {parent === null ? draggableMarkup : null}
                </div>
                </div>
              </div>
            </div>
          </div>

          <div className="flex justify-center p-3">
            <div style={save_section}>
              <div style={container}>
                <h1 style={header}>Events to Save</h1>
                {containers.map((id) => (
                  // We updated the Droppable component so it would accept an `id`
                  // prop and pass it to `useDroppable`
                  <Droppable key={id} id={id}>
                    {parent === id ? (
                      draggableMarkup
                    ) : (
                      <div className="flex justify-center p-3"></div>
                    )}
                  </Droppable>
                ))}
                <div className="flex justify-center p-3">
                  <Save_button></Save_button>
                </div>
              </div>
            </div>
          </div>
        </DndContext>
      </>
  );
  function handleDragEnd(event: any) {
    const { over } = event;

    // If the item is dropped over a container, set it as the parent
    // otherwise reset the parent to `null`
    setParent(over ? over.id : null);
  }
}
