import { createContext, useState } from "react";
import type { ModalMenuContext } from "@context/ModalMenu/ModalMenu.types";

const ModalMenuContext = createContext<{
  isModalMenuOpen: boolean;
  openModalMenu: () => void;
  closeModalMenu: () => void;
}>({
  isModalMenuOpen: false,
  openModalMenu: () => {},
  closeModalMenu: () => {},
});

export const ModalMenuProvider = ({ children }: ModalMenuContext) => {
  const [isModalMenuOpen, setIsModalMenuOpen] = useState<boolean>(false);

  function openModalMenu() {
    setIsModalMenuOpen(true);
  }

  function closeModalMenu() {
    setIsModalMenuOpen(false);
  }

  const modalMenuCtx = {
    isModalMenuOpen,
    openModalMenu,
    closeModalMenu,
  };

  return (
    <ModalMenuContext.Provider value={modalMenuCtx}>
      {children}
    </ModalMenuContext.Provider>
  );
};

export default ModalMenuContext;
