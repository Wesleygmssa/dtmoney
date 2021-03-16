import { useState } from "react";
import logoImg from "../../assets/logo.svg";
import { Conatiner, Content } from "./styels";
import Modal from "react-modal";

export function Header() {
  const [isNewTransactionModalOpen, setIsNewTransactionModalOpen] = useState(
    false
  );

  function handleOpenNewTransactionModal() {
    setIsNewTransactionModalOpen(true);
  }
  function handleCloseNewTransactionModal() {
    setIsNewTransactionModalOpen(false);
  }
  return (
    <Conatiner>
      <Content>
        <img src={logoImg} alt="dt many" />
        <button type="button" onClick={handleOpenNewTransactionModal}>
          Nova transação
        </button>

        <Modal
          isOpen={isNewTransactionModalOpen}
          onRequestClose={handleCloseNewTransactionModal}
        >
          <h2>Cadastrar Transação</h2>
        </Modal>
      </Content>
    </Conatiner>
  );
}
