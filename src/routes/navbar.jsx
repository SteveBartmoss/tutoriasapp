import React from "react";
import { Link } from "react-router-dom";

function NavBar(){
    return(
        <div className="menu">
            <ul>
                <li>
                    <Link to="/home">Home</Link>
                </li>
                <p>Amdin</p>
                <li>
                    <Link to="/createuser">Creacion de usuarios</Link>

                </li>
                <li>
                    <Link to="/adminuser">Admin usuarios</Link>

                </li>
                <li>
                    <Link to="/kardex">Captura de Kardex</Link>
                </li>
                <li>
                    <Link to="/consultas">Consultas</Link>
                </li>
            </ul>

            <ul>
                <p>Academia</p>
                <li>
                    <Link to="/jefes">Editar Jefes de Carrera</Link>
                </li>
                <li>
                    <Link>Seleccion de Calendario</Link>
                </li>
                <li>
                    <Link>Plan de estudios</Link>
                </li>
            </ul>

            <ul>
                <p>Tutores</p>
                <li>
                    <Link>Agregar y Editar Tutores</Link>
                </li>

                <li>
                    <Link>Asignar Materias</Link>
                </li>

                <li>
                    <Link>Datos Personales</Link>
                </li>
            </ul>

            <ul>
                <p>Alumnos</p>
                <li>
                    <Link>Agregar y Editar Alumnos</Link>
                </li>

                <li>
                    <Link>Ficha Medica y Psicologica</Link>
                </li>

                <li>
                    <Link>Datos Personales</Link>
                </li>
            </ul>

            <ul>
                <p>Grupos</p>

                <li>
                    <Link>Agregar y Editar Grupos</Link>
                </li>
            </ul>
        </div>
    );
}

export default NavBar;