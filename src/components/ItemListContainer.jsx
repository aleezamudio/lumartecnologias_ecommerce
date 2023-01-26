import React, { Fragment } from 'react';
import { getFech } from './ItemList';
import { useState, useEffect } from 'react';


function ItemListContainer({greeting}){
  const[productos, setProductos] = useState([])
  const[loading, setLoading] = useState(true)


  useEffect(() => {
    getFech
    .then(resp => setProductos(resp))
    .catch(err => console.log(err))
    .finally(()=>setLoading(false))
},[])


    function handlerClick(){
        setLoading(!loading)
    }
    console.log(productos);

    return(
        <div>
            <p>
                .
            </p>
            {greeting}

            { loading ? <h2>Cargando...</h2>: 
            productos.map((producto) => <li key={producto.id}>{producto.categoria}</li>) }
            <button onClick={handlerClick}>click</button>
            
        </div>
    )
}


export default ItemListContainer;