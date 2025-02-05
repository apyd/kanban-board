import { useContext, useEffect } from "react";
import ThemeToggleContext from "@context/ThemeToggle/ThemeToggle";

type Theme = [() => void, string];

const useTheme = (): Theme => {
  const themeToggleCtx = useContext(ThemeToggleContext);
  // const localStorageTheme = localStorage.getItem("theme") as string;
  // const [theme, setTheme] = useState<string>(localStorageTheme);

  // const toggleTheme = () => {
  //   const updatedTheme = theme === "light" ? "dark" : "light";
  //   setTheme(updatedTheme);
  //   document.documentElement.setAttribute("data-theme", updatedTheme);
  // };

  useEffect(() => {
    const themeRefresh = () => {
      localStorage.setItem("theme", themeToggleCtx.theme);
    };
    themeRefresh();
  }, [themeToggleCtx.theme]);
};

export default useTheme;
