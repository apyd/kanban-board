import { useState, useEffect, useContext } from "react";
import ModalMenuContext from "@context/ModalMenu/ModalMenu";
import "./Header.scss";
import "@components/Header/Header.scss";
import Button from "@components/ui/Button/Button";
import Logo from "@assets/logo4.svg?react";
import Ellipsis from "@assets/icons/ellipsis.svg?react";
import Plus from "@assets/icons/plus.svg?react";
import ChevronDown from "@assets/icons/chevron.svg?react";
import BREAKPOINTS from "@utils/Consts/breakpoints";

const Header = () => {
  const modalMenuCtx = useContext(ModalMenuContext);

  const [isVisible, setIsVisible] = useState<boolean>(false);

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

  const handleToggleButtonMenu = () => {
    if (isVisible) {
      setIsVisible(false);
    } else {
      setIsVisible(true);
    }
  };

  const renderButton = () => {
    return <Button Icon={<Plus />} variant="secondary" />;
  };
  const handleToggleDropdown = () => {
    if (modalMenuCtx.isModalMenuOpen) {
      modalMenuCtx.closeModalMenu();
    } else {
      modalMenuCtx.openModalMenu();
    }
  };

  return (
    <>
      <header className="header">
        <div className="logo-container">
          <Logo className="logo" />
          {!matches && <h1 className="logo-heading">kanban</h1>}
          {matches && (
            <Button
              variant="ghost"
              label="Marketing Plan"
              buttonWithArrow
              Icon={<ChevronDown className="chevron-icon" />}
              onClick={handleToggleDropdown}
            ></Button>
          )}
        </div>
        {!matches && (
          <div className="header-wrapper">
            <h3 className="active-board-name">Marketing Plan</h3>
          </div>
        )}
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
            <li>
              <Button label="Edit Board" variant="ghost"></Button>
            </li>
            <li>
              <Button label="Delete Board" variant="ghost"></Button>
            </li>
          </ul>
        </div>
      </header>
    </>
  );
};

export default Header;
