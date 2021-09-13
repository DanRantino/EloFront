import React from 'react';
import ReactDOM from 'react-dom';

import App from './App';
import Contatos from './Contatos'
import Header from './components/Header'
import Wrapper from './styles/Wrapper'

import {
  BrowserRouter,
  Switch,
  Route,
} from "react-router-dom";

ReactDOM.render(
  <React.StrictMode>
    <Wrapper>
      <BrowserRouter>
        <Header/>
        <Switch>
          <Route path="/" component={App} exact />
          <Route path="/Contatos/:idContato" component={Contatos} />
          <Route path="/Contatos" component={Contatos} exact />
        </Switch>
      </BrowserRouter>
    </Wrapper>
  </React.StrictMode>,
  document.getElementById('root')
);

