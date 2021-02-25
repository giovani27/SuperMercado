import React, { useState } from 'react'
import './style.css'
import Api from '../../Api'
import Card from '../Card'

const  Produtos = ( {AdicionarProduto,Produ} ) => {
    console.log(Produ)

    const [SelectedProdu, setSelectedProdu] = useState({})
    const removerProduto = (id) => {
        Api.delete(`/produtos/${id}`)
        window.location.reload()
      }
    
  return (<>
  
         <div className="container">
             <Card   Filtrado={Produ} removerProduto={removerProduto}
      setSelectedProdu={setSelectedProdu} />
         </div>
      </>
  )
  
}
export default Produtos

