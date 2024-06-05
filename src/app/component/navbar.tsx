"use client";
import React, { Dispatch, SetStateAction } from "react";
import Link from "next/link";


type NavbarProps = {
  currentPage: string,
  setCurrentPage: Dispatch<SetStateAction<string>>
}

export default function Navbar( {currentPage, setCurrentPage}: NavbarProps ) {
  return (
    <>
      <div className="w-full h-20 bg-[#1b3d6d] sticky top-0">

        <div className="container mx-auto px-4 h-full">

          <div className="flex justify-center items-center h-full">

            <ul className="hidden md:flex gap-x-20 text-white">
              <li>
                <button onClick={() => {
                  if (currentPage !== "find") {
                    setCurrentPage("find")
                  }
                }}>
                  <p>Find</p>
                </button>
              </li>
              <li>
                <button onClick={() => {
                  if (currentPage !== "saved") {
                    setCurrentPage("saved")
                  }
                }}>
                  <p>Saved</p>
                </button>
              </li>
              {/* <li>
                <button onClick={() => {
                  if (currentPage !== "create") {
                    setCurrentPage("create")
                  }
                }}>
                  <p>Create</p>
                </button>
              </li> */}
            </ul>
            
          </div>
        </div>
      </div>
    </>
  );
};

