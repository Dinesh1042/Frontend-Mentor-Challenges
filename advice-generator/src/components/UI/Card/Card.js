import React from 'react';

import styles from './Card.module.scss';

function Card({ children, className }) {
  const classes = `${styles.card} ${className || ""}`.trim();

  return <div className={classes}>{children}</div>;
}

export default Card;
