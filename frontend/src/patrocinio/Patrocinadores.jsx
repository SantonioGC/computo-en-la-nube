import React from "react";
import './aaaa.css'
function Patrocinadores({id, nombre, imgUrl}) {
    return (
        <div className="sox">

      
        <div className="patrocinadores">
            <div> {nombre} </div>
            <img src={imgUrl} width="170"/> <br/>

        </div>
          </div>
    )


}

export default Patrocinadores;