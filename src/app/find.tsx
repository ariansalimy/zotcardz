"use client";

import { DndContext } from "@dnd-kit/core";
import { Draggable } from "./component/draggable";
import Event_card from "./component/Event_card";
import React, { Dispatch, SetStateAction, useState } from "react";
import { Droppable } from "./component/droppable";
import Button from "./component/Button";
import { CardData, sampleCard } from "./data/card-data";
import CardList from "./component/card-list";
import InfoModal from "./component/info-modal";
import getSampleEvents from "./data/sampleEvents";
import FindHelp from "./component/find-help";
import { Backspace } from "@mui/icons-material";
import { ArrowBackIosNew } from "@mui/icons-material";

type FindProps = {
  unsavedEvents: Record<string, CardData>;
  setUnsavedEvents: Dispatch<SetStateAction<Record<string, CardData>>>;
  savingEvents: Record<string, CardData>;
  setSavingEvents: Dispatch<SetStateAction<Record<string, CardData>>>;
  savedEvents: Record<string, CardData>;
  setSavedEvents: Dispatch<SetStateAction<Record<string, CardData>>>;
  prevSavingEvents: Record<string, CardData>;
  setPrevSavingEvents: Dispatch<SetStateAction<Record<string, CardData>>>;
  prevSavedEvents: Record<string, CardData>;
  setPrevSavedEvents: Dispatch<SetStateAction<Record<string, CardData>>>;
  prevUnsavedEvents: Record<string, CardData>;
  setPrevUnsavedEvents: Dispatch<SetStateAction<Record<string, CardData>>>;
};

export default function Find({
  unsavedEvents,
  setUnsavedEvents,
  savingEvents,
  setSavingEvents,
  savedEvents,
  setSavedEvents,
  prevSavingEvents,
  setPrevSavingEvents,
  prevSavedEvents,
  setPrevSavedEvents,
  prevUnsavedEvents,
  setPrevUnsavedEvents
}: FindProps) {
  const containers = ["saving"];
  const [parent, setParent] = useState(null);
  const [parent2, setParent2] = useState(null);

  const [modalVisible, setModalVisible] = useState(false);
  const [currentCardModal, setCurrentCardModal] =
    useState<CardData>(sampleCard);

  const [savingAreaText, setSavingAreaText] = useState("Events to Save");
  const [eventsAreaText, setEventsAreaText] = useState("UCI Events");
  const [justSaved, setJustSaved] = useState(false);

  const [randCardData, setRandCardData] = useState(sampleCard);
  const [isRandom, setIsRandom] = useState(false);

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
          <h1 className="text-blue-dark font-bold text-4xl">
            {" "}
            Find UCI Events{" "}
          </h1>
        </div>

        <div className="flex flex-col items-center my-8">
          <div className="flex flex-col items-center bg-blue-light w-11/12 rounded-2xl p-2.5 gap-4">
            <h2 className="text-white font-bold text-2xl">
              {" "}
              {eventsAreaText}{" "}
              <FindHelp text="Drag an event card to the “Events to Save” area and press the button to save it!" />{" "}
            </h2>
            <div className="flex justify-center gap-3 flex-wrap min-h-usah">
              {Object.keys(unsavedEvents).length == 0 && (
                <h3 className="text-white font-bold text-xl">No events left to be saved.</h3>
              )}
              {!isRandom && <CardList cards={unsavedEvents}></CardList>}
              {isRandom && (
                <Draggable id={randCardData.id}>
                  <div style={item}>
                    <Event_card cardData={randCardData}></Event_card>
                  </div>
                </Draggable>
              )}
            </div>
            {!isRandom && (
              <Button text="Pick For Me" style={2} handleClick={handlePick} />
            )}
            {isRandom && (
              <>
                <Button
                  text="Redraw the Card"
                  style={2}
                  handleClick={handlePick}
                />
                <Button
                  text="Go Back"
                  style={3}
                  handleClick={() => {
                    setIsRandom(false);
                    setEventsAreaText("UCI Events");
                  }}
                />
               
              </>
            )}
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
                {savingAreaText}{" "}
              </h2>
              <div className="flex justify-center gap-3 flex-wrap min-h-sah">
                <CardList cards={savingEvents}></CardList>
              </div>
              {!justSaved && (
                <Button
                  text="Save Events"
                  handleClick={handleSave}
                  style={1}
                ></Button>
              )}
              {justSaved && (
                <Button
                  text="Undo Save"
                  handleClick={handleUndo}
                  style={3}
                ></Button>
              )}
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
        if (isRandom) {
          setIsRandom(false);
          setEventsAreaText("UCI Events");
        }
        // Check to make sure the card is not already in the saving area
        if (!savingEvents[active.id]) {
          setJustSaved(false);
          setSavingAreaText("Events to Save");
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

          setJustSaved(false);
          setSavingAreaText("Events to Save");
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
      setPrevSavingEvents({ ...savingEvents });
      setPrevSavedEvents({ ...savedEvents });
      setPrevUnsavedEvents({ ...unsavedEvents });

      console.log(`Before Save: Saving then Saved`);
      console.log(prevSavingEvents);
      console.log(prevSavedEvents);

      const tempSavingEvents = { ...savingEvents };
      const tempSavedEvents = { ...savedEvents };
      for (let id of Object.keys(savingEvents)) {
        tempSavedEvents[id] = tempSavingEvents[id];
        delete tempSavingEvents[id];
      }

      setSavingEvents(tempSavingEvents);
      setSavedEvents(tempSavedEvents);

      setJustSaved(true);
      setSavingAreaText("Save Completed!");

      console.log(`After Save: Saving then Saved`);
      console.log(prevSavingEvents);
      console.log(prevSavedEvents);
      setIsRandom(false);
      setEventsAreaText("UCI Events");
    }

    // console.log(savingEvents);
    // console.log(savedEvents);
  }

  // When we implement the undo button, attach this function as the onClick function
  function handleUndo(event: React.MouseEvent) {
    console.log(event);
    console.log(prevSavingEvents);
    console.log(prevSavedEvents);
    setSavingEvents({ ...prevSavingEvents });
    setSavedEvents({ ...prevSavedEvents });
    setUnsavedEvents({ ...prevUnsavedEvents });

    setJustSaved(false);
    setSavingAreaText("Events to Save");
  }

  function handlePick(event: React.MouseEvent) {
    console.log(event);
    // Only if there are no unsaved events
    if (Object.keys(unsavedEvents).length > 0) {
      const selectedId =
        Object.keys(unsavedEvents)[
          Math.floor(Math.random() * Object.keys(unsavedEvents).length)
        ];
      console.log(selectedId);

      setRandCardData(getSampleEvents()[selectedId]);
      setIsRandom(true);
      setEventsAreaText("Draw Your Random Card");

      console.log(unsavedEvents);
    }
  }
}
