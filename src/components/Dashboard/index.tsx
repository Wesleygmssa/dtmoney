import { Summary } from "../Summary";
import { TransactionTable } from "../TransactionsTable";
import { Conatiner } from "./styles";

export function Dashboard(){
    return(
       <Conatiner>
           <Summary/>
           <TransactionTable/>
       </Conatiner> 
    )
}