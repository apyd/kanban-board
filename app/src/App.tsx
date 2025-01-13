import BoardsList from "@components/BoardsList/BoardsList";
import { initLocalTheme } from "@utils/initLocalTheme";

initLocalTheme();

function App() {
  return (
    <div className="App">
      <BoardsList />
    </div>
  );
}

export default App;
