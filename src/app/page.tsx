import Image from "next/image";
import Navbar from "./component/navbar";
import { DndContext } from "@dnd-kit/core";
import { useState } from "react";

export default function Home() {
  const [isDropped, setIsDropped] = useState(false);
  return (
    <main className="flex min-h-screen flex-col items-center justify-between ">
      <div className=" w-full  justify-between ">
        <Navbar></Navbar>
      </div>

    </main>
  );
}
