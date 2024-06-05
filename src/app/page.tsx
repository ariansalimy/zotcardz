"use client";
import Image from "next/image";
import Navbar from "./component/navbar";
import Event_card from "./component/Event_card";
import Save_button from "./component/Save_button";
import { DndContext } from "@dnd-kit/core";
import { useEffect, useState } from "react";
import { Draggable } from "./component/draggable";
import { Droppable } from "./component/droppable";
import { ExCard } from "./component/excard";

import { CardData, months, min_to_hrmin, hrmin_to_min } from "./data/card-data";
import getSampleEvents from "./data/sampleEvents";
import Find from "./find";

export default function Home() {

  const [unsavedEvents, setUnsavedEvents] = useState<Record<string, CardData>>(
    {}
  );
  const [savingEvents, setSavingEvents] = useState<Record<string, CardData>>(
    {}
  );
  const [savedEvents, setSavedEvents] = useState<Record<string, CardData>>({});

  const [currentPage, setCurrentPage] = useState("find");

  useEffect(() => {
    setUnsavedEvents(getSampleEvents());
    console.log("in use effect");
  }, []);
  console.log(unsavedEvents);

  return (
    <>
      <div className=" w-full flex flex-col items-center  ">
        <Navbar currentPage={currentPage} setCurrentPage={setCurrentPage}></Navbar>
      </div>
      <main className=" min-h-screen ">
        <Find unsavedEvents={unsavedEvents} setUnsavedEvents={setUnsavedEvents} savingEvents={savingEvents} setSavingEvents={setSavingEvents} savedEvents={savedEvents} setSavedEvents={setSavedEvents} />
      </main>
    </>
  );
}
