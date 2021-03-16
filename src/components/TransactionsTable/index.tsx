import { useEffect, useState } from "react";
import { api } from "../../services/api";
import { Container } from "./styles";

interface Request {
  id: number;
  title: string;
  amount: number;
  type: string;
  category: string;
  createdAt: string;
}

export function TransactionTable() {
  const [transctions, setTransactions] = useState<Request[]>([]);

  useEffect(() => {
    api
      .get("/transactions")
      .then((response) => setTransactions(response.data.transactions));
  }, []);
  return (
    <Container>
      <table>
        <thead>
          <tr>
            <th>Titulo</th>
            <th>Valor</th>
            <th>Categoria</th>
            <th>Data</th>
          </tr>
        </thead>
        <tbody>
          {transctions.map((transction) => {
            return (
              <tr key={transction.id}>
                <td>{transction.title}</td>
                <td className={transction.type}>{transction.amount}</td>
                <td>{transction.category}</td>
                <td>{transction.createdAt}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </Container>
  );
}
