import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { CarritoContexto } from "./CarritoVoidtexto";
import '../css/item.css';

function Item({ id, nombre, precio, imgUrl }) {
  const [Carrito, setCarrito] = useContext(CarritoContexto);

  const MeteloAlCarrito = () => {
    setCarrito((ItemActual) => {
      const ItemEncontrado = ItemActual.find((item) => item.id === id);
      if (ItemEncontrado) {
        return ItemActual.map((item) => {
          if (item.id === id) {
            return { ...item, quantity: item.quantity + 1 };
          } else {
            return item;
          }
        });
      } else {
        return [...ItemActual, { id, nombre, quantity: 1, precio }];
      }
    });
  };

  const SacaloDelCarrito = (id) => {
    setCarrito((ItemActual) => {
      if (ItemActual.find((item) => item.id === id)?.quantity === 1) {
        return ItemActual.filter((item) => item.id !== id);
      } else {
        return ItemActual.map((item) => {
          if (item.id === id) {
            return { ...item, quantity: item.quantity - 1 };
          } else {
            return item;
          }
        });
      }
    });
  };

  const getCantidadPorId = (id) => {
    return Carrito.find((item) => item.id === id)?.quantity || 0;
  };

  const CantidadPorItem = getCantidadPorId(id);

  return (
    <div className="CajadeItem">
      <div>{nombre}</div>
      <img src={imgUrl} width={150} alt={nombre} />
      
      {CantidadPorItem > 0 && (
        <div className="Itemporintem">{CantidadPorItem}</div>
      )}

      <div className="Precio">${precio}</div>
      <button className="BotonItem" onClick={MeteloAlCarrito}>Agregar al carrito</button>

      {CantidadPorItem > 0 && (
        <button className="botoneliminar" onClick={() => SacaloDelCarrito(id)}>
          Sacalo del carrito
        </button>
      )}
    </div>
  );
}

export default Item;
