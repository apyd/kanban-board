import { createContext, useState } from "react";
import type { BoardsContentContext, BoardContent } from "./BoardsContent.types";
import { Column } from "src/shared/types";
import { v4 as uuidv4 } from "uuid";

const BoardsContentContext = createContext<{
  boardsContent: BoardContent[]; // [{boardTitle: x, boardColumns: [{id: a, value: b, tasks: [{taskName: c, taskId: d, taskDescription: e, subtasks: [{subtaskName: f, subtaskId: g}]}]}], boardId: y}]
  handleAddBoard: (boardTitle: string, boardColumns: Column[]) => void;
  handleActiveBoard: (boardId: string) => void;
  activeBoardId: string | undefined;
  activeBoard: BoardContent;
}>({
  boardsContent: [],
  handleAddBoard: () => {},
  handleActiveBoard: () => {},
  activeBoardId: "",
  activeBoard: { boardTitle: "", boardColumns: [], boardId: "" },
});

export const BoardsContentProvider = ({ children }: BoardsContentContext) => {
  const [boardsContent, setBoardsContent] = useState<BoardContent[]>([]);
  const [activeBoardId, setActiveBoardId] = useState<string>();
  const [activeBoard, setActiveBoard] = useState<BoardContent>({
    boardTitle: "",
    boardColumns: [],
    boardId: "",
  });

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

  const handleActiveBoard = (boardId: string) => {
    const activeBoard = boardsContent.find(
      (board) => board.boardId === boardId
    );

    if (activeBoard) {
      setActiveBoard(activeBoard);
      setActiveBoardId(activeBoard?.boardId);
    }
    console.log(activeBoard);
  };

  const boardsContentCtx = {
    boardsContent,
    handleAddBoard,
    handleActiveBoard,
    activeBoardId,
    activeBoard,
  };

  return (
    <BoardsContentContext.Provider value={boardsContentCtx}>
      {children}
    </BoardsContentContext.Provider>
  );
};
export default BoardsContentContext;
