import { useContext } from "react";
import styles from "@components/BoardsList/BoardsList.module.scss";
import BoardIcon from "@assets/icons/board.svg?react";
import PlusIcon from "@assets/icons/plus.svg?react";
import Button from "@components/ui/Button/Button/Button";
import BoardModalContext from "@context/BoardModal/BoardModal";
import BoardsContentContext from "@context/BoardsContent/BoardsContent";

const BoardsList = () => {
  const {
    boardsContent: boards,
    activeBoardId,
    handleActiveBoard,
  } = useContext(BoardsContentContext);
  const { openBoardModal } = useContext(BoardModalContext);

  return (
    <section className={styles["boards"]}>
      <header className={styles["boards-header"]}>
        <h2 className={styles["boards-heading"]}>
          ALL BOARDS ({boards.length})
        </h2>
      </header>
      {boards.length > 0 && (
        <ul className={styles["boards-list"]}>
          {boards.map((board) => {
            return (
              <li key={board.boardId} className={styles["boards-list-item"]}>
                <Button
                  variant="text"
                  align="left"
                  rounded="right-rounded"
                  active={activeBoardId === board.boardId}
                  onClick={() => handleActiveBoard(board.boardId)}
                  href="#"
                >
                  <BoardIcon className={styles["board-icon"]} />
                  <span className={styles["board-title"]}>
                    {board.boardTitle}
                  </span>
                </Button>
              </li>
            );
          })}
        </ul>
      )}
      <Button
        variant="contained"
        align="left"
        rounded="right-rounded"
        onClick={openBoardModal}
      >
        {<PlusIcon className={styles["plus-icon"]} />}
        <span className={styles["button-label"]}> Create New Board</span>
      </Button>
    </section>
  );
};

export default BoardsList;
