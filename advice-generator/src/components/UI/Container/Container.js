import React from 'react';

import styles from './Container.module.scss';

function Container({ children, className }) {
  const classes = `${styles.container} ${className || ""}`.trim();

  return <div className={classes}>{children}</div>;
}

export default Container;
