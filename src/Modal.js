import { useEffect, useRef } from "react";
import { createPortal } from "react-dom";

const modalRoot = document.getElementById("modal");

const Modal = ({ children }) => {
  const elRef = useRef(null);

  if (!elRef.current) {
    elRef.current = document.createElement("div");
  }

  useEffect(() => {
    modalRoot.appendChild(elRef.current); // append modal
    return () => modalRoot.removeChild(elRef.current); // remove modal once comp unmounted
  }, []); // only append modal on first render

  return createPortal(<div>{children}</div>, elRef.current)
};

export default Modal;
