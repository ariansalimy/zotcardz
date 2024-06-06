"use client";

import { DndContext } from "@dnd-kit/core";
import { Draggable } from "./component/draggable";
import Event_card from "./component/Event_card";
import React, { Dispatch, SetStateAction, useState } from "react";
import { Droppable } from "./component/droppable";
import Save_button from "./component/Save_button";
import { CardData, sampleCard } from "./data/card-data";
import CardList from "./component/card-list";
import InfoModal from "./component/info-modal";
import getSampleEvents from "./data/sampleEvents";

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

  let prevSavingEvents = { ...savingEvents };
  let prevSavedEvents = { ...savedEvents };

  const [modalVisible, setModalVisible] = useState(false);
  const [currentCardModal, setCurrentCardModal] =
    useState<CardData>(sampleCard);

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
        {/* <div className="flex justify-center p-10">
          <div style={events_section}>
            <div style={container}>
              <div style={item}>
                <h1 style={header} className="flex justify-center">
                  UCI Events
                </h1>
              </div>
              <div style={item}>
                <div style={events_grid}>
                  <CardList cards={unsavedEvents}></CardList>
                </div>
              </div>
            </div>
          </div>
        </div> */}

        <div className="flex flex-col items-center my-8">
          <h2 className="text-blue-dark font-bold text-4xl"> UCI Events </h2>
        </div>

        <div className="flex flex-col items-center my-8">
          <div className="flex flex-col items-center bg-blue-light w-11/12 rounded-2xl p-2.5 gap-4">
            <h2 className="text-white font-bold text-2xl"> UCI Events </h2>
            <div className="flex justify-center gap-3 flex-wrap min-h-usah">
              <CardList cards={unsavedEvents}></CardList>
            </div>
          </div>
        </div>

        {/* <div className="flex justify-center p-3">
          {containers.map((id) => (
            // We updated the Droppable component so it would accept an `id`
            // prop and pass it to `useDroppable
            <Droppable key={id} id={id}>
              <div style={save_section} className="">
                <div style={container}>
                  <h1 style={header}>Events to Save</h1>
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
        </div> */}

        <Droppable id={"saving"}>
          <div className="flex flex-col items-center my-8">
            <div className="flex flex-col items-center bg-blue-light w-11/12 rounded-2xl p-2.5 gap-4">
              <h2 className="text-white font-bold text-2xl">
                {" "}
                Events to Save{" "}
              </h2>
              <div className="flex justify-center gap-3 flex-wrap min-h-sah">
                <CardList cards={savingEvents}></CardList>
              </div>
              <Save_button handleClick={handleSave}></Save_button>
            </div>
          </div>
        </Droppable>
      </DndContext>

      <InfoModal
        cardData={currentCardModal}
        visible={modalVisible}
        setVisible={setModalVisible}
      ></InfoModal>
    </>
  );
  function handleDragEnd(event: any) {
    console.log(event);
    const { active, over, delta } = event;

    // If the item is dropped over a container, set it as the parent
    // otherwise reset the parent to `null`
    // setParent(over ? over.id : null);
    console.log(active);
    console.log(over);
    // If delta.x and delta.y, then do not consider it a drag event
    if (!(delta.x === 0) && !(delta.y === 0)) {
      // Card in the saving area
      if (over && over.id === "saving") {
        // Check to make sure the card is not already in the saving area
        if (!savingEvents[active.id]) {
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
    // If it is a click event and not a drag event
    else {
      setCurrentCardModal(getSampleEvents()[active.id]);
      setModalVisible(true);
    }
  }

  function handleSave(event: React.MouseEvent) {
    console.log(event);
    // Log the state of savingEvents and savedEvents if savingEvents was not empty
    if (Object.keys(savingEvents).length > 0) {
      prevSavingEvents = { ...savingEvents };
      prevSavedEvents = { ...savedEvents };

      const tempSavingEvents = { ...savingEvents };
      const tempSavedEvents = { ...savedEvents };
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
    setSavingEvents({ ...prevSavingEvents });
    setSavedEvents({ ...prevSavedEvents });
  }
}
