import { useState, useEffect, useContext } from "react";
import ThemeToggle from "@components/ThemeToggle/ThemeToggle";
import BoardsList from "@components/BoardsList/BoardsList";
import "./Sidebar.scss";
import HideIcon from "@assets/icons/hide.svg?react";
import Button from "@components/ui/Button/Button";
import BREAKPOINTS from "@utils/Consts/breakpoints";
import ModalMenuContext from "@context/ModalMenu/ModalMenu";

const Sidebar = () => {
  const { isModalMenuOpen, closeModalMenu } = useContext(ModalMenuContext);

  const mql = window.matchMedia(
    `screen and (min-width: ${parseInt(BREAKPOINTS["screen-md-max"]) + 1}px)`
  );
  const [showSidebar, setShowSidebar] = useState(mql.matches);

  useEffect(() => {
    const handleChangeScreenSize = (event: MediaQueryListEvent) => {
      setShowSidebar(event.matches);

      console.log(event.matches);

      if (!event.matches) {
        closeModalMenu();
      }
    };

    mql.addEventListener("change", handleChangeScreenSize);

    return () => {
      mql.removeEventListener("change", handleChangeScreenSize);
    };
  }, [mql, closeModalMenu, isModalMenuOpen]);

  const handleToggleSidebar = () => {
    setShowSidebar((prevValue) => {
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

  return showSidebar ? (
    <div className={`sidebar-content ${!showSidebar ? "sidebar-none" : ""}`}>
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
