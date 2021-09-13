
import { useState,useEffect} from "react";

import { useParams } from "react-router-dom";

import {InputText,
        Button,
        ButtonAdd,
        DivButtons,
        DivContatos,
        ButtonRemove,
        DivFormContatos,
        DivInputContatos} from './styles/Contato/styles.js'

import {TiTimes} from 'react-icons/ti'

import WrapperPagina from './styles/WrapperPagina'
import axios from "axios";
import dotenv from 'dotenv';
dotenv.config();

var url =  process.env.API_URL

function Contatos() {


  const [nome,setNome] = useState('Daniel')
  const [cpf, setCpf] = useState('927.603.530-36')
  const [dataNasc, setdataNasc] = useState('21/10/1997')

  const [Contatos, setContato] = useState([{nome:"qweqwe",telefone: "87897987",email: "daniel@email.com"}])

  const [Pessoa , setPessoa] = useState({nome, cpf, dataNasc, listaContatos:Contatos})


  let {idContato} = useParams();

  function atualizaState()
  {
    Pessoa.nome = nome
    Pessoa.cpf =cpf
    Pessoa.dataNasc = dataNasc
    Pessoa.listaContatos = [...Contatos]
    setPessoa({...Pessoa})
    setPessoa({...Pessoa})
    setPessoa({...Pessoa})
    setPessoa({...Pessoa})
  }

  function SalvaContato(e){
    atualizaState();
    try
    {
      if(idContato!=undefined)
      {
        axios.put(url+'/people'+idContato,Pessoa).catch(e=>alert('Erro ao salvar o usuário'))
      }
      else
      {
        axios.post(url+'/people',Pessoa).catch(e=>alert('Erro ao salvar o usuário'))
        alert('Salvo com sucesso!')
      }
    }
    catch (e)
    {
      alert('Erro')
    }
    
  }
  
  function AdicionarContato(){
    var obj = {nome:"",telefone: "",email: ""}
    setContato([...Contatos,obj]);
  }

  const RemoverContato = (e) =>{
    if (Contatos.length >1)
    {
      const arr = Contatos.filter((Contato,i)=> i !== e)
      setContato(arr)
    }
  }

  useEffect(() => {
  },[])


  return (
    <WrapperPagina >
      <form onSubmit={SalvaContato} onChange={atualizaState}>
        <span>Nome: </span>
        <InputText type="text" id="nome"
          value={nome}
          onChange={(e)=>setNome(e.target.value)}
          title="Digite o nome Completo"
          placeholder="Nome Completo"
        />
        <span>Data de Nascimento: </span>
        <InputText type="date" id="dataNasc" title="Data no formato: dd/mm/aaaa"
        value={dataNasc}
        onChange={(e)=>{
          setdataNasc(e.target.value)
          atualizaState()}}
        />
        <span>CPF:</span>
        <InputText type="text" id="cpfPessoa"
            pattern="\d{3}\.\d{3}\.\d{3}-\d{2}"
            title="Digite um CPF no formato: xxx.xxx.xxx-xx"
            value={cpf}
            onChange={(e)=>setCpf(e.target.value)}

            />
        <DivContatos>
          {
            Contatos.map((Contato,key)=>(
              <DivFormContatos key={key}>
                <DivInputContatos>
                <span>Nome do contato: </span>
                <InputText type="text" 
                title="Digite o nome do contato"
                placeholder="Nome do Contato"
                value={Contatos[key].nome}
                onChange={(e)=>{
                  Contatos[key].nome = e.target.value;
                  setContato([...Contatos])
                }}

                />
                </DivInputContatos>
                <DivInputContatos>
                <span>Telefone do contato: </span>
                <InputText type="text" 
                title="Digite o telefone do contato"
                placeholder="Telefone do Contato"
                value={Contatos[key].telefone}
                onChange={(e)=>{
                  Contatos[key].telefone = e.target.value;
                  setContato([...Contatos])
                }}
                />
                </DivInputContatos>
                <DivInputContatos>
                <span >Email do contato: </span>
                <InputText type="email" 
                title="Digite o Email do contato"
                placeholder="Email do Contato"
                value={Contatos[key].email}
                onChange={(e)=>{
                  Contatos[key].email = e.target.value;
                  setContato([...Contatos])
                }}
                />
                </DivInputContatos>
                <DivInputContatos>
                  <ButtonRemove onClick={() => RemoverContato(key)}><TiTimes/></ButtonRemove>
                </DivInputContatos>
              </DivFormContatos>
            ))
          }
          </DivContatos>
        <DivButtons>
          <Button onSubmit={SalvaContato}>Enviar</Button>
          <ButtonAdd onClick={AdicionarContato}>Adicionar Contato</ButtonAdd>
        </DivButtons>
          </form>
        
    </WrapperPagina>
  )
}

export default Contatos;