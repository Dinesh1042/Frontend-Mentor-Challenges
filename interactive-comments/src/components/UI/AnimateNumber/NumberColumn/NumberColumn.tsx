import React, { useEffect, useRef, useState } from "react";

import styles from "./NumberColumn.module.scss";

interface NumberColumnProps {
  digit: number;
}

function NumberColumn({ digit }: NumberColumnProps) {
  const [position, setPosition] = useState(0);
  const numberContainerRef = useRef<HTMLDivElement>(null);
  const numberColRef = useRef<HTMLDivElement>(null);

  const setColumnPosition = (number: number) => {
    if (numberContainerRef.current)
      setPosition(-(numberContainerRef.current.clientHeight * number));
  };

  useEffect(() => {
    setColumnPosition(digit);
  }, [digit]);

  return (
    <div className={styles.numberColumnContainer} ref={numberContainerRef}>
      <div
        className={styles.numberColumn}
        style={{ transform: `translateY(${position}px)` }}
        ref={numberColRef}
      >
        {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9].map((number, i) => (
          <div key={i} className={styles.numberColumnDigit}>
            <span>{number}</span>
          </div>
        ))}
      </div>
      <div className={styles.numberPlaceHolder}>0</div>
    </div>
  );
}

export default NumberColumn;
