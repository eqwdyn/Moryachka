import { useEffect, type FC } from "react";
import cl from "./Modal.module.css";
import { createPortal } from "react-dom";
import Image from "next/image";

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

  return (
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
          <Image src="/svg/close.svg" alt="" width={16} height={16} />
        </button>
      </div>
    </section>
  );
};
