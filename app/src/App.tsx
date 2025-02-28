import Header from "@components/Header/Header";
import { initLocalTheme } from "@utils/initLocalTheme";
import { ModalMenuProvider } from "@context/ModalMenu/ModalMenu";
import { ThemeToggleProvider } from "@context/ThemeToggle/ThemeToggle";

import ModalMenu from "@components/Header/ModalMenu/ModalMenu";
import Sidebar from "@components/Sidebar/Sidebar";

initLocalTheme();

function App() {
  return (
    <ThemeToggleProvider>
      <ModalMenuProvider>
        <div className="App">
          <Header />
          <Sidebar />
          <ModalMenu />
        </div>
      </ModalMenuProvider>
    </ThemeToggleProvider>
  );
}

export default App;
