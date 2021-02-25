import React, { useEffect, useState } from 'react'
import Api from '../../Api'
import Card from '../../Components/Card'
import Header from '../../Components/Header'
import { UseMercado } from '../../context'


const Cart = () => {
  const { Cart, setCart,CompraFull} = UseMercado()

 const removerProduto = (id) => {
  Api.delete(`/produtos/${id}`);
};
  useEffect( () => {
     const prod = localStorage.getItem('cart')
     if(prod){
      setCart(JSON.parse(prod))
     }

  }, [])

  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(Cart))

  }, [Cart])

const Remove = (data) => {
  const remo = Cart.filter(item =>  item._id !== data._id)
  setCart(remo)
  console.log(remo)
}



let row = []
const map = Cart &&  Cart.map(item => row.push(item.preco))
 const valortotal = row.reduce((a,b) => a + b,0)

let finalcompra = []
 const Comprar = async  () => {
  const map = Cart  && Cart.filter(item => item.quantidade === 0 || item.quantidade ===  null || item.quantidade < 0 )
  map  &&  map.map(item => removerProduto(item._id))
        const mapeado = Cart.map((item) => finalcompra.push(item) )
       for(let i = 0; i < finalcompra.length; i++){
        await  Api.put(`/produtos/${finalcompra[i]._id}`,finalcompra[i])
       }

   }


  return (<>
  <div>
    <Header show />
         <Card showquanti showbutton Filtrado={Cart} Remover={Remove} />

      <div style={{justifyContent: 'center', display: 'flex'}} >
         <h3>Preço Total R$:  {valortotal.toFixed(2)} </h3>
      <button type="button" class="btn btn-primary " style={{width: "100px" , marginLeft: '25px'}}
             onClick={()=> Comprar() }
            >Comprar</button>
      </div>

</div>
   </>
  )

}
export default Cart

