import useTheme from "@hooks/useTheme";
import SunIcon from "@assets/icons/sun.svg?react";
import MoonIcon from "@assets/icons/moon.svg?react";

import "./ThemeToggle.scss";

const ThemeToggle = () => {
  const [toggleTheme, theme] = useTheme();

  return (
    <div
      className="toggle-wrapper"
      data-theme={theme === "light" ? "light" : "dark"}
    >
      <SunIcon className="theme-icon sun-icon" />
      <button className="toggle-theme-button" onClick={toggleTheme}>
        <div className="toggle-theme"></div>
        <div
          className={`${
            theme === "light" ? "light-theme-toggle" : "dark-theme-toggle"
          } toggle`}
        ></div>
      </button>
      <MoonIcon className="theme-icon moon-icon" />
    </div>
  );
};

export default ThemeToggle;
