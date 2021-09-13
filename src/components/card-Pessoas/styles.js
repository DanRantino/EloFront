import styled, {css} from 'styled-components'

export const PeopleRow = styled.tr`
    ${({hidden=false})=>css`

        ${hidden===true && `display: none`}
        width: 100%;
    `}
`

export const PeopleData = styled.td`
    ${()=>css`
        width: 20%;
        font-weight: bold;
        border-right: 1px solid black;
        border-left: 1px solid black;
        div{
            display: flex;
            justify-content:center;
            align-items:center;
        }
    `}
`

export const ButtonContatos = styled.button`
    ${()=>css`
        font-size:15px;
        display: flex;
        justify-content:center;
        align-items:center;
        font-family:Arial;
        width:100px;
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
        background:linear-gradient(#77b55a, #72b352);
        cursor:pointer;
  `}
`


export const ContatctRow = styled.tr`
    ${({hidden=false})=>css`

        ${hidden===true && `display: none`}
        border-top: 1px solid black;
        border-bottom: 1px solid black;
        width: 100%;
    `}
`

export const ContatctData = styled.td`
    ${()=>css`
        width: 20%;
        border-right: 1px solid black;
        border-left: 1px solid black;
        div{
            display: flex;
            justify-content:center;
            align-items:center;
        }
    `}
`

export const ContatctHead = styled.td`
    ${()=>css`
        font-style: italic;
        width: 20%;
        border-right: 1px solid black;
        border-left: 1px solid black;
        div{
            display: flex;
            justify-content:center;
            align-items:center;
        }
    `}
`