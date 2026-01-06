import React, { useState } from 'react';
import '../css/Registro.css';
import { Link } from 'react-router-dom';
import ValidacionUsuario from './ValidacionRegistro';
import axios from 'axios';

// En nube (AWS) define REACT_APP_API_URL antes de compilar el build.
// Ejemplo: REACT_APP_API_URL=http://<IP_PUBLICA_EC2>:8082
const API = process.env.REACT_APP_API_URL || 'http://localhost:8082';

function Registrar() {
  const [valores, setValores] = useState({
    nombre: '',
    apellidos: '',
    correo: '',
    fecha: '',
    contrasena: ''
  });

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
      axios.post(`${API}/registrar`, valores)
        .then(res => {
          alert("Usuario registrado correctamente");
          console.log(res);

          setValores({
            nombre: '',
            apellidos: '',
            correo: '',
            fecha: '',
            contrasena: ''
          });
        })
        .catch(err => {
          console.error("Error al registrar:", err);
        });
    }else{
      alert("Correo invalido");
    }
  };

  return (
    <div className='pagina'>
      

      <head>
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />

      </head>

      <header>
        <div className='sexo'>
          <h1> Pagina de registro </h1>
        </div>

        <div className='regresatewe'>
          <Link to="/" className='regresar'>Regresar</Link>
        </div>
      </header>

    <div className='contenido'>
      <div className='formulario'>
        <h3> Ingresa tus datos</h3>
        <form onSubmit={Enviar}>
          <p>Nombre</p>
          <input
            type='text'
            name='nombre'
            value={valores.nombre}
            placeholder='Nombre'
            onChange={Poner}
            required
            className='controles'

          />
          {errores.nombre && <span className="texto-peligrocito">{errores.nombre}</span>}

          <p>Apellido</p>
          <input
            type='text'
            name='apellidos'
            value={valores.apellidos}
            placeholder='Apellidos'
            onChange={Poner}
            required
            className='controles'

          />
          {errores.apellidos && <span className="texto-peligrocito">{errores.apellidos}</span>}

          <p>Correo</p>
          <input
            type='email'
            name='correo'
            value={valores.correo}
            placeholder='Correo'
            onChange={Poner}
            required
            className='controles'

          />
          {errores.correo && <span className="texto-peligrocito">{errores.correo}</span>}

          <p>Fecha de nacimiento</p>
          <input
            type='date'
            name='fecha'
            value={valores.fecha}
            onChange={Poner}
            required
            className='controles'

          />
          {errores.fecha && <span className="texto-peligrocito">{errores.fecha}</span>}

          <p>Contraseña</p>
          <input
            type='password'
            name='contrasena'
            value={valores.contrasena}
            placeholder='contraseña'
            onChange={Poner}
            required
            className='controles'

          />
          {errores.contrasena && <span className="texto-peligrocito">{errores.contrasena}</span>}

          <label className="checkbox-container">
            <input type="checkbox" required />
            Acepto los términos y condiciones
          </label>

          <button className='botoncito' type="submit">Registrar</button>
        </form>
      </div>
    </div>
      <footer>
        <div className='pies'>
          <p>Al hacer clic en "Registrarte", aceptas nuestras Condiciones, la Política de privacidad y la Política de cookies. Es posible que te enviemos notificaciones por SMS, que puedes desactivar cuando quieras.</p>
        </div>
      </footer>



    </div>
  );
}

export default Registrar;
