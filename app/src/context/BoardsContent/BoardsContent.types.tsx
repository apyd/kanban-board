import { Column } from "@/shared/types";

export type BoardsContentContext = {
  children: React.ReactNode;
};

export type BoardContent = {
  boardTitle: string;
  boardColumns: Column[];
  boardId: string;
};
