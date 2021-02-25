import React, { useEffect, useState } from 'react'

import Header from '../../Components/Header'
import Api from '../../Api'
import Produtos from '../../Components/Produtos'

const  Home = () => {

   const [Prod, setProdutos] = useState([])

   useEffect(async() => {
        const response = await  Api.get("/produtos")
        const res = response.data;
        setProdutos(res)

   }, [])


      
  return (<>
    <Header/>

  {Prod  &&  
      <Produtos Produ={Prod} /> 
}
   
     </>
  )
  
}

export default Home

