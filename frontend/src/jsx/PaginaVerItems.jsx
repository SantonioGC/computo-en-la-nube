import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { CarritoContexto } from "./CarritoVoidtexto";
import Item from "./Item";
import "../css/PaginaVerItems.css";

function PaginaVerItems() {
  const sesionActiva = localStorage.getItem("sesionIniciada") === "true";
  const [Carrito] = useContext(CarritoContexto);

  const [productos, setProductos] = useState([]);
  const [busqueda, setBusqueda] = useState("");
  const [filtrados, setFiltrados] = useState([]);

  const cantidad = Carrito.reduce((acc, item) => acc + item.quantity, 0);

  useEffect(() => {
    const xhr = new XMLHttpRequest();
    xhr.open("GET", "/imagenes/productos.json", true);
    xhr.onload = () => {
      if (xhr.status === 200) {
        const datos = JSON.parse(xhr.responseText);
        setProductos(datos);
        setFiltrados(datos);
      }
    };
    xhr.send();
  }, []);

  useEffect(() => {
    const resultados = productos.filter((p) =>
      p.nombre.toLowerCase().includes(busqueda.toLowerCase())
    );
    setFiltrados(resultados);
  }, [busqueda, productos]);

  if (!sesionActiva) {
    return (
      <div className="sinSesion">
        <h1>No has iniciado sesión</h1>
        <p>Por favor inicia sesión para ver los productos.</p>
        <Link className="volver1" to="/sesion">Ir al inicio de sesión</Link>
        <p className="sincuenta">¿No tienes cuenta?</p>
        <Link className="volver2" to="/registrar">Registrarse</Link>
      </div>
    );
  }

  return (
    <div className="paginaItems">
      <header className="headerCarrito">
        <h1>Agrega productos al carrito</h1>
        <div className="accionesCarrito">
          <Link className="botonVolver" to="/">Regresar</Link>
          <Link className="botonContinuar" to="/carrito">Continuar con la venta</Link>
        </div>
      </header>

      <div className="busquedaCarrito">
        <input
          type="text"
          placeholder="Buscar producto..."
          value={busqueda}
          onChange={(e) => setBusqueda(e.target.value)}
        />
        <div className="resumenCarrito">
          Productos en carrito: <span className="carritoCantidad">{cantidad}</span>
        </div>
      </div>

      <div className="listaProductos">
        {filtrados.map((producto) => (
          <Item key={producto.id} {...producto} />
        ))}
      </div>
    </div>
  );
}

export default PaginaVerItems;
