import axios from "axios"


export const createUser= async (user)=>{
    return await axios.post('http://localhost:3300/api/users',user);
}

export const createUser2=async ({usuario,name,pass,tipo,recover})=>{
    return await axios({
        method: 'post',
        url: 'http://localhost:3300/api/users',
        data: {
            user: usuario,
            nombre: name,
            pass: pass,
            
        }
    });
}