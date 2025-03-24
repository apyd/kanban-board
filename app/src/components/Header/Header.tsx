import { useState, useContext, useCallback } from "react";
import clsx from "clsx";
import ModalMenuContext from "@context/ModalMenu/ModalMenu";
import styles from "@components/Header/Header.module.scss";
import Button from "@components/ui/Button/Button/Button";
import Logo from "@assets/logo.svg?react";
import Ellipsis from "@assets/icons/ellipsis.svg?react";
import Plus from "@assets/icons/plus.svg?react";
import ChevronDown from "@assets/icons/chevron.svg?react";
import BREAKPOINTS from "@consts/breakpoints";
import useMediaQuery from "@hooks/useMediaQuery";

const Header = () => {
  const { isModalMenuOpen, closeModalMenu, openModalMenu } =
    useContext(ModalMenuContext);

  const [isButtonDropdownVisible, setIsButtonDropdownVisible] =
    useState<boolean>(false);

  const handleScreenChange = useCallback(
    (matches: boolean) => {
      if (!matches && isModalMenuOpen) {
        closeModalMenu();
      }
    },
    [isModalMenuOpen, closeModalMenu]
  );

  const isBelowDesktop = useMediaQuery(
    `(max-width: ${BREAKPOINTS["screen-md-max"]})`,
    handleScreenChange
  );

  const handleToggleButtonMenu = () => {
    setIsButtonDropdownVisible((prevState) => !prevState);
  };
  const renderButton = () => {
    return <Button Icon={<Plus />} variant="secondary" />;
  };

  const handleToggleDropdown = () => {
    if (isModalMenuOpen) {
      closeModalMenu();
    } else {
      openModalMenu();
    }
  };

  return (
    <>
      <header className={styles["header"]}>
        <div className={styles["logo-container"]}>
          <Logo className={styles["logo"]} />
          {isBelowDesktop ? (
            <Button
              variant="ghost"
              label="Marketing Plan"
              buttonWithArrow
              Icon={<ChevronDown className={styles["chevron-icon"]} />}
              onClick={handleToggleDropdown}
            ></Button>
          ) : (
            <h1 className={styles["logo-heading"]}>kanban</h1>
          )}
        </div>
        {!isBelowDesktop && (
          <div className={styles["header-wrapper"]}>
            <h3 className={styles["active-board-name"]}>Marketing Plan</h3>
          </div>
        )}
        <div className={styles["buttons-wrapper"]}>
          {!isBelowDesktop && (
            <Button label="+ Add New Task" variant="secondary" />
          )}
          {isBelowDesktop && renderButton()}
          <Button
            Icon={<Ellipsis />}
            variant="ghost"
            rounded="no-rounded"
            onClick={handleToggleButtonMenu}
          />
          <ul
            className={clsx(styles["header-board-options"], {
              [styles["visible"]]: isButtonDropdownVisible,
            })}
          >
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
