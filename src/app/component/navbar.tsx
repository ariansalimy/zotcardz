
import React from "react";
import Link from "next/link";


export default function Navbar() {
  return (
    <>
      <div className="w-full h-20 bg-[#1b3d6d] sticky top-0">

        <div className="container mx-auto px-4 h-full">

          <div className="flex justify-center items-center h-full">
          
            <ul className="hidden md:flex gap-x-6 text-white">
              <li>
                <Link href="/about">
                  <p>Find</p>
                </Link>
              </li>
              <li>
                <Link href="/services">
                  <p>Saved</p>
                </Link>
              </li>
              <li>
                <Link href="/contacts">
                  <p>Create</p>
                </Link>
              </li>
            </ul>
            
          </div>
        </div>
      </div>
    </>
  );
};

