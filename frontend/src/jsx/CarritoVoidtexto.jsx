import React, { createContext, useState } from "react";


export const CarritoContexto = createContext(null);


function Voidtexto({children}){

const [Carrito, setCarrito] = useState([]);


return(
  <CarritoContexto.Provider value={[Carrito, setCarrito]}>
{children}
  </CarritoContexto.Provider>
)



}

export default Voidtexto;

