import React from "react";
import Link from "next/link";

type SaveButtonProps = {
  handleClick: React.MouseEventHandler
}

export default function Save_button({handleClick}: SaveButtonProps) {
  const styling = {
    backgroundColor: "#1B3D6D",
    color: "white",
    padding: "5px 10px",
    borderRadius: "7.5px",
    boxShadow: "0px 4px 5px rgba(0, 0, 0, 0.2)",
  };

  return (
    <>
      <div>
        <button style={styling} onClick={handleClick}>Save Events</button>
      </div>
    </>
  );
}
