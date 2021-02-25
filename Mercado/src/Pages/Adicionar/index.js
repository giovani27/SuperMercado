import React, { useState } from 'react'

import Header from '../../Components/Header'
import Api from '../../Api'

const Adicionar = () =>  {

   const [Form, setForm] = useState({
     nome: '',
     preco: '',
     url: '',
     categoria: '',
     oferta: false,
     quantidade: '',
   })


   const Adicionar = async () => {
      if(Form.nome !== "" && Form.preco !== "" && Form.url !== "" && Form.categoria !== "" && Form.oferta !== ""){
         await  Api.post("/produtos" ,Form)
         alert("Produto Cadastrado")
         setForm({
          nome: '',
          preco: '',
          url: '',
          categoria: '',
          oferta: false,
        })
      }else {
        alert("Preencha Todos dados")
      }
   }
  
      
  return (<>
     <Header show />
      <div style={{position: 'absolute',left:"30%", top:'20%', height: "100%", width:'500px'}}>
      <form  onSubmit={(e) =>  e.preventDefault()} >
  <div className="form-col">
    <div className="col-auto ">
      <label htmlFor="inputNome">Nome do Produto</label>
      <input type="text" value={Form.nome} className="form-control" id="inputNome" onChange={(e)=> setForm({...Form,nome: e.target.value})} placeholder="Nome do produto"/>
    </div>
    <div className="row">
    <div className="col-5 mt-3 ml-3">
      <label htmlFor="inputPreco">Preço</label>
      <input type="number" value={Form.preco} className="form-control" onChange={(e)=> setForm({...Form,preco: e.target.value})} id="inputPreco" placeholder="Preço do Produto"/>
      </div>
    </div>
  </div>
  <div className="col-auto mt-3">
    <label htmlFor="inputUrl">Url Imagem</label>
    <input type="text" value={Form.url} className="form-control" id="inputUrl" onChange={(e)=> setForm({...Form,url: e.target.value})} placeholder="URL Imagem do Produto"/>
  </div>
  <div className="col-auto mt-3">
  <label htmlFor="inputUrl">Categoria Produto</label>
      <select id="inputState" value={Form.categoria} onChange={(e)=> setForm({...Form,categoria: e.target.value})} className="form-control">

        <option >Alimentos</option>
        <option >Carnes</option>
        <option >Hortifruti</option>
        <option >Limpeza</option>
        <option >Bebidas</option>
        <option >Higiene</option>
        <option >Domésticas</option>

      </select>
  </div>
  <div className="col-auto mt-3">
    <div className="form-check">
      <input className="form-check-input" value={Form.oferta} onClick={()=> setForm({...Form, oferta: !Form.oferta})} type="checkbox" id="gridCheck"/>
      <label className="form-check-label" htmlFor="gridCheck">
        Oferta?
      </label>
    </div>
  </div>
  <div className="col-auto mt-3" >
  <button  type="submit" className="btn btn-primary" value="Submit" onClick={Adicionar} >Adicionar</button>
  </div>
</form>

      </div>
      </>
  )
  
}

export default Adicionar