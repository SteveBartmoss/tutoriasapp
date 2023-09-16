import React, { useEffect, useState } from "react";
import { getUsers } from "../helpers/userApi";

function AdminUser(){

    const [usuarios,setUsuarios]=useState([]);

    const loadUsers= async()=>{
        const response=await getUsers();
        console.log(response);
        setUsuarios(response.data);
    }

    useEffect(()=>{
        loadUsers();
    },[])

    return(
        <>
        <h1>Lista de usuarios</h1>
        {
            usuarios.map(user=>(
                <div key={user.idlogin}>
                    <h2>{user.usuario}</h2>
                    <h2>{user.nombre}</h2>
                    <h2>{user.tipo}</h2>
                    <button>Delete</button>
                    <button>Edit</button>
                </div>
                
            ))
        }
        </>
    );
}

export default AdminUser;