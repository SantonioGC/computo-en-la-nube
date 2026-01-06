import React from "react";
import { Link } from "react-router-dom";
import '../css/Caja_Items.css'

function Items2({ id, nombre, precio, imgUrl }) {

    return (
        <div className="items2">
            <div>{nombre}</div>
            <img src={imgUrl} width="100" /><br />
            <Link to="/items">Agregar al carrito</Link>

        </div>
    )

}


export default Items2;