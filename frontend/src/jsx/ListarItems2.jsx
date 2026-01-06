import React from "react";
import ItemsTienda from "../imagenes/productos.json";
import Item2 from "./Item2";

// Función para barajar el array
function mezclarArray(array) {
  const copia = [...array];
  for (let i = copia.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [copia[i], copia[j]] = [copia[j], copia[i]];
  }
  return copia;
}

function ListarItems2() {
  const aleatorios = mezclarArray(ItemsTienda).slice(0, 6); 
  return (
    <div className='Lista items'>
      {aleatorios.map((producto) => (
        <Item2 key={producto.id} {...producto} />
      ))}
    </div>
  );
}

export default ListarItems2;
