import React from "react";
import ListarPatrocinadores from "./ListarPatrocinadores";
import { Link } from "react-router-dom";
function Hambrewe() {
    return (
        <div>
            <header>
                <div className="titulopat">
                    <h1> Patrocinadores </h1>
                        <div className="bot">
                    <Link to="/" >Regresar</Link>
                </div>

                </div>
            

            </header>
            <div>
                <ListarPatrocinadores />
            </div>
        </div>
    )
}

export default Hambrewe;