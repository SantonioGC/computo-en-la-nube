import React, { useState } from "react";
import { Link, useNavigate } from 'react-router-dom';
import ValidacionUsuario from './ValidacionLogin';
import axios from 'axios';
import '../css/Acceder.css'

// En nube (AWS) define REACT_APP_API_URL antes de compilar el build.
// Ejemplo: REACT_APP_API_URL=http://<IP_PUBLICA_EC2>:8082
const API = process.env.REACT_APP_API_URL || 'http://localhost:8082';


function Login() {
  const [valores, setValores] = useState({
    correo: '',
    contrasena: ''
  });

  const navegar = useNavigate();
  const [errores, setErrores] = useState({});

  const Poner = (event) => {
    setValores(prev => ({
      ...prev,
      [event.target.name]: event.target.value
    }));
  };

  const Enviar = (event) => {
    event.preventDefault();

    const validaciones = ValidacionUsuario(valores);
    setErrores(validaciones);

    const sinErrores = Object.values(validaciones).every(v => v === "");

    if (sinErrores) {
      axios.post(`${API}/acceder`, valores)
        .then(res => {
          if (res.data.status === "ok") {
            localStorage.setItem("sesionIniciada", "true");
            localStorage.setItem("usuarioNombre", res.data.nombre); // <-- nuevo
            navegar('/');
          } else {
            alert(res.data.mensaje);
          }
        })
        .catch(err => {
          console.error("Error al acceder:", err);
          alert("Error de conexión al servidor");
        });
    }
  };

  return (
    <div>
      <header>
        <div className="titulon">
          <h1>Login de usuario</h1>

        </div>
        <Link className="volver" to="/">Regresar</Link>
      </header>

      <div className="login">

        <h3> Ingresa tus datos</h3>


        <form onSubmit={Enviar}>
          <p>Correo</p>
          <input
            type="email"
            name="correo"
            placeholder="correo electrónico"
            onChange={Poner}
            required
            className='controls'
          />
          {errores.correo && (
            <span className="texto-peligrocito">{errores.correo}</span>
          )}

          <p>Contraseña</p>
          <input
            type="password"
            name="contrasena"
            placeholder="contraseña"
            onChange={Poner}
            required
            className='controls'

          />
          {errores.contrasena && (
            <span className="texto-peligrocito">{errores.contrasena}</span>
          )}

          <br />
          <button className="botonsote" type="submit">Ingresar</button>
        </form>
      </div>


    </div>
  );
}

export default Login;
