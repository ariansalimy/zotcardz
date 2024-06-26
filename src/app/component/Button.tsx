import React from "react";
import Link from "next/link";

type ButtonProps = {
  handleClick: React.MouseEventHandler;
  text: string;
  style?: 1 | 2 | 3;
};

const colors = {
  1: {
    bgColor: "#1B3D6D",
    txtColor: "white",
  },
  2: {
    bgColor: "white",
    txtColor: "#1B3D6D",
  },
  3: {
    bgColor: "#F78D2D",
    txtColor: "white",
  },
};

export default function Button({ handleClick, text, style = 1 }: ButtonProps) {
  // const bgColor = style == 1 ? "#1B3D6D" : "white";
  // const txtColor = style == 1 ? "white" : "#1B3D6D";
  const styling = {
    backgroundColor: colors[style].bgColor,
    color: colors[style].txtColor,
    padding: "5px 10px",
    borderRadius: "7.5px",
    boxShadow: "0px 4px 5px rgba(0, 0, 0, 0.2)",
  };

  return (
    <>
      <div>
        <button style={styling} onClick={handleClick}>
          {text}
        </button>
      </div>
    </>
  );
}
