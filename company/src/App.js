import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom'

import Rodape from './componentes/rodape'
import Cabecalho from './componentes/cabecalho'
import Inicio from './componentes/inicio'
import Servicos from './componentes/servicos'
import Portfolio from './componentes/portfolio'
import Precos from './componentes/precos'
import Contatos from './componentes/contatos'

//Área Administrativa
import Admin from './admin/admin'
import Login from './admin/login'

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Cabecalho />

        <Route path = '/' exact component ={Inicio}/>
        <Route path = '/servicos' component ={Servicos} />
        <Route path = '/portfolio' component ={Portfolio} />
        <Route path = '/precos' component ={Precos} />
        <Route path = '/contato' component = {Contatos} />

        <Route path = '/admin' component ={Admin} />
        <Route path = '/login' component ={Login} />
        <Rodape />
      </div>
    </BrowserRouter>
  );
}

export default App;
