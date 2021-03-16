import React, { useContext } from "react";
import { Container } from "./styles";
import incomeImg from "../../assets/income.svg";
import outcome from "../../assets/outcome.svg";
import total from "../../assets/total.svg";
import { TransactionsContext } from "../../TransactionsContext";

export function Summary() {
  const { transctions } = useContext(TransactionsContext); // valor do context
  return (
    <Container>
      <div>
        <header>
          <p>Entradas</p>
          <img src={incomeImg} alt="" />
        </header>
        <strong>R$1000,00</strong>
      </div>
      <div>
        <header>
          <p>Entradas</p>
          <img src={outcome} alt="" />
        </header>
        <strong>-R$500,00</strong>
      </div>
      <div className="highlight-background">
        <header>
          <p>Total</p>
          <img src={total} alt="" />
        </header>
        <strong>R$500,00</strong>
      </div>
    </Container>
  );
}
