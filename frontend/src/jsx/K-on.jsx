import React from "react";
import { Link } from "react-router-dom";
import '../css/HTT.css'

function Keioncitas() {
    return (
        <div>
            <div className="contenidito">

                <header>
                    <div className="saigon">
                    <h1>けいおん!</h1>

                    </div>
                </header>

                <img
                    src="https://storage.modworkshop.net/mods/images/preview_44459_1501692188_a630d6b00d939df6229cf84aa7991911.gif"
                    alt="Gif de K-On"
                    className="HTT"
                />

                <div className="videito">
                    <p> Aqui un video de las k-oncitas </p> <br/>
                    <br />
                </div>

                <div>
                    <Link to="/">Regresar</Link>
                </div>
            </div>
   

        </div>
    );
}

export default Keioncitas;
