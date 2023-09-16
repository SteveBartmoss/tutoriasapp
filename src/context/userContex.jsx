import React, { createContext, useContext } from "react";


export const UserContext = createContext();

export const useUsurio=()=>{
    const context=useContext(UserContext);
    if(!context){
        throw new Error("useUsuario must be used within a UserContextProvider ");
    }
    return context;
}

export const UserContextProvider = ({childern})=>{
    return(
        <UserContext.Provider value={{}}>
            {children}
        </UserContext.Provider>
    );
}