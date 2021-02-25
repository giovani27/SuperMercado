import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Adicionar from './Pages/Adicionar'
import Cart from './Pages/Cart'
import  MercadoProvider from './context/index'

import {BrowserRouter, Switch, Route} from 'react-router-dom'

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter> 
     <Switch>
      <MercadoProvider>
     <Route path="/" exact={true} component={App} />
     <Route path="/Adicionar" exact={true} component={Adicionar} />
     <Route path="/cart" exact={true} component={Cart} />
     </MercadoProvider>
     </Switch>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);


