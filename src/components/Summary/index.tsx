import React, { useContext } from "react";
import { Container } from "./styles";
import incomeImg from "../../assets/income.svg";
import outcome from "../../assets/outcome.svg";
import total from "../../assets/total.svg";
import { useTransactions } from "../../hooks/useTransactions";

export function Summary() {
  const { transctions } = useTransactions();

  // const totalDeposits = transctions.reduce((acc, transction) => {
  //   if (transction.type === "deposit") {
  //     return acc + transction.amount;
  //   }

  //   return acc;
  // }, 0);

  const sumamary = transctions.reduce(
    (acc, transction) => {
      if (transction.type === "deposit") {
        acc.deposits += transction.amount;
        acc.total += transction.amount;
      } else {
        acc.withdraws += transction.amount;
        acc.total -= transction.amount;
      }

      return acc;
    },
    {
      deposits: 0,
      withdraws: 0,
      total: 0,
    }
  );

  return (
    <Container>
      <div>
        <header>
          <p>Entradas</p>
          <img src={incomeImg} alt="" />
        </header>
        <strong>
          {new Intl.NumberFormat("pt-BR", {
            style: "currency",
            currency: "BRL",
          }).format(sumamary.deposits)}
        </strong>
      </div>
      <div>
        <header>
          <p>Saídas</p>
          <img src={outcome} alt="" />
        </header>
        <strong>
          -{" "}
          {new Intl.NumberFormat("pt-BR", {
            style: "currency",
            currency: "BRL",
          }).format(sumamary.withdraws)}
        </strong>
      </div>
      <div className="highlight-background">
        <header>
          <p>Total</p>
          <img src={total} alt="" />
        </header>
        <strong>
          {" "}
          {new Intl.NumberFormat("pt-BR", {
            style: "currency",
            currency: "BRL",
          }).format(sumamary.total)}
        </strong>
      </div>
    </Container>
  );
}
