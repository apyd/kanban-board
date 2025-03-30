import { useState, useContext, useRef, FormEvent, ChangeEvent } from "react";
import BoardsContentContext from "@context/BoardsContent/BoardsContent";
import BoardModalContext from "@context/BoardModal/BoardModal";
import Modal from "@components/ui/Modal/Modal";
import Input from "@components/ui/Input/Input";
import Button from "@components/ui/Button/Button/Button";
import styles from "./ModalBoard.module.scss";
import ModalBoardsList from "./ModalBoardsList/ModalBoardsList";
import { arrayMove } from "@dnd-kit/sortable";
import { v4 as uuidv4 } from "uuid";
import { DragEndEvent } from "@dnd-kit/core/dist/types/events";
import { Column } from "@shared/types";

const ModalBoard = () => {
  const [boardColumns, setBoardColumns] = useState<Column[]>([
    { id: uuidv4(), value: "" },
  ]);
  const [isInvalidColumns, setIsInvalidColumns] = useState<boolean | null>(
    null
  );
  const [isInvalidTitle, setIsInvalidTitle] = useState<boolean | null>(null);
  const { handleAddBoard: addBoard, boardsContent: boards } =
    useContext(BoardsContentContext);
  const { closeBoardModal, isBoardModalOpen } = useContext(BoardModalContext);

  const boardTitleRef = useRef<HTMLInputElement>(
    null
  ) as React.RefObject<HTMLInputElement>;

  const handleAddNewColumn = () => {
    setBoardColumns((prevColumns) => [
      ...prevColumns,
      { id: uuidv4(), value: "" },
    ]);
  };

  const handleChangeColumnValue = (
    event: ChangeEvent<HTMLInputElement>,
    index: number
  ) => {
    const inputValue = event.target.value;
    setBoardColumns((prevColumns) => {
      const newColumns = [...prevColumns];
      newColumns[index].value = inputValue;
      return newColumns;
    });
  };

  const handleDeleteColumn = (e: Event, index: string) => {
    e.preventDefault();
    setBoardColumns((prevColumns) => {
      const columns = [...prevColumns];
      columns.splice(Number(index), 1);
      return columns;
    });
  };

  const handleNewBoard = (event: FormEvent) => {
    event.preventDefault();

    const isTitleInvalid = boardTitleRef.current.value === "";
    if (isTitleInvalid) {
      boardTitleRef.current.focus();
      return;
    }

    const isTitleRepeated = boards.some(
      (board) => board.boardTitle === boardTitleRef.current.value
    );
    if (isTitleRepeated) {
      setIsInvalidTitle(true);
      return;
    }

    const isColumnInvalid = boardColumns.some((column) => column.value === "");
    if (isColumnInvalid) {
      setIsInvalidColumns(true);
      return;
    }

    addBoard(boardTitleRef.current.value, boardColumns);
    boardTitleRef.current.value = "";
    setBoardColumns([{ id: uuidv4(), value: "" }]);
    setIsInvalidColumns(false);
    setIsInvalidTitle(false);
    closeBoardModal();
  };

  const handleReorderColumns = (event: DragEndEvent) => {
    const { active, over } = event;

    if (active.id !== over?.id) {
      setBoardColumns((prevColumns) => {
        const oldItem = prevColumns.findIndex((item) => item.id === active.id);
        const newItem = prevColumns.findIndex((item) => item.id === over?.id);
        return arrayMove(prevColumns, oldItem, newItem);
      });
    }
  };

  const handleCloseModal = () => {
    closeBoardModal();
    boardTitleRef.current.value = "";
    setBoardColumns([{ id: uuidv4(), value: "" }]);
    setIsInvalidColumns(false);
    setIsInvalidTitle(false);
  };

  return (
    <Modal open={isBoardModalOpen} onClose={handleCloseModal}>
      <div className={styles["board-modal"]}>
        <div className={styles["board-modal-header"]}>
          <h2 className={styles["board-modal-title"]}>Add new board</h2>
        </div>
        <div className={styles["board-modal-body"]}>
          <Input
            label="Board Name"
            type="text"
            id="board-name"
            minValue={3}
            placeholder="e.g. Web Design"
            required
            ref={boardTitleRef}
          />
          {isInvalidTitle && (
            <div className={styles["input-error"]}>
              <p className={styles["input-error-message"]}>
                This board name already exists. Please, choose another one
              </p>
            </div>
          )}
          <ModalBoardsList
            columns={boardColumns}
            handleNewBoard={(event: FormEvent) => handleNewBoard(event)}
            handleChangeInput={handleChangeColumnValue}
            handleDeleteColumn={handleDeleteColumn}
            handleReorderColumns={handleReorderColumns}
          />
        </div>
        {isInvalidColumns && (
          <div className={styles["input-error"]}>
            <span className={styles["input-error-message"]}>
              Please, make sure no fields are empty
            </span>
          </div>
        )}
        <div className={styles["buttons-wrapper"]}>
          <Button
            type="button"
            variant="primary"
            label="+ Add New Column"
            withStaticStyles
            onClick={handleAddNewColumn}
            buttonCentered
          />
          <Button
            type="submit"
            form="board-columns-form"
            variant="primary"
            label="Create New Board"
            withStaticStyles
            buttonCentered
          />
        </div>
      </div>
    </Modal>
  );
};
export default ModalBoard;
