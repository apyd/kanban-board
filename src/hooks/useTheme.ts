import { useState, useEffect } from "react";

type Theme = [toggleTheme: () => void, theme: string];

const useTheme = (): Theme => {
  const localStorageTheme = localStorage.getItem("theme") as string;
  const [theme, setTheme] = useState<string>(localStorageTheme);

  const toggleTheme = () => {
    const updatedTheme = theme === "light" ? "dark" : "light";
    setTheme(updatedTheme);
    document.documentElement.setAttribute("data-theme", updatedTheme);
  };

  useEffect(() => {
    const themeRefresh = () => {
      localStorage.setItem("theme", theme);
    };
    themeRefresh();
  }, [theme]);

  return [toggleTheme, theme];
};

export default useTheme;
