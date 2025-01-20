import { useState, useEffect } from "react";
import "./Header.scss";
import "@components/Header/Header.scss";
import Button from "@components/ui/Button/Button";
import Logo from "@assets/logo4.svg?react";
import Ellipsis from "@assets/icons/ellipsis.svg?react";
import Plus from "@assets/icons/plus.svg?react";
import ChevronDown from "@assets/icons/chevron.svg?react";
import BREAKPOINTS from "@utils/Consts/breakpoints";

const Header = () => {
  const [isVisible, setIsVisible] = useState<boolean>(false);
  const mql = window.matchMedia(`(max-width: ${BREAKPOINTS["screen-sm-max"]})`);
  const [matches, setMatches] = useState(mql.matches);

  useEffect(() => {
    const handleChangeScreenSize = (event: MediaQueryListEvent) => {
      setMatches(event.matches);
    };
    mql.addEventListener("change", handleChangeScreenSize);

    return () => {
      mql.removeEventListener("change", handleChangeScreenSize);
    };
  }, [mql]);

  const handleToggleButtonMenu = () => {
    if (isVisible === true) {
      setIsVisible(false);
    } else {
      setIsVisible(true);
    }
  };

  const renderButton = () => {
    return <Button Icon={<Plus />} variant="secondary" />;
  };

  return (
    <header className="header">
      <div className="logo-container">
        <Logo className="logo" />
        {!matches && <h1 className="logo-heading">kanban</h1>}
        {matches && (
          <button className="button-container">
            <ChevronDown className="chevron-icon" />
          </button>
        )}
      </div>
      <div className="buttons-wrapper">
        {!matches && <Button label="+ Add New Task" variant="secondary" />}
        {matches && renderButton()}
        <Button
          Icon={<Ellipsis />}
          variant="ghost"
          rounded="no-rounded"
          onClick={handleToggleButtonMenu}
        />
        <ul className={`header-board-options ${isVisible ? "visible" : ""}`}>
          <Button label="Edit Board" variant="ghost"></Button>
          <Button label="Delete Board" variant="ghost"></Button>
        </ul>
      </div>
    </header>
  );
};

export default Header;
