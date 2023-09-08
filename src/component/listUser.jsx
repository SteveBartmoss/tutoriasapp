import React from "react";

function ListUser(){
    return(
        <>
        <div>
            <h1>Lista de usuarios</h1>
            <div>
                <p>Marco</p>
                <a href="edituser">Editar</a>
            </div>
            <div>
                <p>Steve</p>
                <a href="edituser">Editar</a>
            </div>
            <div>
                <p>Kevin</p>
                <a href="edituser">Editar</a>
            </div>
            <div>
                <p>Enrique</p>
                <a href="edituser">Editar</a>
            </div>
        </div>
        </>
    );
}

export default ListUser;