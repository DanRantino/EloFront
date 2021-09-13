import styled, {css} from 'styled-components'

export const WrapperPag = styled.div`
    ${()=>css`
        display: flex;
        height: 80%;
        width: 100%;
        flex-direction: column;
    `}
`

export const DivInput = styled.div`
    ${()=>css`
        display: flex;
        height: 20%;
        width: 100%;
    `}
`

export const DivHeader = styled.div`
    ${()=>css`
        display: flex;
        align-items: center;
        justify-content: flex-start;
        border-radius: 4%;
        height: 80%;
        width: 100%;
        flex-direction: column;
        overflow-x: auto;
    `}
`

export const PeopleRow = styled.tr`
    ${()=>css`
        width: 100%;
    `}
`

export const PeopleTable = styled.table`
    ${()=>css`
        width: 100%;
        height: 20%;
        border-collapse: collapse;
    `}
`
export const PeopleThead = styled.thead`
    ${()=>css`
        position: sticky;
        width: 100%;
    `}
`

export const PeopleHead = styled.th`
    ${()=>css`
        color: tomato;
        width: 20%;
        border-right: 1px solid black;
        border-left: 1px solid black;
    `}
`

export const PeopleTbody = styled.tbody`
    ${()=>css`
        width: 100%;
    `}
`