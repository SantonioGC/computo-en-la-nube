import React from "react";
import ItemsTienda from "../imagenes/productos.json"
import Item from "./Item";



function ListarItems(){

    return (
        <div className='Lista items'>
            {
                ItemsTienda.map((producto, indice)=>{
                    return <Item key={producto.id} {...producto} /> 
                })
            }
        </div>
    )
}



export default ListarItems;
