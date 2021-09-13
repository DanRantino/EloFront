import axios from 'axios';
import { useState,useEffect,useCallback } from 'react';
import { DivHeader,
        PeopleRow,
        PeopleTable,
        PeopleThead,
        PeopleHead,
        PeopleTbody,
        WrapperPag } from './styles';

import CardPessoas from '../card-Pessoas'
import dotenv from 'dotenv';
dotenv.config();

var url =  process.env.API_URL

export default function ListPessoas(){
    const [Dados,setDados] = useState([])
    const api = useCallback(async () => {
            const data = await axios.get(`https://spring-elo-test.herokuapp.com/people?page=0&size=2`)
            setDados(data.data);
        },[])
    
    useEffect(() => {
        api();
    }, [api])

    if (Dados.length<0)
    {
        return <DivHeader>Carregando...</DivHeader>
    }
    return (
        <WrapperPag>
            <DivHeader>

                <PeopleTable>
                    <PeopleThead>
                        <PeopleRow>
                            <PeopleHead>
                                Nome
                            </PeopleHead>
                            <PeopleHead>
                                CPF
                            </PeopleHead>
                            <PeopleHead>
                                Data de Nascimento
                            </PeopleHead>
                            <PeopleHead>
                                Opções
                            </PeopleHead>
                        </PeopleRow>
                    </PeopleThead>
                    <PeopleTbody>
                        {
                            Dados.map((D,idx) => {
                                return (
                                    <CardPessoas key={idx} Dados={D} />
                                )
                            })
                        }       
                    </PeopleTbody>
                </PeopleTable>
            </DivHeader>
        </WrapperPag>
    );
}