import { useContext } from "react";
import ModalMenuContext from "@context/ModalMenu/ModalMenu";
import Modal from "@components/Modal/Modal";
import BoardsList from "@components/BoardsList/BoardsList";
import ThemeToggle from "@components/ThemeToggle/ThemeToggle";

const ModalMenu = () => {
  const { isModalMenuOpen, closeModalMenu } = useContext(ModalMenuContext);

  const handleCloseModal = () => {
    closeModalMenu();
  };

  return (
    <Modal open={isModalMenuOpen} onClose={handleCloseModal}>
      <BoardsList />
      <ThemeToggle />
    </Modal>
  );
};

export default ModalMenu;
