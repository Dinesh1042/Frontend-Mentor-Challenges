import { ReactNode, useEffect } from "react";
import { createPortal } from "react-dom";

import classNames from "../../../helpers/classNames";
import Card from "../Card/Card";
import styles from "./Modal.module.scss";

interface ModalProps {
  className?: string;
  children: ReactNode | ReactNode[];
  onClose: () => void;
}

function Modal({ children, className, onClose }: ModalProps) {
  useEffect(() => {
    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = "auto";
    };
  }, []);

  const modalChildren = (
    <>
      <div className={classNames(styles.modal, className)}>
        <Card>{children}</Card>
      </div>
      <div onClick={onClose} className={styles.backdrop}></div>
    </>
  );

  return createPortal(
    modalChildren,
    document.getElementById("modalWrapper") as HTMLDivElement
  );
}

export default Modal;
