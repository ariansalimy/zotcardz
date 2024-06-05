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
    <div className="flex justify-center">
      <h1>In Saved</h1>
      <CardList cards={savedEvents}></CardList>
    </div>
  );
}
