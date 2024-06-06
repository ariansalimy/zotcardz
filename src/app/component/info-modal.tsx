"use client";

import clsx from "clsx";
import {
  CardData,
  getMonthString,
  hrmin_to_str,
  min_to_hrmin,
  months,
} from "../data/card-data";

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
  const start = min_to_hrmin(cardData.timeStart);
  const end = min_to_hrmin(cardData.timeEnd);

  return (
    <div
      className={clsx({
        block: visible,
        hidden: !visible,
      })}
    >
      <div
        className=" fixed top-0 left-0 w-screen h-screen bg-black/50 "
        onClick={() => setVisible(false)}
      />
      <div className="fixed top-[32vh] left-[35vw] flex-col bg-white p-8 align-middle justify-center rounded-2xl">
        <div className="flex flex-col bg-white p-8 align-middle justify-center text-center">
          <div className="m-3">
            <h2 className=" text-2xl text-blue-dark font-bold">
              {cardData.name}
            </h2>
            <p>Hosted by {cardData.organization}</p>
          </div>

          <p><span className=" font-bold ">Category</span> {cardData.category}</p>
          <p>
            <span className=" font-bold ">Date</span>{" "}
            {getMonthString(cardData.date.month)} {cardData.date.day},{" "}
            {cardData.date.year}
          </p>
          <p>
            <span className=" font-bold ">Time</span>{" "}
            {hrmin_to_str(start.hours, start.minutes)} -{" "}
            {hrmin_to_str(end.hours, end.minutes)}{" "}
          </p>
          <p>
            <span className=" font-bold ">Description</span>{" "}
            {cardData.description}
          </p>
          <p>
            <span className=" font-bold ">Location</span> {cardData.location}
          </p>
          <p>
            <span className=" font-bold ">Links</span>
            <ul>
              {cardData.links.map((link) => (
                <li className=" text-blue-dark underline">
                  <a href={link.link} target="_blank">
                    {" "}
                    {link.kind}{" "}
                  </a>
                </li>
              ))}
            </ul>
          </p>
        </div>
      </div>
    </div>
  );
}
