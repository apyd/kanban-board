import { useState } from "react";
import "./Sidebar.scss";
import ThemeToggle from "@components/ThemeToggle/ThemeToggle";
import BoardsList from "@components/BoardsList/BoardsList";
import HideIcon from "@assets/icons/hide.svg?react";
import Button from "@components/ui/Button/Button";
import BREAKPOINTS from "@consts/breakpoints";
import useMediaQuery from "@hooks/useMediaQuery";

const Sidebar = () => {
  const isBelowDesktop = useMediaQuery(
    `(max-width: ${BREAKPOINTS["screen-md-max"]})`
  );

  const [isSidebarShown, setIsSidebarShown] = useState<boolean>(true);

  const handleToggleSidebar = () => {
    setIsSidebarShown((prevValue) => {
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

  if (isBelowDesktop) {
    return <></>;
  }

  return isSidebarShown ? (
    <div className="sidebar-content">
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
