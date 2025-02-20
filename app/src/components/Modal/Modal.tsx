import { createPortal } from "react-dom";
import { useRef, useEffect, useContext } from "react";
import clsx from "clsx";
import { ModalProps } from "./Modal.types";
import ModalMenuContext from "@context/ModalMenu/ModalMenu";
import "./Modal.scss";

const Modal = ({ children, open, onClose, ...rest }: ModalProps) => {
  const modalMenuCtx = useContext(ModalMenuContext);

  const dialogRef = useRef<HTMLDialogElement>(null);

  const clickHandler = (e: any) => {
    if (e.target === e.currentTarget) {
      modalMenuCtx.closeModalMenu();
      dialogRef.current?.close();
    }
  };

  const renderModal = () => (
    <dialog
      ref={dialogRef}
      onClick={clickHandler}
      className={clsx("modal", { "modal--open": open })}
      onClose={onClose}
      {...rest}
    >
      <div className="modal-inner">{children}</div>
    </dialog>
  );

  useEffect(() => {
    const modal = dialogRef.current;

    if (open) {
      modal?.showModal();
    }

    return () => modal?.close();
  }, [open]);

  return createPortal(renderModal(), document.getElementById("modal")!);
};

export default Modal;
