import React from "react";
import { Link } from "react-router-dom";

function NavUser(){
    return(
        <div>
            <ul>
                <li>
                    <Link>Crear Usuario</Link>
                </li>
                <li>
                    <Link>Editar usuarios</Link>
                </li>
            </ul>
        </div>
    );
}

export default NavUser;