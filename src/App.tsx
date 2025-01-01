// import Button from "@components/ui/Button/Button";
import ThemeToggle from "@components/ThemeToggle/ThemeToggle";
import { initLocalTheme } from "@utils/initLocalTheme";

initLocalTheme();

function App() {
  return (
    <div className="App">
      <ThemeToggle />
      {/* <h1>Kanban board app</h1> */}
      {/* <Button>Click me</Button> */}
    </div>
  );
}

export default App;
