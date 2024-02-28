import React from "react";
import styles from "./rating.module.css";
import { IoStarSharp } from "react-icons/io5";

const rating = () => {
  return (
    <div
      className="flex flex-col w-[80%] min-h-full justify-center "
      style={{ scrollSnapAlign: "start" }}
    >
      <div className="text-2xl text-black">
        <h1>Please give your opinion on our feature.</h1>
      </div>
      <div className="text-5xl flex my-3">
        <IoStarSharp className={styles.star} />
        <IoStarSharp className={styles.star} />
        <IoStarSharp className={styles.star} />
        <IoStarSharp className={styles.star} />
        <IoStarSharp className={styles.star} />
      </div>
    </div>
  );
};

export default rating;
