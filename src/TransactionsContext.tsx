import { createContext, useEffect, useState, ReactNode } from "react";
import { api } from "./services/api";

interface Request {
  id: number;
  title: string;
  amount: number;
  type: string;
  category: string;
  createdAt: string;
}

interface TransactionsProviderProps {
  children: ReactNode;
}

// criando a variável que vai ficar global na aplicação
export const TransactionsContext = createContext<Request[]>([]);

export function TransactionsProvider(props: TransactionsProviderProps) {
  const [transctions, setTransactions] = useState<Request[]>([]);

  useEffect(() => {
    api
      .get("/transactions")
      .then((response) => setTransactions(response.data.transactions));
  }, []);

  return (
    <TransactionsContext.Provider value={transctions}>
      {props.children}
    </TransactionsContext.Provider>
  );
}
