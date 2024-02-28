import React from "react";
import InputButton from "./inputButton";

const noOfRating = 10;

const opinion = () => {
  return (
    <div
      className="flex flex-col w-[80%] min-h-full justify-center "
      style={{ scrollSnapAlign: "start" }}
    >
      <div className="text-2xl text-black">
        <h1>Please give your opinion on our feature.</h1>
      </div>
      <InputButton />
    </div>
  );
};

export default opinion;
