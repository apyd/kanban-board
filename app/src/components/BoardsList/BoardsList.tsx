import { useState } from "react";
import { BoardItem } from "./BoardsList.types";
import "@components/BoardsList/BoardsList.scss";
import BoardIcon from "@assets/icons/board.svg?react";
import PlusIcon from "@assets/icons/plus.svg?react";
import Button from "@components/ui/Button/Button";

const BoardsList = () => {
  const [boards, setBoards] = useState<BoardItem[]>([]);
  const [activeElementId, setActiveElementId] = useState<number>();

  const handleAddBoard = () => {
    setBoards((prevBoard) => {
      return [
        ...prevBoard,
        { title: "Marketing Plan", id: prevBoard.length + 1 },
      ];
    });
  };

  const handleActiveElement = (id: number) => {
    const activeElement = boards.find((board) => board.id === id);
    setActiveElementId(activeElement?.id);
  };

  return (
    <section className="boards">
      <header className="boards-header">
        <h2 className="boards-heading">ALL BOARDS ({boards.length})</h2>
      </header>
      {boards.length > 0 && (
        <ul className="boards-list">
          {boards.map((board) => {
            return (
              <li key={board.id} className="boards-list-item">
                <Button
                  variant="primary"
                  rounded="right-rounded"
                  label={board.title}
                  current={activeElementId === board.id}
                  Icon={<BoardIcon className="board-icon" />}
                  onClick={() => handleActiveElement(board.id)}
                  as="a"
                  href="#"
                ></Button>
              </li>
            );
          })}
        </ul>
      )}
      <Button
        variant="primary"
        rounded="right-rounded"
        label="Create New Board"
        withStaticStyles
        Icon={<PlusIcon className="plus-icon" />}
        onClick={handleAddBoard}
      ></Button>
    </section>
  );
};

export default BoardsList;
