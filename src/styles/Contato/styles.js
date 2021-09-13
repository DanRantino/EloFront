import styled, {css} from 'styled-components'

export const InputText = styled.input`
    ${()=>css`
        display: flex;
        background-color:tomato;
        outline:none;
        width:100%;
        border:1px solid black;
        border-radius:10px;
        opacity:0.5 ;
        padding:5px;
        transition: 0.5s;
        &:hover{
            border:1px solid gray;
            opacity:1;
        }
        &:focus{
            border:1px solid gray;
            opacity:1;
        }
    `}
`

export const Button = styled.button`
    ${()=>css`
        font-size:15px;
        display: flex;
        justify-content:center;
        align-items:center;
        font-family:Arial;
        width:100px;
        height:40px;
        border-width:1px;
        color:#fff;
        border-color:#4b8f29;
        font-weight:bold;
        border-top-left-radius:4px;
        border-top-right-radius:4px;
        border-bottom-left-radius:4px;
        border-bottom-right-radius:4px;
        text-shadow: 0px 1px 0px #5b8a3c;
        background:linear-gradient(#77b55a, #72b352);
        cursor:pointer;
  `}
`

export const ButtonAdd = styled.button`
    ${()=>css`
        font-size:15px;
        display: flex;
        justify-content:center;
        align-items:center;
        font-family:Arial;
        width:100px;
        height:40px;
        border-width:1px;
        color:#fff;
        border-color:#4b8f29;
        font-weight:bold;
        border-top-left-radius:4px;
        border-top-right-radius:4px;
        border-bottom-left-radius:4px;
        border-bottom-right-radius:4px;
        text-shadow: 0px 1px 0px #5b8a3c;
        background:linear-gradient(#38A3AA, #38A3A5);
        cursor:pointer;
  `}
`

export const ButtonRemove = styled.button`
    ${()=>css`
        font-size:15px;
        display: flex;
        justify-content:center;
        align-items:center;
        font-family:Arial;
        width:30px;
        height:30px;
        border-width:1px;
        color:#fff;
        border-color:#4b8f29;
        font-weight:bold;
        border-top-left-radius:4px;
        border-top-right-radius:4px;
        border-bottom-left-radius:4px;
        border-bottom-right-radius:4px;
        text-shadow: 0px 1px 0px #5b8a3c;
        background:linear-gradient(#911F27, #911F3E);
        cursor:pointer;
  `}
`

export const DivButtons = styled.div`
    ${()=>css`
        display: flex;
        flex-direction: row;
        justify-content: space-evenly;
        align-items: center;
    `}
`

export const DivContatos = styled.div`
    ${()=>css`
        display: flex;
        flex-direction: column;
        justify-content: space-evenly;
        align-items: center;
        padding: 10px;
    `}
`

export const DivFormContatos = styled.div`
    ${()=>css`
        display: flex;
        flex-direction: row;
        width: 100%;
        height: 30px;
        padding: 20px;
        justify-content:space-evenly;
        align-items: center;
    `}
`

export const DivInputContatos = styled.div`
    ${()=>css`
        display: flex;
        flex-direction: column;
        padding: 10px;
        justify-content:center;
        align-items:center;
    `}
`
