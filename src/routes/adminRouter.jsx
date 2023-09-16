import React from "react";
import { Route, Routes } from "react-router-dom";
import NavBar from "./navbar";
import FormUser from "../component/formUser";
import AdminUser from "../component/adminUser";

function AdminRouter() {
    return (
        <>
        <NavBar />
        <Routes> 
            <Route path="/home" element={<h1>Home page</h1>} />

            <Route path="createuser" element={<FormUser/>} />

            <Route path="adminuser" element={<AdminUser />} />
        </Routes>
        </>
    );

}

export default AdminRouter;