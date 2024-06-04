import React from "react";
import Link from "next/link";


export default function Save_button() {

  const styling = {
    backgroundColor: "#1B3D6D",
    color: "white",
    padding: '5px 10px',
    borderRadius: '7.5px',
    boxShadow: "0px 4px 5px rgba(0, 0, 0, 0.2)",
  }

  return (
    <>
      <div>
      <button style={styling}>Save Events</button>
      </div>
    </>
  );
};

