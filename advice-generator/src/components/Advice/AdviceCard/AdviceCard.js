import React, { useEffect } from 'react';

import { Card, Dice } from '../../UI';
import styles from './AdviceCard.module.scss';

function AdviceCard({ advice, adviceId, isLoading = false, getAdvice, error }) {
  useEffect(() => {
    const handleKeyUp = ({ code }) => code === "Space" && getAdvice();

    document.addEventListener("keyup", handleKeyUp);
    return () => document.removeEventListener("keyup", handleKeyUp);
  }, [getAdvice]);

  return (
    <Card className={styles.adviceCard}>
      <div className={styles.adviceCard__header}>
        <p className={styles.adviceCard__Id}>
          ADVICE #{!error ? adviceId : "NOT FOUND"}
        </p>
      </div>

      <div className={styles.adviceCard__body}>
        <h1 className={styles.adviceCard__quote}>
          {!error ? <q>{advice}</q> : error.message}
        </h1>
      </div>

      <div
        className={[
          styles.adviceCard__divider,
          isLoading ? styles.loading : "",
        ].join(" ")}
      >
        <div className={styles.adviceCard__loader}></div>
        <div className={styles.divider__icon}></div>
      </div>

      <button className={styles.adviceCard__diceBtn} onClick={getAdvice}>
        <Dice isLoading={isLoading} />
      </button>
    </Card>
  );
}

export default AdviceCard;
