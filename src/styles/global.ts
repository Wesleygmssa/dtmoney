import { createGlobalStyle } from "styled-components";

export const GlobalStyled = createGlobalStyle`
:root{
    --background: #f0f2f5;
    --red: #E52E40;
    --blue: #5429CC;
    --green: #33CC95;

    --blue-light: #6933FF;

    --text-title: #363F5F;
    --text-body: #969CB3;

    --background: #F0F2F5;
    --shape: #ffff;

}
*{
    margin:0;
    padding:0;
    box-sizing: border-box; 
}
//font-size: 16px (desktop) padrão

html{
    @media(max-width: 1080px){
        font-size: 93.75%; //15px;
    }

    @media(max-width: 720px){
        font-size: 87.5%; //14px;
    }
}

//REM = 1rem = 16px; 

body{
background: var(--background);
-webkit-font-smoothing: antialiased;
}

body , input , textarea , button{

    font-family: 'Poppins', sans-serif;
    font-weight: 400;
}

h1 ,h2 ,h3, h4 ,h5 ,h6, strong{
    font-weight: 600;
}

button{
    cursor:pointer;
}

[disabled]{
    opacity: 0.6;
    cursor: not-allowed;
}

.react-modal-overlay{
    background: rgba(0,0,0,0.5);
    position: fixed;
    top: 0;
    bottom:0;
    right:0;
    left:0;

    display: flex;
    align-items: center;
    justify-content: center;
}
.react-modal-content{
    width: 100%;
    max-width: 576px;
    background: var(--background);
    padding: 3rem;
    position: relative;
    border: 0.25rem;
}

.react-modal-close{
    position: absolute;
    right: 1.25rem;
    top: 1.25rem;
    border: 0;
    background: transparent;
    outline: none;
    transition: filter 0.5s;

    &:hover{
        filter: brightness(0.5);
    }
}
`;
