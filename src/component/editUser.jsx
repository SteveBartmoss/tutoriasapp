import React from "react";

function EditUser(){
    return(
        <>
            <div>
                <p>Nombres</p>
                <input type="text" placeholder="steve" />
                <p>Apellido Paterno</p>
                <input type="text" placeholder="jobs" />
                <p>Apellido Materno</p>
                <input type="text" placeholder="gate" />
                <p>Correo electronico</p>
                <input type="text" placeholder="gate" />
                <p>Password</p>
                <input type="password" placeholder="pasword" />
                <p>Rol</p>
                <input type="text" placeholder="admin" />
                <button type="button">Guardar cambios</button>
            </div>
        </>
    );
}

export default EditUser;