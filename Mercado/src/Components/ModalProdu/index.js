import React, { useEffect, useState } from 'react';

import Api from '../../Api'
import { UseMercado } from '../../context'

const ModalProdu = ( ) => {
  const {Editar } = UseMercado()

  console.log(Editar)
  
  const [Form, setForm] = useState({
    nome: Editar.nome,
    preco: Editar.preco,
    url: '',
    categoria: '',
    quantidade: '',
    oferta: false
  })

  useEffect(() => {
    setForm(
   Editar
    )
  }, [Editar])


  const Editarproduto = async () => {
    if(Form.nome !== "" && Form.preco !== "" && Form.url !== "" && Form.categoria !== "" && Form.quantidade !== "" && Form.oferta !== ""){

   await  Api.put(`/produtos/${Editar._id}`,Form)
    window.location.reload()
    }else {
      alert("Preencha Todos dados")
    }
  }

  return (
    <div class="modal fade" id="modal-filme">
      <div class="modal-dialog" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="exampleModalLabel">Modal title</h5>
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body">
            <div>
              <form onSubmit={(e) => e.preventDefault()} >
                <div className="form-col">
                  <div className="col-auto ">
                    <label htmlFor="inputNome">Nome do Produto</label>
                    <input type="text" value={Form.nome} className="form-control" id="inputNome" onChange={(e) => setForm({ ...Form, nome: e.target.value })} placeholder="Nome do produto" />
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
                  <input type="text" value={Form.url} className="form-control" id="inputUrl" onChange={(e) => setForm({ ...Form, url: e.target.value })} placeholder="URL Imagem do Produto" />
                </div>
                <div className="col-auto mt-3">
                  <label htmlFor="inputUrl">Categoria Produto</label>
                  <select id="inputState" value={Form.categoria} onChange={(e) => setForm({ ...Form, categoria: e.target.value })} className="form-control">

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
                    <input className="form-check-input" checked={Form.oferta} onClick={() => setForm({ ...Form, oferta: !Form.oferta })} type="checkbox" id="gridCheck" />
                    <label className="form-check-label" htmlFor="gridCheck">
                      Oferta?
      </label>
                  </div>
                </div>
                <div className="col-auto mt-3" >
                  <button type="submit" className="btn btn-primary" onClick={()=> Editarproduto()} value="Submit" >EDITAR</button>
                </div>
              </form>

            </div>
          </div>
          <div class="modal-footer">

          </div>
        </div>
      </div>
    </div>
  );
};

export default ModalProdu;
