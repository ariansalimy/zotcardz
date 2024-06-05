"use client";

import { DndContext } from "@dnd-kit/core";
import { Draggable } from "./component/draggable";
import Event_card from "./component/Event_card";
import { Dispatch, SetStateAction, useState } from "react";
import { Droppable } from "./component/droppable";
import Save_button from "./component/Save_button";
import { CardData } from "./data/card-data";
import CardList from "./component/card-list";

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
  return (
    <div className="flex flex-col items-center my-8">
      <div className="flex flex-col items-center bg-blue-light w-11/12 rounded-2xl p-2.5 gap-4">
        <h1 className="text-white font-bold text-2xl">Saved Events</h1>
        <div className="flex justify-center gap-3">
          <CardList cards={savedEvents}></CardList>
        </div>
      </div>
    </div>
  );
}
