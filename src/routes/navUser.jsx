import React from "react";
import { Link, Outlet } from "react-router-dom";

function NavUser(){
    return(
        <>
        <div>
            <ul>
                <li>
                    <Link to="/create">Crear Usuario</Link>
                </li>
                <li>
                    <Link to="#">Editar usuarios</Link>
                </li>
            </ul>
        </div>
        </>
    );
}

export default NavUser;