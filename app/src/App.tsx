import Header from "@components/Header/Header";
import { initLocalTheme } from "@utils/initLocalTheme";
import { ModalMenuProvider } from "./context/ModalMenu/ModalMenu";
import { ThemeToggleProvider } from "./context/ThemeToggle/ThemeToggle";

import ModalMenu from "@components/Header/ModalMenu/ModalMenu";
import Sidebar from "@components/Sidebar/Sidebar";

import "./App.scss";

initLocalTheme();

function App() {
  return (
    <ThemeToggleProvider>
      <ModalMenuProvider>
        <div className="App">
          <Header />
          <div className="modal-wrapper">
            <ModalMenu />
          </div>
          <Sidebar />
        </div>
      </ModalMenuProvider>
    </ThemeToggleProvider>
  );
}

export default App;
