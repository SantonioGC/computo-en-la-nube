import React from "react";
import Sexo from "../imagenes/patrocinadores.json"
import Patrocinadores from "./Patrocinadores";



function ListarPatrocinadores(){
    return (
        <div className="patrocinamewe">
            {
                Sexo.map((patrocinadores, indice)=>{
                    return <Patrocinadores key={patrocinadores.id} {...patrocinadores} />
                })
            } 

        </div>
    )
}

export default ListarPatrocinadores;