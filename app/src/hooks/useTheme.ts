import { useContext, useEffect } from "react";
import ThemeToggleContext from "@context/ThemeToggle/ThemeToggle";

const useTheme = () => {
  const themeToggleCtx = useContext(ThemeToggleContext);

  useEffect(() => {
    const themeRefresh = () => {
      localStorage.setItem("theme", themeToggleCtx.theme);
    };
    themeRefresh();
  }, [themeToggleCtx.theme]);
};

export default useTheme;
