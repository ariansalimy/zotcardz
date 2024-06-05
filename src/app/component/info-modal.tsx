"use client";

import clsx from "clsx";
import { CardData } from "../data/card-data";

type InfoModalProps = {
  cardData: CardData;
  visible: boolean;
  setVisible: React.Dispatch<React.SetStateAction<boolean>>;
};

export default function InfoModal({
  cardData,
  visible,
  setVisible,
}: InfoModalProps) {
  return (
    <div
      className={clsx({
        block: visible,
        hidden: !visible,
      })}
    >
      <div
        className="fixed top-0 left-0 w-screen h-screen bg-black/50"
        onClick={() => setVisible(false)}
      />
      <div className="fixed top-1/2 left-1/2 flex flex-col bg-white p-8">
        <div>
          <h2>{cardData.name}</h2>
        </div>
      </div>
    </div>
  );
}
