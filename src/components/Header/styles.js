import styled, {css} from 'styled-components'

export const DivHeader = styled.div`
    ${()=>css`
        background-color:tomato;
        position:sticky;
        height: 5%;
        display: flex;
        align-items: center;
        justify-content: space-evenly;
    `}
`

export const Span = styled.a`
    ${()=>css`
        text-decoration: underline;
        color: black;
    `}
`
