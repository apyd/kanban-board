import ThemeToggle from "@components/ThemeToggle/ThemeToggle";
import { initLocalTheme } from "@utils/initLocalTheme";

initLocalTheme();

function App() {
  return (
    <div className="App">
      <ThemeToggle />
    </div>
  );
}

export default App;
