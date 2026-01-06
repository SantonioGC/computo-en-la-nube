import React, { useContext } from "react";
import { CarritoContexto } from "./CarritoVoidtexto";
import { Link } from "react-router-dom";
import "../css/Carrito.css";

function MeteloAlCarrazo() {
  const [Carrito, setCarrito] = useContext(CarritoContexto);

  const cantidad = Carrito.reduce((acumulador, item) => {
    return acumulador + item.quantity;
  }, 0);

  const PrecioTotal = Carrito.reduce((acumulador, item) => {
    const cantidad = parseInt(item.quantity, 10) || 0;
    const precio = parseFloat(item.precio) || 0;
    return acumulador + cantidad * precio;
  }, 0);

  return (
    <div className="pagina-carrito">
      <header className="carrito-header">
        <h1>Página de cobro</h1>
      </header>

      <div className="carrito-resumen">
        <p><strong>Items en el carrito:</strong> {cantidad}</p>
        <p><strong>Costo total:</strong> ${PrecioTotal.toFixed(2)}</p>
      </div>

      <section className="carrito-lista">
        <h2>Productos en el carrito:</h2>
        <ul>
          {Carrito.map((item, index) => (
            <li key={index}>
              <span className="producto-nombre">{item.nombre}</span> —{" "}
              <span className="producto-cantidad">{item.quantity}</span> unidad(es)
            </li>
          ))}
        </ul>
      </section>

      <div className="carrito-acciones">
        <Link className="boton-regreso" to="/">Regresar</Link>
      </div>
    </div>
  );
}

export default MeteloAlCarrazo;
