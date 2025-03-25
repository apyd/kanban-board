import { initLocalTheme } from "@utils/initLocalTheme";
import { ModalMenuProvider } from "@context/ModalMenu/ModalMenu";
import { ThemeToggleProvider } from "@context/ThemeToggle/ThemeToggle";
import { BoardsContentProvider } from "@context/BoardsContent/BoardsContent";
import { BoardModalProvider } from "@context/BoardModal/BoardModal";
import Header from "@components/Header/Header";
import Sidebar from "@components/Sidebar/Sidebar";
import ModalMenu from "@components/Header/ModalMenu/ModalMenu";
import ModalBoard from "@components/ModalBoard/ModalBoard";

initLocalTheme();

function App() {
  return (
    <BoardModalProvider>
      <BoardsContentProvider>
        <ThemeToggleProvider>
          <ModalMenuProvider>
            <div className="App">
              <Header />
              <Sidebar />
              <ModalMenu />
              <ModalBoard />
            </div>
          </ModalMenuProvider>
        </ThemeToggleProvider>
      </BoardsContentProvider>
    </BoardModalProvider>
  );
}

export default App;
