import useTheme from "@hooks/useTheme";
import SunIcon from "@assets/icons/sun.svg?react";
import MoonIcon from "@assets/icons/moon.svg?react";
import "./ThemeToggle.scss";

const ThemeToggle = () => {
  const [toggleTheme, theme] = useTheme();

  const isLightThemeActive = theme === "light";

  return (
    <div
      className="toggle-wrapper"
      data-theme={isLightThemeActive ? "light" : "dark"}
    >
      <SunIcon className="theme-icon" />
      <button className="toggle-theme-button" onClick={toggleTheme}>
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
