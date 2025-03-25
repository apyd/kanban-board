import { createContext, useState } from "react";
import { BoardModalContextType } from "@context/BoardModal/BoardModal.types";

const BoardModalContext = createContext<{
  isBoardModalOpen: boolean;
  openBoardModal: () => void;
  closeBoardModal: () => void;
}>({
  isBoardModalOpen: false,
  openBoardModal: () => {},
  closeBoardModal: () => {},
});

export const BoardModalProvider = ({ children }: BoardModalContextType) => {
  const [isBoardModalOpen, setIsBoardModalOpen] = useState<boolean>(false);

  function openBoardModal() {
    setIsBoardModalOpen(true);
  }

  function closeBoardModal() {
    setIsBoardModalOpen(false);
  }

  const boardModalCtx = {
    isBoardModalOpen,
    openBoardModal,
    closeBoardModal,
  };

  return (
    <BoardModalContext.Provider value={boardModalCtx}>
      {children}
    </BoardModalContext.Provider>
  );
};

export default BoardModalContext;
