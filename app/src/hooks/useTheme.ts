import { useContext, useEffect } from "react";
import ThemeToggleContext from "@context/ThemeToggle/ThemeToggle";

type Theme = () => void;

const useTheme = (): Theme => {
  const themeToggleCtx = useContext(ThemeToggleContext);

  useEffect(() => {
    const themeRefresh = () => {
      localStorage.setItem("theme", themeToggleCtx.theme);
    };
    themeRefresh();
  }, [themeToggleCtx.theme]);
};

export default useTheme;
