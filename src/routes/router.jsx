import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "../pages/login";
import Admuser from "../pages/amduser";

function Router(){
    return(
        <BrowserRouter>
        <Routes>
            
            <Route path="/" element={<Login/>}/>

            <Route path="admuser" element={<Admuser />} />



        </Routes>
        </BrowserRouter>
    );
}

export default Router;