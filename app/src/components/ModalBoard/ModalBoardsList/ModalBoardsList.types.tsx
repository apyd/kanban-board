import { DragEndEvent } from "@dnd-kit/core/dist/types";
import { Column } from "src/shared/types";

export type BoardsListProps = {
  columns: Column[];
  handleNewBoard: (event: React.FormEvent) => void;
  handleChangeInput: (
    event: React.ChangeEvent<HTMLInputElement>,
    index: number
  ) => void;
  handleDeleteColumn: (e: Event, index: string) => void;
  handleReorderColumns: (event: DragEndEvent) => void;
};
