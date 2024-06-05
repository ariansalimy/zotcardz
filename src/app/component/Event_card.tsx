import React from "react";
import Link from "next/link";
import { CardData } from "../data/card-data";

type EventCardProps = {
  cardData: CardData
}

export default function Event_card({cardData}: EventCardProps) {

  const styling = {
    display: "flex",
    justifyContent: "center",
    alignItems: 'center',
    backgroundColor: "#F78D2D",
    color: "black",
    width: "80px",
    height: "125px",
    border: "6px solid",
    borderColor: "white",
    borderRadius: "8px",
    boxShadow: "0 4px 8px 2px rgba(0, 0, 0, 0.2)",

  }
  return (
    <>
      <div style={styling}>
        
          <p>{cardData?.name}</p>
     
      </div>
    </>
  );
};

