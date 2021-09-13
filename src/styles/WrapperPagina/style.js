import styled, {css} from 'styled-components'

export const DivWrapper = styled.div`
    ${()=>css`
        display: flex;
        align-items: center;
        justify-content: center;
        height: 100%;
        width: 100%;
        background-color: wheat;
        flex-direction: column;
    `}
`