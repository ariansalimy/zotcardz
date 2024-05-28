import Image from "next/image";
import Navbar from "./component/navbar";
export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between ">
      <div className=" w-full   justify-between ">
        <Navbar></Navbar>
      </div>
    </main>
  );
}
