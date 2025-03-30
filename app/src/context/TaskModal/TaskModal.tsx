import { createContext, useState } from "react";
import type { TaskModalContext } from "@context/TaskModal/TaskModal.types";

const TaskModalContext = createContext<{
  isTaskModalOpen: boolean;
  openTaskModal: () => void;
  closeTaskModal: () => void;
}>({
  isTaskModalOpen: false,
  openTaskModal: () => {},
  closeTaskModal: () => {},
});

export const TaskModalProvider = ({ children }: TaskModalContext) => {
  const [isTaskModalOpen, setIsTaskModalOpen] = useState<boolean>(false);

  function openTaskModal() {
    setIsTaskModalOpen(true);
  }

  function closeTaskModal() {
    setIsTaskModalOpen(false);
  }

  const taskModalCtx = {
    isTaskModalOpen,
    openTaskModal,
    closeTaskModal,
  };

  return (
    <TaskModalContext.Provider value={taskModalCtx}>
      {children}
    </TaskModalContext.Provider>
  );
};

export default TaskModalContext;
