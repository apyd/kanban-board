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
  // const [activeElementId, setActiveElementId] = useState<string>();

  // const handleActiveElement = (boardId: string) => {
  //   const activeElement = boards.find((board) => board.boardId === boardId);
  //   setActiveElementId(activeElement?.boardId);
  // };

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
                  variant="primary"
                  rounded="right-rounded"
                  label={board.boardTitle}
                  current={activeBoardId === board.boardId}
                  Icon={<BoardIcon className={styles["board-icon"]} />}
                  onClick={() => handleActiveBoard(board.boardId)}
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
        Icon={<PlusIcon className={styles["plus-icon"]} />}
        onClick={openBoardModal}
      ></Button>
    </section>
  );
};

export default BoardsList;
