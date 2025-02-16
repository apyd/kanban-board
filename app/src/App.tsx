import Header from "@components/Header/Header";
import { initLocalTheme } from "@utils/initLocalTheme";
import { ModalMenuProvider } from "./context/ModalMenu/ModalMenu";
import ModalMenu from "@components/Header/ModalMenu/ModalMenu";

import "./App.scss";

initLocalTheme();

function App() {
  return (
    <ModalMenuProvider>
      <div className="App">
        <Header />
        <ModalMenu />
      </div>
    </ModalMenuProvider>
  );
}

export default App;
