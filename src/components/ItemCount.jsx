import React, { Fragment } from 'react'

const ItemCount = () => {

    const [count, setCount ] = React.useState(0);
    
    const handleAddProduct = () => {
        setCount(count + 1);
    }
    const handleRemoveProduct = () => {
        setCount(count - 1);
    }

    return(
        <Fragment >
            <h2>Cantidad de productos: {count} </h2>
            <button onClick={handleAddProduct}>Adicionar</button>
            <button onClick={handleRemoveProduct}>Eliminar</button>
        </Fragment>
    )

}




export default ItemCount;