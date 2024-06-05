"use client";

import { CardData } from "../data/card-data";
import { Draggable } from "./draggable";
import Event_card from "./Event_card";

type CardListProps = {
  cards: Record<string, CardData>;
};

const item = {
    padding: "3px",
  };

export default function CardList({ cards }: CardListProps) {
  return (
  <>
    {Object.keys(cards).map((id) => (
      <Draggable id={id}>
        <div style={item} key={id}>
          <Event_card></Event_card>
        </div>
      </Draggable>
    ))}
  </>);
}