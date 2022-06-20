import React from "react";

import NumberColumn from "../NumberColumn/NumberColumn";
import styles from "./AnimateNumber.module.scss";

interface AnimateNumberProps {
  number: number;
}

function AnimateNumber({ number }: AnimateNumberProps) {
  const formattedNumber = number.toString().split("").reverse();

  return (
    <div className={styles.animateNumberContainer}>
      {formattedNumber.map((number, i) =>
        number === "-" ? "-" : <NumberColumn key={i} digit={+number} />
      )}
    </div>
  );
}

export default AnimateNumber;
