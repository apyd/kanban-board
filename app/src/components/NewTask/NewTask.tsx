import { useState, useContext, useRef, ChangeEvent } from "react";
import Modal from "@components/ui/Modal/Modal";
import Input from "@components/ui/Input/Input";
import styles from "./NewTask.module.scss";
import Button from "@components/ui/Button/Button/Button";
import Cross from "@assets/icons/cross.svg?react";
import TaskModalContext from "@context/TaskModal/TaskModal";
import BoardsContentContext from "@context/BoardsContent/BoardsContent";
import { Subtasks } from "./NewTask.types";
import { v4 as uuidv4 } from "uuid";
import { DndContext, closestCenter } from "@dnd-kit/core";
import {
  SortableContext,
  verticalListSortingStrategy,
} from "@dnd-kit/sortable";
import { restrictToParentElement } from "@dnd-kit/modifiers";
import SortableListItem from "@components/SortableListItem/SortableListItem";
import { DragEndEvent } from "@dnd-kit/core/dist/types/events";
import { arrayMove } from "@dnd-kit/sortable";

const NewTask = () => {
  const { isTaskModalOpen, closeTaskModal } = useContext(TaskModalContext);
  const { activeBoard } = useContext(BoardsContentContext);
  const [subtasks, setSubtasks] = useState<Subtasks[]>([
    { subtaskTitle: "", subtaskId: "" },
  ]);
  const [selectValue, setSelectValue] = useState<string>("");

  const taskNameRef = useRef<HTMLInputElement>(
    null
  ) as React.RefObject<HTMLInputElement>;
  const taskDescriptionRef = useRef<HTMLInputElement>(
    null
  ) as React.RefObject<HTMLInputElement>;

  const handleChangeSubtasksValue = (
    event: ChangeEvent<HTMLInputElement>,
    index: number
  ) => {
    const inputValue = event.target.value;
    setSubtasks((prevValue) => {
      const newSubtasks = [...prevValue];
      newSubtasks[index].subtaskTitle = inputValue;
      return newSubtasks;
    });
  };

  const handleAddSubtask = () => {
    setSubtasks((prevTasks) => [
      ...prevTasks,
      { subtaskTitle: "", subtaskId: uuidv4() },
    ]);
  };

  const handleDeleteSubtask = (event: MouseEvent, index: number) => {
    event.preventDefault();
    setSubtasks((prevSubtasks) => {
      const subtasksCopy = [...prevSubtasks];
      subtasksCopy.splice(index, 1);
      return subtasksCopy;
    });
  };

  const handleReorderSubtasksList = (event: DragEndEvent) => {
    const { active, over } = event;
    if (active.id !== over?.id) {
      setSubtasks((prevColumns) => {
        const oldItem = prevColumns.findIndex(
          (item) => item.subtaskId === active.id
        );
        const newItem = prevColumns.findIndex(
          (item) => item.subtaskId === over?.id
        );
        return arrayMove(prevColumns, oldItem, newItem);
      });
    }
  };

  return (
    <Modal open={isTaskModalOpen} onClose={closeTaskModal}>
      {activeBoard.boardTitle !== "" && (
        <>
          <h2 className={styles["heading"]}>{activeBoard.boardTitle}</h2>
          <form>
            <Input
              type="text"
              id="task-name"
              label="Task Name"
              ref={taskNameRef}
              required
            />
            <Input
              type="text"
              id="task-description"
              label="Description"
              ref={taskDescriptionRef}
              required
            />
            <label className={styles["label"]}>Subtasks</label>
            <DndContext
              onDragEnd={handleReorderSubtasksList}
              collisionDetection={closestCenter}
              modifiers={[restrictToParentElement]}
            >
              <ul className={styles["tasks-list"]}>
                <SortableContext
                  items={subtasks.map((subtask) => subtask.subtaskId)}
                  strategy={verticalListSortingStrategy}
                >
                  {subtasks.map((subtask, subtaskIndex) => {
                    return (
                      <SortableListItem
                        id={subtask.subtaskId}
                        key={subtask.subtaskId}
                      >
                        <Input
                          type="text"
                          id={`subtask-${subtaskIndex}`}
                          onChange={(event) =>
                            handleChangeSubtasksValue(event, subtaskIndex)
                          }
                          value={subtask.subtaskTitle}
                          required
                        />
                        {subtasks.length > 1 ? (
                          <Button
                            variant="ghost"
                            width="max-content"
                            onClick={(event: MouseEvent) =>
                              handleDeleteSubtask(event, subtaskIndex)
                            }
                          >
                            {<Cross />}
                          </Button>
                        ) : null}
                      </SortableListItem>
                    );
                  })}
                </SortableContext>
              </ul>
            </DndContext>
            <Button
              variant="contained"
              align="center"
              color="secondary"
              type="button"
              onClick={handleAddSubtask}
            >
              <span className={styles["button-label"]}>Add New Subtask</span>
            </Button>
            <div className={styles["select"]}>
              <label className={styles["label"]} htmlFor="task-status">
                Current Status
              </label>
              <select
                id="task-status"
                className={styles["select-status"]}
                onChange={(e) => setSelectValue(e.target.value)}
                value={selectValue}
              >
                {activeBoard.boardColumns.map((column) => {
                  return <option value={column.value}>{column.value}</option>;
                })}
              </select>
            </div>
            <Button
              type="submit"
              variant="contained"
              color="secondary"
              align="center"
              // label="Create Task"
            >
              <span className={styles["button-label"]}>Create Task</span>
            </Button>
          </form>
        </>
      )}
      {activeBoard.boardTitle === "" && (
        <p className={styles["without-active-board"]}>
          It seems you don't have an active board selected. Please choose one or
          create a new one.
        </p>
      )}
    </Modal>
  );
};

export default NewTask;
