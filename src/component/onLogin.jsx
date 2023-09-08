import React, { useState } from "react";
import { getUser } from "../helpers/getUser";

function OnLogin(){

    const [usuario, setUsuario] = useState("");
    const [pass, setPass] = useState("");
    //const response=getUser();

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
        //console.log(response);
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
        </form>
    </div>
    </>
    );
}

export default OnLogin;