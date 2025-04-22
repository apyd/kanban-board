import { useState, useContext, useCallback } from "react";
import clsx from "clsx";
import ModalMenuContext from "@context/ModalMenu/ModalMenu";
import TaskModalContext from "@context/TaskModal/TaskModal";
import BoardsContentContext from "@context/BoardsContent/BoardsContent";
import BoardModalContext from "@context/BoardModal/BoardModal";
import styles from "@components/Header/Header.module.scss";
import Button from "@components/ui/Button/Button/Button";
import Logo from "@assets/logo.svg?react";
import Ellipsis from "@assets/icons/ellipsis.svg?react";
import Plus from "@assets/icons/plus.svg?react";
import BREAKPOINTS from "@consts/breakpoints";
import useMediaQuery from "@hooks/useMediaQuery";

const Header = () => {
  const { isModalMenuOpen, closeModalMenu, openModalMenu } =
    useContext(ModalMenuContext);
  const { openTaskModal } = useContext(TaskModalContext);
  const { activeBoard } = useContext(BoardsContentContext);
  const { openBoardModal } = useContext(BoardModalContext);

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
    return (
      <Button
        variant="contained"
        color="secondary"
        onClick={handleOpenTaskModal}
      >
        {<Plus />}
      </Button>
    );
  };

  const handleToggleDropdown = () => {
    if (isModalMenuOpen) {
      closeModalMenu();
    } else {
      openModalMenu();
    }
  };

  const handleOpenModal = () => {
    if (activeBoard.boardTitle) {
      handleToggleDropdown();
    } else {
      openBoardModal();
    }
  };

  const handleOpenTaskModal = () => {
    openTaskModal();
  };

  return (
    <>
      <header className={styles["header"]}>
        <div className={styles["logo-container"]}>
          <Logo className={styles["logo"]} />
          {isBelowDesktop ? (
            <Button variant="ghost" color="primary" onClick={handleOpenModal}>
              <span className={styles["logo-heading"]}>
                {activeBoard?.boardTitle || "Create New Board"}
              </span>
            </Button>
          ) : (
            <h1 className={styles["logo-heading"]}>kanban</h1>
          )}
        </div>
        <div className={styles["buttons-wrapper"]}>
          {!isBelowDesktop && (
            <Button
              variant="contained"
              color="secondary"
              onClick={handleOpenTaskModal}
            >
              <span className={styles["button-label"]}>+ Add New Task</span>
            </Button>
          )}

          {isBelowDesktop && renderButton()}
          <Button
            variant="ghost"
            color="primary"
            rounded="full-rounded"
            width="max-content"
            onClick={handleToggleButtonMenu}
          >
            {<Ellipsis />}
          </Button>
          <ul
            className={clsx(styles["header-board-options"], {
              [styles["visible"]]: isButtonDropdownVisible,
            })}
          >
            <li>
              <Button variant="ghost">
                <span className={styles["button-label"]}>Edit Board</span>
              </Button>
            </li>
            <li>
              <Button variant="ghost">
                <span className={styles["button-label"]}>Delete Board</span>
              </Button>
            </li>
          </ul>
        </div>
      </header>
    </>
  );
};

export default Header;
