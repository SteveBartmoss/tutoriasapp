import React from "react";
import ListKardex from "../component/listKardex";

function Kardex(){
    return(
        <>
        <div>
            <h1>Captura de Kardex</h1>
            <div>
                <h1>Busqueda por numero de control</h1>
                <input type="text" placeholder="19012397" />
            </div>
            <ListKardex />
        </div>
        </>
    );
}

export default Kardex;