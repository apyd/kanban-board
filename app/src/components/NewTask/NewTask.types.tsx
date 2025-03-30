export type Subtasks = {
  subtaskTitle: string;
  subtaskId: string;
};

export type Tasks = {
  taskTitle: string;
  taskId: string;
  subtasks: Subtasks[];
};
