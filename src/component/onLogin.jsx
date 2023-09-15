import React, { useState } from "react";
import { getUser } from "../helpers/getUser";

function OnLogin(){

    const [usuario, setUsuario] = useState("");
    const [pass, setPass] = useState("");

    const onUsuarioChange=(event)=>{
        setUsuario(event.target.value);
        //console.log(usuario);
    }

    const onPassChange=(event)=>{
        setPass(event.target.value);
        //console.log(pass);
    }

    const onSumitButton=(user,password)=>{
        console.log('oprimio el boton');
        console.log(user);
        console.log(password);
        const response=getUser();
        console.log(response);
    }

    return(
    <>
    <div>
        <form>
            <p>Usuario</p>

            <input type="text" value={usuario} placeholder="User" 
            onChange={(event)=>onUsuarioChange(event)}/>

            <p>Password</p>

            <input type="password" value={pass} placeholder="Password"
            onChange={(event)=>onPassChange(event)}/>

            <button type="button" onClick={()=>onSumitButton(usuario,pass)}>Iniciar sesion</button>
            <button type="button" onClick={async()=>{
                const res=await fetch('http://localhost:3300/api/users/marco');
                const data=await res.json()
                console.log(data);
            }}>Res</button>
        </form>
    </div>
    </>
    );
}

export default OnLogin;