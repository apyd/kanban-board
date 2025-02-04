import { useContext } from "react";
import ModalMenuContext from "@context/ModalMenu/ModalMenu";
import Modal from "@components/Modal/Modal";
import BoardsList from "@components/BoardsList/BoardsList";
import ThemeToggle from "@components/ThemeToggle/ThemeToggle";

const ModalMenu = () => {
  const ModalMenuCtx = useContext(ModalMenuContext);
  return (
    <Modal open={ModalMenuCtx.isModalMenuOpen}>
      <BoardsList />
      <ThemeToggle />
    </Modal>
  );
};

export default ModalMenu;
