export const initLocalTheme = () => {
  let theme = localStorage.getItem("theme");

  if (!theme) {
    const prefersDarkMode = window.matchMedia("(prefers-color-scheme: dark)");
    theme = prefersDarkMode.matches ? "dark" : "light";
    localStorage.setItem("theme", theme);
  }

  document.documentElement.setAttribute("data-theme", theme);

  return theme;
};
