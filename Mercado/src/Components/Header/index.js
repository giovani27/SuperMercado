import React, { useState } from 'react'
import {Icon} from '@material-ui/core'
import { UseMercado } from '../../context'
import { NavLink } from 'react-router-dom';

export default function Header({show}) {
  const { Cart, setCart} = UseMercado()

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
  
    <div className="collapse navbar-collapse" id="conteudoNavbarSuportado">
      <ul className="navbar-nav mr-auto">
        <li className="nav-item active">
          <a className="nav-link" href="/">Produtos <span className="sr-only">(página atual)</span></a>
        </li>
        {!show &&   <li className="nav-item">
          <a className="nav-link" href="/Adicionar">Adicionar</a>
        </li> }
       
      </ul>
    </div>
   {!show && <NavLink to="/cart" activeClassName="active" className="nav-item">
    <Icon> shopping_cart</Icon>
    <span style={{position: 'relative', fontSize: "20px" , fontWeight: "bold" ,right: '5px', top: "10px", color: 'gray' }} > {Cart.length} </span>
    </NavLink> }

    
  </nav>
  
  )
  
}

