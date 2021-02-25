import React, { createContext, useContext, useState } from 'react'

const MercadoContext = createContext()

export default function MercadoProvider({children}) {
    const [Cart, setCart] = useState([])
    const [Editar, setEditar] = useState({})
    const [CompraFull, setCompraFull] = useState([])




    return (
        <MercadoContext.Provider  
        value={{
            Cart,setCart,
            Editar, setEditar,
            CompraFull, setCompraFull

        }}>

  {children}
        </MercadoContext.Provider>
    )
}

export function UseMercado(){
    const mercadinho = useContext(MercadoContext)
    const {Cart, setCart,Editar, setEditar, CompraFull, setCompraFull} = mercadinho
    return {Cart, setCart,Editar, setEditar,CompraFull, setCompraFull}
}