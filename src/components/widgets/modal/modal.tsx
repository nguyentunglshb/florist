import { useOnClickOutside } from "@/hooks";
import { cloneElement, useRef, useState } from "react";

type ModalProps = {
  children: React.ReactNode;
  trigger: React.ReactElement;
  isOpen: boolean;
  toggleOpen: (isOpen: boolean) => void;
  className?: string;
};

export const Modal = (props: ModalProps) => {
  const { children, trigger, className = "", isOpen, toggleOpen } = props;

  const modalRef = useRef(null);

  const triggerBtn = cloneElement(trigger, {
    onClick() {
      toggleOpen(true);
    },
  });

  const closeModal = () => toggleOpen(false);

  useOnClickOutside(modalRef, closeModal);

  return (
    <>
      {triggerBtn}
      {isOpen ? (
        <div className="fixed inset-0 z-[99999] bg-[rgba(49,50,50,0.5)]">
          <div className={className} ref={modalRef}>
            {children}
          </div>
        </div>
      ) : null}
    </>
  );
};
