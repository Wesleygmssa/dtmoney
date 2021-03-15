import { Container } from "./styles";
import incomeImg from '../../assets/income.svg';
import outcome from '../../assets/outcome.svg';
import total from '../../assets/total.svg';
import { useEffect } from "react";

export function Summary(){
    useEffect(()=>{
        fetch('http://localhost:3000/api/transactions')
        .then(response=> response.json())
        .then(data =>  console.log(data))
    },[])
    return(
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
    )
}