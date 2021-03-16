import logoImg from "../../assets/logo.svg";
import { Conatiner, Content } from "./styels";

interface HeaderProps {
  onOpenNewTransactionModal: () => void;
}

export function Header(props: HeaderProps) {
  return (
    <Conatiner>
      <Content>
        <img src={logoImg} alt="dt many" />
        <button type="button" onClick={props.onOpenNewTransactionModal}>
          Nova transação
        </button>
      </Content>
    </Conatiner>
  );
}
