export const getUser=async()=>{
    const urluser='http://localhost:3300/api/users/marco';
    const res=await fetch(urluser);
    const {data}=res.json();

    const user=data.map(user=>{
        return{
            id:user.idlogin,
            user:user.usuario,
            name:user.nombre,
            pass:user.password,
            tipe:user.tipo,
            recove:user.recover
        }
    });

    return user;
}