import { DivHeader,Span } from './styles'

export default function Header(){
    return (
    <DivHeader>
            <Span href="/">
                Página Inicial
            </Span>
            <Span href="/Contatos">
                Cadastro de Contatos
            </Span>
    </DivHeader>
    )
}