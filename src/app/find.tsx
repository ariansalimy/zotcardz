"use client";

import { DndContext } from "@dnd-kit/core";
import { Draggable } from "./component/draggable";
import Event_card from "./component/Event_card";
import React, { Dispatch, SetStateAction, useState } from "react";
import { Droppable } from "./component/droppable";
import Save_button from "./component/Save_button";
import { CardData } from "./data/card-data";
import CardList from "./component/card-list";

type FindProps = {
  unsavedEvents: Record<string, CardData>;
  setUnsavedEvents: Dispatch<SetStateAction<Record<string, CardData>>>;
  savingEvents: Record<string, CardData>;
  setSavingEvents: Dispatch<SetStateAction<Record<string, CardData>>>;
  savedEvents: Record<string, CardData>;
  setSavedEvents: Dispatch<SetStateAction<Record<string, CardData>>>;
};

export default function Find({
  unsavedEvents,
  setUnsavedEvents,
  savingEvents,
  setSavingEvents,
  savedEvents,
  setSavedEvents,
}: FindProps) {
  const containers = ["saving"];
  const [parent, setParent] = useState(null);
  const [parent2, setParent2] = useState(null);

  let prevSavingEvents = {...savingEvents};
  let prevSavedEvents = {...savedEvents};

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
    gridTemplateColumns: "repeat(3, 1fr)",
  };

  const item = {
    padding: "3px",
  };

//   const draggableMarkup = (
//     <div style={item}>
//       <Draggable id="d1">
//         <Event_card></Event_card>
//       </Draggable>
//     </div>
//   );

  return (
    <>
      {/*events section*/}

      <DndContext onDragEnd={handleDragEnd}>
        <div className="flex justify-center p-10">
          <div style={events_section}>
            <div style={container}>
              <div style={item}>
                <h1 style={header} className="flex justify-center">
                  UCI Events
                </h1>
              </div>

              {/* <div style={container}>
                <CardList cards={unsavedEvents}></CardList>
              </div> */}

              <div style={item}>
                <div style={events_grid}>
                  <CardList cards={unsavedEvents}></CardList>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="flex justify-center p-3">
          {containers.map((id) => (
            // We updated the Droppable component so it would accept an `id`
            // prop and pass it to `useDroppable
            <Droppable key={id} id={id}>
              <div style={save_section} className="">
                <div style={container}>
                  <h1 style={header}>Events to Save</h1>

                  {/* {parent === id ? (
                      draggableMarkup
                    ) : (
                      <div className="flex justify-center p-3"></div>
                    )} */}
                  <div className="flex justify-center p-3">
                    <CardList cards={savingEvents}></CardList>
                  </div>
                  <div className="flex justify-center p-3">
                    <Save_button handleClick={handleSave}></Save_button>
                  </div>
                </div>
              </div>
            </Droppable>
          ))}
        </div>
      </DndContext>
    </>
  );
  function handleDragEnd(event: any) {
    const { active, over } = event;

    // If the item is dropped over a container, set it as the parent
    // otherwise reset the parent to `null`
    // setParent(over ? over.id : null);
    console.log(active);
    console.log(over);
    // Card in the saving area
    if (over && over.id === "saving") {
      // Add Event to savingEvents
      const tempSaving = { ...savingEvents };
      tempSaving[active.id] = unsavedEvents[active.id];
      setSavingEvents(tempSaving);

      // Remove Event from unsavedEvents
      const tempUnsaved = { ...unsavedEvents };
      delete tempUnsaved[active.id];
      setUnsavedEvents(tempUnsaved);

      console.log(`
        Saving: ${savingEvents}
        Unsaved: ${unsavedEvents}
        `);
    }
    // Card not in saving area
    else {
      // If the card a savingEvent
      if (savingEvents[active.id]) {
        // Add Event to unsavedEvents
        const tempUnsaved = { ...unsavedEvents };
        tempUnsaved[active.id] = savingEvents[active.id];
        setUnsavedEvents(tempUnsaved);

        // Remove Event from savingEvents
        const tempSaving = { ...savingEvents };
        delete tempSaving[active.id];
        setSavingEvents(tempSaving);
      }
    }
  }

  function handleSave(event: React.MouseEvent) {
    console.log(event);
    // Log the state of savingEvents and savedEvents if savingEvents was not empty
    if (Object.keys(savingEvents).length > 0) {
        prevSavingEvents = {...savingEvents};
        prevSavedEvents = {...savedEvents};

        const tempSavingEvents = {...savingEvents};
        const tempSavedEvents = {...savedEvents};
        for (let id of Object.keys(savingEvents)) {
            tempSavedEvents[id] = tempSavingEvents[id];
            delete tempSavingEvents[id];
        }

        setSavingEvents(tempSavingEvents);
        setSavedEvents(tempSavedEvents);
    }

    console.log(savingEvents);
    console.log(savedEvents);
  }

  // When we implement the undo button, attach this function as the onClick function
  function handleUndo(event: React.MouseEvent) {
    console.log(event);
    setSavingEvents({...prevSavingEvents});
    setSavedEvents({...prevSavedEvents});
  }
}
