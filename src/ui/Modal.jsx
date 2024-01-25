import { cloneElement, createContext, useContext, useState } from "react";
import { createPortal } from "react-dom";
import { useOutsideClick } from "../hooks/useOutsideClick";
import styled from "styled-components";
import { HiXMark } from "react-icons/hi2";

const StyledModal = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  box-shadow: 0 2.4rem 3.2rem rgba(0, 0, 0, 0.12);
  transition: all 0.5s;
`;

const Overlay = styled.div`
  position: relative;
  position: fixed;
  top: 0;
  left: 0;
  width: 100dvw;
  height: 100vh;
  background-color: var(--backdrop-color);
  backdrop-filter: blur(10px);
  z-index: 1000;
  transition: all 0.5s;
`;

const Button = styled.button`
  background: none;
  border: none;
  transition: all 0.2s;
  position: absolute;
  top: 0.8rem;
  right: 0.8rem;
  z-index: 9999;
  line-height: 0;
  border-radius: 5px;
  color: red;
  background-color: var(--primary-color-light);
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;

  &:hover {
    background-color: gray;
    box-shadow: none;
  }

  & svg {
    width: 4rem;
    height: 4rem;
    /* Sometimes we need both */
    /* fill: var(--color-grey-500);
    stroke: var(--color-grey-500); */
    color: var(--color-grey-500);
  }
`;

const ModalContext = createContext();

function Modal({ children }) {
  const [openName, setOpenName] = useState(null);

  const close = () => setOpenName(null);
  const open = (opensWindowName) => setOpenName(opensWindowName);

  return (
    <ModalContext.Provider value={{ openName, close, open }}>
      {children}
    </ModalContext.Provider>
  );
}

function Open({ children, opens: opensWindowName }) {
  const { open } = useContext(ModalContext);

  return cloneElement(children, { onClick: () => open(opensWindowName) });
}

function Window({ children, name }) {
  const { openName, close } = useContext(ModalContext);

  const ref = useOutsideClick(close);

  if (name !== openName) return null;

  return createPortal(
    <Overlay>
      <StyledModal ref={ref}>
        <Button onClick={close}>
          <HiXMark />
        </Button>

        <div>{cloneElement(children, { onCloseModal: close })}</div>
      </StyledModal>
    </Overlay>,
    document.body
  );
}

Modal.Open = Open;
Modal.Window = Window;

export default Modal;
