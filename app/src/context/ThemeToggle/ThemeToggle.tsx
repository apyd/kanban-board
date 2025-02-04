import { createContext, useState } from "react";
import type { ThemeToggleContext } from "@context/ThemeToggle/ThemeToggle.types";

const ThemeToggleContext = createContext<{
  isLightTheme: boolean;
  toggleTheme: () => void;
}>({
  isLightTheme: true,
  toggleTheme: () => {},
});

export const ThemeToggleProvider = ({ children }: ThemeToggleContext) => {
  const [isLightTheme, setIsLightTheme] = useState<boolean>(true);

  function toggleTheme() {
    setIsLightTheme((prevValue) => !prevValue);
  }

  const ThemeToggleCtx = {
    isLightTheme,
    toggleTheme,
  };

  return (
    <ThemeToggleContext.Provider value={ThemeToggleCtx}>
      {children}
    </ThemeToggleContext.Provider>
  );
};

export default ThemeToggleContext;
