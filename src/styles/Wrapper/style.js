import styled, {css} from 'styled-components'

export const DivWrapper = styled.div`
    ${()=>css`
        position: absolute;
        height: 100vh;
        width: 100vw;
        top: 0;
        left: 0;
        overflow: hidden;
    `}
`