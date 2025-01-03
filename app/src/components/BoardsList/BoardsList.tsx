import { useState } from "react";
import "@components/BoardsList/BoardsList.scss";
import BoardIcon from "@assets/icons/board.svg?react";
import PlusIcon from "@assets/icons/plus.svg?react";

type TaskBoard = {
  title: string;
  id: number;
  todo?: string;
  doing?: string;
  done?: string;
};

const BoardsList = () => {
  const [boards, setBoards] = useState<TaskBoard[]>([]);
  const [activeElement, setActiveElement] = useState<TaskBoard[]>([]);

  const handleAddBoard = () => {
    setBoards((prevBoard) => {
      return [
        ...prevBoard,
        { title: "Marketing Plan", id: prevBoard.length + 1 },
      ];
    });
  };

  const handleActiveElement = (id: number) => {
    return setActiveElement(boards.filter((board) => board.id === id));
  };

  const [activeBoard] = activeElement;

  return (
    <section className="boards">
      <header className="boards-header">
        <h3 className="boards-heading">ALL BOARDS ({boards.length})</h3>
      </header>
      {boards.length > 0 && (
        <ul className="boards-list">
          {boards.map((board) => {
            return (
              <li
                className={`board ${
                  activeBoard?.id === board.id ? "active-board" : ""
                }`}
                key={board.id}
                onClick={() => handleActiveElement(board.id)}
              >
                <BoardIcon className="board-icon" />
                <div className="board-content">
                  <span className="board-title">{board.title}</span>
                </div>
              </li>
            );
          })}
        </ul>
      )}
      <button className="add-board-button" onClick={handleAddBoard}>
        <BoardIcon className="board-icon static-board-icon" />
        <div className="board-button-content">
          <PlusIcon className="plus-icon" />
          <span className="board-button-text">Create New Board</span>
        </div>
      </button>
    </section>
  );
};

export default BoardsList;
