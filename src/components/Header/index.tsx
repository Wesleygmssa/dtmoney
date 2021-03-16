import logoImg from "../../assets/logo.svg";
import { Conatiner, Content } from "./styels";

export function Header() {
  return (
    <Conatiner>
      <Content>
        <img src={logoImg} alt="dt many" />
        <button type="button">Nova transação</button>
      </Content>
    </Conatiner>
  );
}
