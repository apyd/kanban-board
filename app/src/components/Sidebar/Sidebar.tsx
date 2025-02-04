import { useState, useEffect, useContext } from "react";
import ThemeToggle from "@components/ThemeToggle/ThemeToggle";
import BoardsList from "@components/BoardsList/BoardsList";
import "./Sidebar.scss";
import HideIcon from "@assets/icons/hide.svg?react";
import Button from "@components/ui/Button/Button";
import BREAKPOINTS from "@utils/Consts/breakpoints";
import ModalMenuContext from "@context/ModalMenu/ModalMenu";

const Sidebar = () => {
  const modalMenuCtx = useContext(ModalMenuContext);
  const [isSidebarHidden, setIsSidebarHidden] = useState(false);

  const mql = window.matchMedia(`(max-width: ${BREAKPOINTS["screen-md-max"]})`);
  const [matches, setMatches] = useState(mql.matches);

  useEffect(() => {
    const handleChangeScreenSize = (event: MediaQueryListEvent) => {
      setMatches(event.matches);

      if (!event.matches) {
        modalMenuCtx.closeModalMenu();
      }
    };
    mql.addEventListener("change", handleChangeScreenSize);

    return () => {
      mql.removeEventListener("change", handleChangeScreenSize);
    };
  }, [mql, modalMenuCtx]);

  const handleToggleSidebar = () => {
    setIsSidebarHidden((prevValue) => {
      return !prevValue;
    });
  };

  const handleHideSidebar = () => {
    return (
      <div className="sidebar-hidden">
        <Button
          variant="primary"
          rounded="right-rounded"
          Icon={<HideIcon className="hide-icon" />}
          withStaticStyles
          onClick={handleToggleSidebar}
        />
      </div>
    );
  };

  return !isSidebarHidden ? (
    <div className={`sidebar-content ${matches ? "sidebar-none" : ""}`}>
      <div className="sidebar-boards-list-wrapper">
        <BoardsList />
      </div>
      <div className="sidebar-toggle-theme-wrapper">
        <ThemeToggle />
      </div>
      <div className="sidebar-toggle-wrapper">
        <Button
          variant="primary"
          rounded="right-rounded"
          Icon={<HideIcon className="hide-icon" />}
          label="HIDE SIDEBAR"
          withStaticStyles
          onClick={handleToggleSidebar}
        />
      </div>
    </div>
  ) : (
    handleHideSidebar()
  );
};

export default Sidebar;
