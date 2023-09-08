import React from "react";

function Admuser(){
    return(
        <>
        <h1>Admin Usuarios</h1>
        <p>Nombres</p>
        <input type="text" placeholder="steve"/>
        <p>Apellido Paterno</p>
        <input type="text" placeholder="jobs"/>
        <p>Apellido Materno</p>
        <input type="text" placeholder="gate"/>
        <p>Correo electronico</p>
        <input type="text" placeholder="gate"/>
        <p>Password</p>
        <input type="password" placeholder="pasword"/>
        <p>Rol</p>
        <input type="text" placeholder="admin"/>
        <button type="button">Guardar</button>
        </>
    );
}

export default Admuser;