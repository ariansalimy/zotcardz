"use client";
import Image from "next/image";
import Navbar from "./component/navbar";
import Event_card from "./component/Event_card";
import Button from "./component/Button";
import { DndContext } from "@dnd-kit/core";
import { useEffect, useState } from "react";
import { Draggable } from "./component/draggable";
import { Droppable } from "./component/droppable";
import { ExCard } from "./component/excard";

import { CardData, months, min_to_hrmin, hrmin_to_min } from "./data/card-data";
import getSampleEvents from "./data/sampleEvents";
import Find from "./find";
import Saved from "./saved";

export default function Home() {
  const [unsavedEvents, setUnsavedEvents] = useState<Record<string, CardData>>(
    {}
  );
  const [savingEvents, setSavingEvents] = useState<Record<string, CardData>>(
    {}
  );
  const [savedEvents, setSavedEvents] = useState<Record<string, CardData>>({});

  const [prevSavingEvents, setPrevSavingEvents] = useState<Record<string, CardData>>(
    {}
  );
  const [prevSavedEvents, setPrevSavedEvents] = useState<Record<string, CardData>>({});
  const [prevUnsavedEvents, setPrevUnsavedEvents] = useState<Record<string, CardData>>({});

  const [currentPage, setCurrentPage] = useState("find");

  useEffect(() => {
    setUnsavedEvents(getSampleEvents());
    console.log("in use effect");
  }, []);
  console.log(unsavedEvents);

  return (
    <>
      <div className=" w-full flex flex-col items-center  ">
        <Navbar
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
        ></Navbar>
      </div>
      <main className=" min-h-screen ">
        {currentPage === "find" && (
          <Find
            unsavedEvents={unsavedEvents}
            setUnsavedEvents={setUnsavedEvents}
            savingEvents={savingEvents}
            setSavingEvents={setSavingEvents}
            savedEvents={savedEvents}
            setSavedEvents={setSavedEvents}
            prevSavingEvents={prevSavingEvents}
            setPrevSavingEvents={setPrevSavingEvents}
            prevSavedEvents={prevSavedEvents}
            setPrevSavedEvents={setPrevSavedEvents}
            prevUnsavedEvents={prevUnsavedEvents}
            setPrevUnsavedEvents={setPrevUnsavedEvents}
          />
        )}

        {currentPage === "saved" && (
          <Saved
            unsavedEvents={unsavedEvents}
            setUnsavedEvents={setUnsavedEvents}
            savingEvents={savingEvents}
            setSavingEvents={setSavingEvents}
            savedEvents={savedEvents}
            setSavedEvents={setSavedEvents}
            prevSavingEvents={prevSavingEvents}
            setPrevSavingEvents={setPrevSavingEvents}
            prevSavedEvents={prevSavedEvents}
            setPrevSavedEvents={setPrevSavedEvents}
            prevUnsavedEvents={prevUnsavedEvents}
            setPrevUnsavedEvents={setPrevUnsavedEvents}
          />
        )}
      </main>
    </>
  );
}
