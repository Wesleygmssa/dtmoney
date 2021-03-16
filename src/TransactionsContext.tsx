import { createContext, useEffect, useState, ReactNode } from "react";
import { api } from "./services/api";

interface Transaction {
  id: number;
  title: string;
  amount: number;
  type: string;
  category: string;
  createdAt: string;
}

// interface TransactionInput {
//   title: string;
//   amount: number;
//   type: string;
//   category: string;
// }

type TransactionInput = Omit<Transaction, "id" | "createdAt">;

interface TransactionsProviderProps {
  children: ReactNode;
}

interface TransactionsContextData {
  transctions: Transaction[];
  createTransaction: (Transaction: TransactionInput) => void;
}

// criando a variável que vai ficar global na aplicação
export const TransactionsContext = createContext<TransactionsContextData>(
  {} as TransactionsContextData
);

export function TransactionsProvider(props: TransactionsProviderProps) {
  const [transctions, setTransactions] = useState<Transaction[]>([]);

  useEffect(() => {
    api
      .get("/transactions")
      .then((response) => setTransactions(response.data.transactions));
  }, []);

  function createTransaction(transaction: TransactionInput) {
    api.post("transactions", transaction);
  }

  return (
    <TransactionsContext.Provider value={{ transctions, createTransaction }}>
      {props.children}
    </TransactionsContext.Provider>
  );
}
