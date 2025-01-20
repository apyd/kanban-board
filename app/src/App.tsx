import Header from "@components/Header/Header";
import { initLocalTheme } from "@utils/initLocalTheme";

initLocalTheme();

function App() {
  return (
    <div className="App">
      <Header />
    </div>
  );
}

export default App;
