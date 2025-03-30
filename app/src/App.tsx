import { initLocalTheme } from "@utils/initLocalTheme";
import { ModalMenuProvider } from "@context/ModalMenu/ModalMenu";
import { ThemeToggleProvider } from "@context/ThemeToggle/ThemeToggle";
import { BoardsContentProvider } from "@context/BoardsContent/BoardsContent";
import { BoardModalProvider } from "@context/BoardModal/BoardModal";
import { TaskModalProvider } from "@context/TaskModal/TaskModal";
import Header from "@components/Header/Header";
import Sidebar from "@components/Sidebar/Sidebar";
import ModalMenu from "@components/Header/ModalMenu/ModalMenu";
import ModalBoard from "@components/ModalBoard/ModalBoard";
import NewTask from "@components/NewTask/NewTask";

initLocalTheme();

function App() {
  return (
    <TaskModalProvider>
      <BoardModalProvider>
        <BoardsContentProvider>
          <ThemeToggleProvider>
            <ModalMenuProvider>
              <div className="App">
                <Header />
                <Sidebar />
                <ModalMenu />
                <ModalBoard />
                <NewTask />
              </div>
            </ModalMenuProvider>
          </ThemeToggleProvider>
        </BoardsContentProvider>
      </BoardModalProvider>
    </TaskModalProvider>
  );
}

export default App;
