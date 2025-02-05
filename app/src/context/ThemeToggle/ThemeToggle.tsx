import { createContext, useState } from "react";
import type { ThemeToggleContext } from "@context/ThemeToggle/ThemeToggle.types";

const ThemeToggleContext = createContext<{
  theme: string;
  toggleTheme: () => void;
}>({
  theme: "light",
  toggleTheme: () => {},
});

export const ThemeToggleProvider = ({ children }: ThemeToggleContext) => {
  const localStorageTheme = localStorage.getItem("theme") as string;
  const [theme, setTheme] = useState<string>(localStorageTheme);

  const toggleTheme = () => {
    const updatedTheme = theme === "light" ? "dark" : "light";
    setTheme(updatedTheme);
    document.documentElement.setAttribute("data-theme", updatedTheme);
  };

  const ThemeToggleCtx = {
    theme,
    toggleTheme,
  };

  return (
    <ThemeToggleContext.Provider value={ThemeToggleCtx}>
      {children}
    </ThemeToggleContext.Provider>
  );
};

export default ThemeToggleContext;
