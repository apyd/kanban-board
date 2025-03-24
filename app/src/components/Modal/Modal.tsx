import { createPortal } from "react-dom";
import { useRef, useEffect } from "react";
import clsx from "clsx";
import { ModalProps } from "./Modal.types";
import styles from "./Modal.module.scss";

const Modal = ({ children, open, onClose, ...rest }: ModalProps) => {
  const dialogRef = useRef<HTMLDialogElement>(null);

  const clickHandler = (e: React.MouseEvent<HTMLDialogElement, MouseEvent>) => {
    if (e.target === e.currentTarget) {
      dialogRef.current?.close();
    }
  };

  useEffect(() => {
    const modal = dialogRef.current;

    if (open) {
      modal?.showModal();
    }

    return () => modal?.close();
  }, [open]);

  const renderModal = () => (
    <dialog
      ref={dialogRef}
      onClick={clickHandler}
      className={clsx(styles["modal"], { [styles["modal--open"]]: open })}
      onClose={onClose}
      {...rest}
    >
      <div className={styles["modal-inner"]}>{children}</div>
    </dialog>
  );
  return createPortal(renderModal(), document.getElementById("modal")!);
};

export default Modal;
