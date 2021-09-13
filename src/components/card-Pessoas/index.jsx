import { useState,useEffect } from 'react';
import { PeopleRow,PeopleData,ButtonContatos,ContatctRow,ContatctData,ContatctHead } from './styles';

export default function CardPessoas({Dados}){

function mostraContatos()
    {
        MostraContatos === false? setmostraContatos(true) : setmostraContatos(false)
    }

    const Editar = () => window.location.href=`/Contatos/${Dados.id}`

    const [MostraContatos, setmostraContatos] = useState(true)


    useEffect(() => {
    }, [Dados])


    return (
        <>
            <PeopleRow>
                <PeopleData>
                    <div>
                        {Dados.nome}
                    </div>
                </PeopleData>
                <PeopleData>
                    <div>
                        {Dados.cpf}
                    </div>
                </PeopleData>
                <PeopleData>
                    <div>
                        {Dados.dataNasc}
                    </div>
                </PeopleData>
                <PeopleData>
                    <div>
                        <ButtonContatos onClick={mostraContatos}>Contatos</ButtonContatos>
                        <ButtonContatos onClick={Editar}>Editar</ButtonContatos>
                    </div>
                </PeopleData>
            </PeopleRow>
            <ContatctRow hidden={MostraContatos}>
                
                <ContatctHead>
                    <div>
                        Nome do contato
                    </div>
                </ContatctHead>
                <ContatctHead>
                    <div>
                        Telefone do contato
                    </div>
                </ContatctHead>
                <ContatctHead>
                    <div>
                        Email do contato
                    </div>
                </ContatctHead>
                <ContatctHead>
                    <div>
                    </div>
                </ContatctHead>
            </ContatctRow>
            {
                Dados.listaContatos.map((contato,idx)=>{
                    return(<ContatctRow key={idx} hidden={MostraContatos}>
                        {
                            Object.values(contato).map((cont,i)=>{
                                if(contato['id']===cont)
                                {
                                    return (                                    
                                    <ContatctData key={i}>
                                        <div>
                                        </div>
                                    </ContatctData>
                                    )
                                }
                                return(
                                    <ContatctData key={i}>
                                        <div>
                                            {cont}
                                        </div>
                                    </ContatctData>
                                )
                            })
                        }
                    </ContatctRow>)
                })
            }
        </>
    )
}