import { useEffect, type FC } from "react";
import cl from "./Modal.module.css";
import CloseIcon from "@assets/svg/close.svg?react";
import { createPortal } from "react-dom";

interface Props {
  children: React.ReactNode;
  isOpen: boolean;
  closeModal: () => void;
}

export const Modal: FC<Props> = ({ children, closeModal, isOpen }) => {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [isOpen]);

  return createPortal(
    <section
      aria-hidden={!isOpen}
      className={cl.modal}
      onClick={closeModal}
      inert={!isOpen}
    >
      <div
        className={cl.content}
        onClick={(e) => {
          e.stopPropagation();
        }}
      >
        {children}
        <button className={cl.closeBtn} onClick={closeModal} disabled={!isOpen}>
          <CloseIcon />
        </button>
      </div>
    </section>,
    document.body,
  );
};
