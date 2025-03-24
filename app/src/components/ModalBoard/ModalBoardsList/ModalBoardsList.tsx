import { DndContext, closestCenter } from "@dnd-kit/core";
import {
  SortableContext,
  verticalListSortingStrategy,
} from "@dnd-kit/sortable";
import Input from "@components/Input/Input";
import type { BoardsListProps } from "./ModalBoardsList.types";
import Cross from "@assets/icons/cross.svg?react";
import styles from "./ModalBoardsList.module.scss";
import Button from "@components/ui/Button/Button";
import SortableListItem from "./SortableListItem/SortableListItem";
import { Column } from "src/shared/types";

const ModalBoardsList = ({
  columns,
  handleNewBoard,
  handleChangeInput,
  handleDeleteColumn,
  handleReorderColumns,
}: BoardsListProps) => {
  return (
    <DndContext
      onDragEnd={handleReorderColumns}
      collisionDetection={closestCenter}
    >
      <form
        className={styles["board-columns-form"]}
        id="board-columns-form"
        onSubmit={handleNewBoard}
      >
        <h2 className={styles["board-columns-title"]}>Board Columns</h2>
        <ul className={styles["board-columns-list"]}>
          <SortableContext
            items={columns.map((column: Column) => column.id)}
            strategy={verticalListSortingStrategy}
          >
            {columns.map((column, columnIndex: number) => (
              <SortableListItem id={column.id} key={column.id}>
                <Input
                  type="text"
                  id={`column-${columnIndex}`}
                  minValue={3}
                  onChange={(event) => handleChangeInput(event, columnIndex)}
                  value={column.value}
                />
                {columns.length > 1 ? (
                  <Button
                    variant="ghost"
                    Icon={<Cross />}
                    onClick={(e: Event) =>
                      handleDeleteColumn(e, columnIndex.toString())
                    }
                  />
                ) : null}
              </SortableListItem>
            ))}
          </SortableContext>
        </ul>
      </form>
    </DndContext>
  );
};

export default ModalBoardsList;
