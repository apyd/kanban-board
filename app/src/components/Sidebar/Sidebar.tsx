import { useState } from "react";
import styles from "./Sidebar.module.scss";
import ThemeToggle from "@components/ThemeToggle/ThemeToggle";
import BoardsList from "@components/BoardsList/BoardsList";
import HideIcon from "@assets/icons/hide.svg?react";
import Button from "@components/ui/Button/Button/Button";
import BREAKPOINTS from "@consts/breakpoints";
import useMediaQuery from "@hooks/useMediaQuery";

const Sidebar = () => {
  const isBelowDesktop = useMediaQuery(
    `(max-width: ${BREAKPOINTS["screen-md-max"]})`
  );

  const [isSidebarVisible, setIsSidebarVisible] = useState<boolean>(
    !isBelowDesktop
  );

  const handleToggleSidebar = () => {
    setIsSidebarVisible((prevValue) => !prevValue);
  };

  const renderSidebar = (isSidebarVisible: boolean) => {
    return isSidebarVisible ? (
      <div className={styles["sidebar-content"]}>
        <div className={styles["sidebar-boards-list-wrapper"]}>
          <BoardsList />
        </div>
        <div className={styles["sidebar-toggle-theme-wrapper"]}>
          <ThemeToggle />
        </div>
        <div className={styles["sidebar-toggle-wrapper"]}>
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
      <div className={styles["sidebar-toggle-wrapper"]}>
        <Button
          variant="primary"
          rounded="right-rounded"
          Icon={<HideIcon className={styles["hide-icon"]} />}
          withStaticStyles
          onClick={handleToggleSidebar}
        />
      </div>
    );
  };

  return !isBelowDesktop ? renderSidebar(isSidebarVisible) : null;
};

export default Sidebar;
