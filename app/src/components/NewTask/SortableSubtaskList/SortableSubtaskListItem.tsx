import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";
import styles from "./SortableSubtaskListItem.module.scss";
import type { SortableSubtaskListItem } from "./SortableSubtaskListItem.types";

const SortableSubtaskListItem = ({ id, children }: SortableSubtaskListItem) => {
  const {
    attributes,
    listeners,
    setNodeRef,
    transform,
    transition,
    isDragging,
    setActivatorNodeRef,
  } = useSortable({ id });

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
    opacity: isDragging ? 0.5 : 1,
    display: "flex",
    alignItems: "center",
    cursor: "grab",
  };

  return (
    <li
      className={styles["subtask-list-item"]}
      key={id}
      ref={setNodeRef}
      style={style}
    >
      <div
        className={styles["drag-handle"]}
        {...listeners}
        {...attributes}
        style={{ padding: " 0 0.3rem 0 0.3rem" }}
        ref={setActivatorNodeRef}
      >
        ::
      </div>
      <div className={styles["item-content"]}>{children}</div>
    </li>
  );
};

export default SortableSubtaskListItem;
