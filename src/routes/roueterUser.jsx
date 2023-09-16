import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import NavUser from "./navUser";
import Admuser from "../pages/amduser";
import CreateUser from "../component/createUser";

function UserRoute() {
    return (
        <Routes>
            <Route path="amduser" element={<NavUser />}>
                <Route index element={<Admuser />} />

                <Route path="list" element={<Admuser />} />

                <Route path="create" element={<CreateUser />} />
            </Route>
        </Routes>
    );
}

export default UserRoute;