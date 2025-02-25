import { useState } from "react";
import "./Nav.scss";
import ThemeToggle from "@components/ThemeToggle/ThemeToggle";
import BoardsList from "@components/BoardsList/BoardsList";
import HideIcon from "@assets/icons/hide.svg?react";
import Button from "@components/ui/Button/Button";
import BREAKPOINTS from "@consts/breakpoints";
import useMediaQuery from "@hooks/useMediaQuery";

const Nav = () => {
  const isBelowDesktop = useMediaQuery(
    `(max-width: ${BREAKPOINTS["screen-md-max"]})`
  );

  const [isNavVisible, setIsNavVisible] = useState<boolean>(!isBelowDesktop);

  const handleToggleNav = () => {
    setIsNavVisible((prevValue) => {
      return !prevValue;
    });
  };

  const handleHideNav = () => {
    return (
      <div className="nav-hidden">
        <Button
          variant="primary"
          rounded="right-rounded"
          Icon={<HideIcon className="hide-icon" />}
          withStaticStyles
          onClick={handleToggleNav}
        />
      </div>
    );
  };

  if (isBelowDesktop) {
    return null;
  }

  return isNavVisible ? (
    <nav className="nav-content">
      <div className="nav-boards-list-wrapper">
        <BoardsList />
      </div>
      <div className="nav-toggle-theme-wrapper">
        <ThemeToggle />
      </div>
      <div className="nav-toggle-wrapper">
        <Button
          variant="primary"
          rounded="right-rounded"
          Icon={<HideIcon className="hide-icon" />}
          label="HIDE SIDEBAR"
          withStaticStyles
          onClick={handleToggleNav}
        />
      </div>
    </nav>
  ) : (
    handleHideNav()
  );
};

export default Nav;
