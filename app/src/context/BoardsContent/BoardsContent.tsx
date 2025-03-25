import { createContext, useState } from "react";
import type { BoardsContentContext, BoardContent } from "./BoardsContent.types";
import { Column } from "src/shared/types";
import { v4 as uuidv4 } from "uuid";

const BoardsContentContext = createContext<{
  boardsContent: BoardContent[];
  handleAddBoard: (boardTitle: string, boardColumns: Column[]) => void;
}>({
  boardsContent: [],
  handleAddBoard: () => {},
});

export const BoardsContentProvider = ({ children }: BoardsContentContext) => {
  const [boardsContent, setBoardsContent] = useState<BoardContent[]>([]);

  const handleAddBoard = (boardTitle: string, boardColumns: Column[]) => {
    setBoardsContent((prevBoardsContent) => {
      const boardIndex = prevBoardsContent.findIndex(
        (board) => board.boardTitle === boardTitle
      );

      if (boardIndex !== -1) {
        return prevBoardsContent;
      } else {
        return [
          ...prevBoardsContent,
          {
            boardTitle: boardTitle,
            boardColumns: boardColumns,
            boardId: uuidv4(),
          },
        ];
      }
    });
  };

  const boardsContentCtx = {
    boardsContent,
    handleAddBoard,
  };

  return (
    <BoardsContentContext.Provider value={boardsContentCtx}>
      {children}
    </BoardsContentContext.Provider>
  );
};
export default BoardsContentContext;
