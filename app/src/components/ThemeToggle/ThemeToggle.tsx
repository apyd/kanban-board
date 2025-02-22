// import useTheme from "@hooks/useTheme";
import SunIcon from "@assets/icons/sun.svg?react";
import MoonIcon from "@assets/icons/moon.svg?react";
import "./ThemeToggle.scss";
import { useContext } from "react";
import ThemeToggleContext from "@context/ThemeToggle/ThemeToggle";

const ThemeToggle = () => {
  // const [toggleTheme, theme] = useTheme();
  const themeToggleCtx = useContext(ThemeToggleContext);

  const isLightThemeActive = themeToggleCtx.theme === "light";

  return (
    <div
      className="toggle-wrapper"
      data-theme={isLightThemeActive ? "light" : "dark"}
    >
      <SunIcon className="theme-icon" />
      <button
        className="toggle-theme-button"
        onClick={themeToggleCtx.toggleTheme}
      >
        <div className="toggle-theme"></div>
        <div
          className={`${
            isLightThemeActive ? "light-theme-toggle" : "dark-theme-toggle"
          } toggle`}
        ></div>
      </button>
      <MoonIcon className="theme-icon" />
    </div>
  );
};

export default ThemeToggle;
