import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from 'axios';
import ValidacionContacto from "./ValidacionContacto";
import '../css/Contacto.css';

// En nube (AWS) define REACT_APP_API_URL antes de compilar el build.
// Ejemplo: REACT_APP_API_URL=http://<IP_PUBLICA_EC2>:8082
const API = process.env.REACT_APP_API_URL || 'http://localhost:8082';

function Contacto() {
  const [valores, setValores] = useState({
    correo: '',
    contacto: ''
  });

  const [errores, setErrores] = useState({});
  const [sesionActiva, setSesionActiva] = useState(true);
  const navigate = useNavigate(); 

  useEffect(() => {
    const sesion = localStorage.getItem("sesionIniciada") === "true";
    setSesionActiva(sesion);
  }, []);

  const Poner = (event) => {
    setValores(prev => ({
      ...prev,
      [event.target.name]: event.target.value
    }));
  };

  const Enviar = (event) => {
    event.preventDefault();

    const validaciones = ValidacionContacto(valores);
    setErrores(validaciones);

    const sinErrores = Object.values(validaciones).every(v => v === "");

    if (!sinErrores) return;

    axios.post(`${API}/contacto`, valores)
      .then(() => {
        alert("Contacto enviado correctamente");
        navigate("/");
      })
      .catch(err => {
        console.error("Error al enviar contacto:", err);
        alert("Ocurrió un error al enviar el contacto.");
      });
}  

  return (
    <div>
      <header>
        <div className="Titulo">
          <h1>Contacto</h1>
        </div>
        <Link className="degeso" to="/">Regresar</Link>
      </header>

      {!sesionActiva ? (
        <div className="nopuedes">
          <p> Debes iniciar sesión para usar el formulario de contacto.</p>
          <Link className="ultimo" to="/sesion">Iniciar sesión</Link>
        </div>
      ) : (
        <div className="formato">
          <form onSubmit={Enviar}>
            <p>Ingresa tu correo</p>
            <input
              type="email"
              placeholder="Correo electrónico"
              name="correo"
              onChange={Poner}
              required
              className='controles'
            />
            {errores.correo && <span className="texto-peligrocito">{errores.correo}</span>}

            <p>Coméntanos algo</p>
            <input
              type="text"
              placeholder="Comentario"
              name="contacto"
              onChange={Poner}
              required
              className='controles'
            />

            <p>Número de contacto: +52 66 7775 1418</p>
            <button className="botonito" type="submit">Enviar</button>
          </form>
        </div>
      )}
    </div>
  );
}

export default Contacto;
