import SunIcon from "@assets/icons/sun.svg?react";
import MoonIcon from "@assets/icons/moon.svg?react";
import styles from "./ThemeToggle.module.scss";
import { useContext } from "react";
import ThemeToggleContext from "@context/ThemeToggle/ThemeToggle";

const ThemeToggle = () => {
  const themeToggleCtx = useContext(ThemeToggleContext);

  const isLightThemeActive = themeToggleCtx.theme === "light";

  return (
    <div
      className={styles["toggle-wrapper"]}
      data-theme={isLightThemeActive ? "light" : "dark"}
    >
      <SunIcon className={styles["theme-icon"]} />
      <button
        className={styles["toggle-theme-button"]}
        onClick={themeToggleCtx.toggleTheme}
      >
        <div className={styles["toggle-theme"]}></div>
        <div
          className={`${styles["toggle"]} ${
            isLightThemeActive
              ? styles["light-theme-toggle"]
              : styles["dark-theme-toggle"]
          } `}
        ></div>
      </button>
      <MoonIcon className={styles["theme-icon"]} />
    </div>
  );
};

export default ThemeToggle;
