import React, { useEffect, useRef } from 'react';

import { getRandomNumber } from '../../../helper/randomNumber';
import styles from './Dice.module.scss';

function Dice({ isLoading = false }) {
  const diceRef = useRef();

  useEffect(() => {
    if (isLoading) {
      const xRand = getRandomNumber(1, 5);
      const yRand = getRandomNumber(1, 5);

      diceRef.current.style.transform =
        "rotateX(" + xRand + "deg) rotateY(" + yRand + "deg)";
    }
  }, [isLoading]);

  return (
    <div className={styles.cube} ref={diceRef}>
      <div className={styles.cube__one}>
        <span className={[styles.dot, styles.dot1].join(" ")}></span>
      </div>
      <div className={styles.cube__two}>
        <span className={[styles.dot, styles.dot1].join(" ")}></span>
        <span className={[styles.dot, styles.dot2].join(" ")}></span>
      </div>
      <div className={styles.cube__three}>
        <span className={[styles.dot, styles.dot1].join(" ")}></span>
        <span className={[styles.dot, styles.dot2].join(" ")}></span>
        <span className={[styles.dot, styles.dot3].join(" ")}></span>
      </div>
      <div className={styles.cube__four}>
        <span className={[styles.dot, styles.dot1].join(" ")}></span>
        <span className={[styles.dot, styles.dot2].join(" ")}></span>
        <span className={[styles.dot, styles.dot3].join(" ")}></span>
        <span className={[styles.dot, styles.dot4].join(" ")}></span>
      </div>
      <div className={styles.cube__five}>
        <span className={[styles.dot, styles.dot1].join(" ")}></span>
        <span className={[styles.dot, styles.dot2].join(" ")}></span>
        <span className={[styles.dot, styles.dot3].join(" ")}></span>
        <span className={[styles.dot, styles.dot4].join(" ")}></span>
        <span className={[styles.dot, styles.dot5].join(" ")}></span>
      </div>
      <div className={styles.cube__six}>
        <span className={[styles.dot, styles.dot1].join(" ")}></span>
        <span className={[styles.dot, styles.dot2].join(" ")}></span>
        <span className={[styles.dot, styles.dot3].join(" ")}></span>
        <span className={[styles.dot, styles.dot4].join(" ")}></span>
        <span className={[styles.dot, styles.dot5].join(" ")}></span>
        <span className={[styles.dot, styles.dot6].join(" ")}></span>
      </div>
    </div>
  );
}

export default Dice;
