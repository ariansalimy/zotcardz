"use client";

import { DndContext } from "@dnd-kit/core";
import { Draggable } from "./component/draggable";
import Event_card from "./component/Event_card";
import { Dispatch, SetStateAction, useState } from "react";
import { Droppable } from "./component/droppable";
import Button from "./component/Button";
import { CardData, sampleCard } from "./data/card-data";
import CardList from "./component/card-list";
import InfoModal from "./component/info-modal";
import getSampleEvents from "./data/sampleEvents";

type SavedProps = {
  unsavedEvents: Record<string, CardData>;
  setUnsavedEvents: Dispatch<SetStateAction<Record<string, CardData>>>;
  savingEvents: Record<string, CardData>;
  setSavingEvents: Dispatch<SetStateAction<Record<string, CardData>>>;
  savedEvents: Record<string, CardData>;
  setSavedEvents: Dispatch<SetStateAction<Record<string, CardData>>>;
};

export default function Saved({
  unsavedEvents,
  setUnsavedEvents,
  savingEvents,
  setSavingEvents,
  savedEvents,
  setSavedEvents,
}: SavedProps) {
  const [modalVisible, setModalVisible] = useState(false);
  const [currentCardModal, setCurrentCardModal] =
    useState<CardData>(sampleCard);

  function handleDragEnd(event: any) {
    console.log(event);
    const { active, over, delta } = event;

    // If the item is dropped over a container, set it as the parent
    // otherwise reset the parent to `null`
    // setParent(over ? over.id : null);
    console.log(active);
    console.log(over);
    // If delta.x and delta.y, then do not consider it a drag event
    if (delta.x === 0 && delta.y === 0) {
      setCurrentCardModal(getSampleEvents()[active.id]);
      setModalVisible(true);
    }
  }

  return (
    <>
      <div className="flex flex-col items-center my-8">
        <h1 className="text-blue-dark font-bold text-4xl"> Saved UCI Events </h1>
      </div>

      <DndContext onDragEnd={handleDragEnd}>
        <div className="flex flex-col items-center my-8">
          <div className="flex flex-col items-center bg-blue-light w-11/12 rounded-2xl p-2.5 gap-4">
            <h1 className="text-white font-bold text-2xl">Saved Events</h1>
            <div className="flex justify-center gap-3 flex-wrap min-h-usah">
              <CardList cards={savedEvents}></CardList>
            </div>
          </div>
        </div>
      </DndContext>

      <InfoModal
        cardData={currentCardModal}
        visible={modalVisible}
        setVisible={setModalVisible}
      ></InfoModal>
    </>
  );
}
