import logoImg from '../../assets/logo.svg'

export function Header (){
    return(
        <header>
            <img src={logoImg} alt="dt many"/>
            <button type="button">
                Nova transação
            </button>
        </header>
    )
}