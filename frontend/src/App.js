import React from "react";
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Registrar from "./javascript/Registrar";

import Acceder from "./javascript/Acceder"

import Index from "./javascript/index";

import Contacto from "./javascript/Contacto";
import PaginaVerItems from "./jsx/PaginaVerItems";
import MeteloAlCarrazo from "./jsx/Carrito";
import Voidtexto from "./jsx/CarritoVoidtexto";

import Keioncitas from "./jsx/K-on";

import Tengohambrewe from "./patrocinio/Tengohambrewe";



function App() {
  return (
    <Voidtexto>


<BrowserRouter>
      <Routes>
        {/* ruta principal del archivo */}
        <Route path="/" element={<Index />}> </Route>
        {/* ruta para registrar el usuario */}
        <Route path="/registrar" element={<Registrar />}> </Route>
        {/* ruta para el inicio de sesion */}
        <Route path="/sesion" element={<Acceder />}> </Route>
        {/* ruta para el contacto con la empresa */}
        <Route path="/contacto" element={<Contacto/>}> </Route>
        {/* ruta para ver los items */}
        <Route path="/items" element={<PaginaVerItems/>}> </Route>
        {/* ruta para el carrito */}
        <Route path="/carrito" element={<MeteloAlCarrazo/>}></Route>
        {/* ruta para k-on */}

        <Route path="/keioncitas" element={<Keioncitas/>}></Route>
        {/* ruta para los patrocinadores */}
        <Route path="/patrocinadores" element={<Tengohambrewe/>}></Route>
      </Routes>

    </BrowserRouter>
    </Voidtexto>

  );
}

export default App;
