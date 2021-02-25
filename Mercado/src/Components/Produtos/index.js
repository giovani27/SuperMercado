import React, { useEffect, useState } from 'react'
import './style.css'
import Modalprodu from '../ModalProdu'
import { UseMercado } from '../../context'
import Card from '../Card'


const Produtos = ({ Produ }) => {
  const { Cart,Editar, setEditar } = UseMercado()
  const [Ofertas, setOfertas] = useState([])

  const [FiltroNome, setFiltroNome] = useState('')
  const [FiltroCategoria, setFiltroCategoria] = useState('')


  const filtronome = (e) => {
    setFiltroNome(e.target.value)
    document.getElementById("filtro").style.display = "block"
    document.getElementById("filtroCate").style.display = "none"

  }
  const filtroCat = (e) => {
    setFiltroCategoria(e.target.value)
    document.getElementById("filtro").style.display = "none"
    document.getElementById("filtroCate").style.display = "block"

  }



  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(Cart))

  }, [Cart])

  useEffect(() => {
    const ofertas = Produ?.prod?.filter(ofert => ofert.oferta === true)
    setOfertas(ofertas)
  }, [Produ])


console.log(Ofertas)
  const Filtrado = Produ?.prod?.filter(c => c.nome.toLowerCase().includes(FiltroNome.toLowerCase()))
  const FiltradoCat = Produ?.prod?.filter(c => c.categoria.toLowerCase().includes(FiltroCategoria.toLowerCase()))

  return (<>

    <Modalprodu  />
    <h1 style={{ textAlign: 'center' }} >Ofertas Desta Semana</h1>

    {Ofertas &&
      <Card Filtrado={Ofertas} />
    }

    <h1 style={{ marginTop: "25px", textAlign: 'center' }} >Produtos</h1>

    <div style={{ flexDirection: 'row', display: 'flex', justifyContent: 'space-between' }} >
      <input onChange={filtronome} type="text" placeholder="Filtrar por Nome" />
      <select value={FiltroCategoria} onChange={filtroCat} >
        <option >Alimentos</option>
        <option >Carnes</option>
        <option >Hortifruti</option>
        <option >Limpeza</option>
        <option >Bebidas</option>
        <option >Higiene</option>
        <option >Domésticas</option>

      </select>
    </div>

    <div id="filtro" style={{ display: 'block' }} >
      <Card Filtrado={Filtrado}/>

    </div>

    <div id="filtroCate" style={{ display: "none" }}>
      <Card FiltradoCat={FiltradoCat}
        Cart={Cart}
      />

    </div>
  </>
  )

}
export default Produtos

