import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "../pages/login";
import AdminRouter from "./adminRouter";

function AppRouter(){
    return(
        <BrowserRouter>
            <Routes>
                <Route path="login" element={<Login />} />

                <Route path="/*" element={<AdminRouter />} />

                <Route path="recover" element={<h1>Recover page</h1>} />
            </Routes>
        </BrowserRouter>
    );
}

export default AppRouter;