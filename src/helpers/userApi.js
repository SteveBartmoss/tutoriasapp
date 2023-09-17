import axios from "axios"


export const createUser= async (user)=>{
    return await axios.post('http://localhost:3300/api/users',user);
}

export const getUsers= async ()=>{
    return await axios.get('http://localhost:3300/api/users/');
}

export const deleteUser= async (id)=>{
    return await axios.delete(`http://localhost:3300/api/users/${id}`);
}
