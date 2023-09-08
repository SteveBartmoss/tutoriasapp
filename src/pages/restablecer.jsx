import React, { useState } from "react";

function Recuperar(){
    
    const [correo, setCorreo]=useState("");

    const onCorreoChange=(event)=>{
        setCorreo(event.target.value);
    }

    return(
        <>
        <div>
            <h1>Restablecer password</h1>
            <p>Correo electronico</p>
            <input value={correo} type="text" placeholder="example@example.com"
            onChange={(event)=>{onCorreoChange(event)}}/>
            <button type="button">Recuperar</button>
        </div>
        </>
    );
}

export default Recuperar;