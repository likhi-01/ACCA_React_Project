import { createContext, useContext, useState } from "react";
import CallBackModal from "../component/CallBackModal";

const ModalContext = createContext();

export function ModalProvider({ children }) {
  const [showModal, setShowModal] = useState(false);

  const openModal = () => setShowModal(true);
  const closeModal = () => setShowModal(false);

  return (
    <ModalContext.Provider value={{ openModal }}>
      {children}
      <CallBackModal show={showModal} onClose={closeModal} />
    </ModalContext.Provider>
  );
}

export function useModal() {
  return useContext(ModalContext);
}