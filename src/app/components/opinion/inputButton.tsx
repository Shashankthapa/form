import React from "react";
import styles from "./opinion.module.css";

const inputButton = () => {
  return (
    <div
      style={{
        display: "flex",
        margin: "1rem 0rem",
      }}
      className="flex-wrap"
    >
      <div className={styles.button}>0</div>
      <div className={styles.button}>1</div>
      <div className={styles.button}>3</div>
      <div className={styles.button}>4</div>
      <div className={styles.button}>5</div>
      <div className={styles.button}>6</div>
      <div className={styles.button}>7</div>
      <div className={styles.button}>8</div>
      <div className={styles.button}>9</div>
      <div className={styles.button}>10</div>
    </div>
  );
};

export default inputButton;
