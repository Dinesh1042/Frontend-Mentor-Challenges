import React from "react";

import classNames from "../../../helpers/classNames";
import styles from "./Card.module.scss";

interface CardProps {
  className?: string;
  children: React.ReactNode;
}

function Card({ className, children }: CardProps) {
  return <div className={classNames(styles.card, className)}>{children}</div>;
}

export default Card;
