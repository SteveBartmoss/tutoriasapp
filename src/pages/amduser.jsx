import React, { useState } from "react";
import { createUser } from "../helpers/userApi";
import NavUser from "../routes/navUser";

function Admuser(){
    const [user,setUser]=useState('');
    const [name,setName]=useState('');
    const [pass,setPass]=useState('');
    const [type,setType]=useState(0);
    const [recover,setRecover]=useState('');

    const onChangeUser=(event)=>{
        setUser(event.target.value);
    }

    const onChangeName=(event)=>{
        setName(event.target.value);
    }
    
    const onChangePass=(event)=>{
        setPass(event.target.value);
    }

    const onChangeType=(event)=>{
        setType(event.target.value);
    }

    const onChangeRecover=(event)=>{
        setRecover(event.target.value);
    }

    const onSubmitUser= async (userp,name,pass,type,recover)=>{
        let user={
            user: userp,
            nombre: name,
            pass: pass,
            tipo: 1,
            recover: recover
        }
        console.log(user);
        const result = await createUser(user);

        console.log(result);
    }
    return(
        <>
        <NavUser/>
        <h1>Admin Usuarios</h1>
        <p>Usuario</p>
        <input type="text" value={user} placeholder="gate"
        onChange={(event)=>onChangeUser(event)}/>
        <p>Nombre</p>
        <input type="text" value={name} placeholder="gate"
        onChange={(event)=>onChangeName(event)}/>
        <p>Password</p>
        <input type="password" value={pass} placeholder="pasword"
        onChange={(event)=>onChangePass(event)}/>
        <p>Rol</p>
        <input type="text" value={type} placeholder="admin"
        onChange={(event)=>onChangeType(event)}/>
        <p>Recover</p>
        <input type="text" value={recover} placeholder="admin"
        onChange={(event)=>onChangeRecover(event)}/>
        <button type="button" onClick={()=>onSubmitUser(user,name,pass,type,recover)} >Guardar</button>
        </>
    );
}

export default Admuser;