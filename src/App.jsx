import React from 'react'
import NavBar from './components/NavBar'
import ItemListContainer from './components/ItemListContainer'
import ItemCount from './components/ItemCount'
import ItemDetailContainer from './components/ItemDetailContainer'
import ItemDetail from './components/ItemDetail'


function App() {
  
  return (
   
  <div className="container mt-5">
     <NavBar/>
      <br />
     <ItemListContainer presentacion="PROOVEDOR,Ventas por mayor y por menor,Consultas mediante nuestras redes sociales,Precios accesibles y promociones dentro del mercado de Pc, Electrodomesticos, Artefactos electronicos, etc." />
     <ItemCount className="container"/>
     <ItemDetailContainer/>
  
   </div>
  )
}

export default App;
