import { Route, Routes, useNavigate } from "react-router-dom";
import { ErrorPage, HomePage, RegisterPage, UserPage } from "../Pages";
import { useState, useContext } from "react";
import { HubContext } from "../components/providers/HubContext";
import { PrivateRoutes } from "./PrivateRoutes";

export default () => {

    const { user, setUser, userLogout } = useContext(HubContext)

    const navigate = useNavigate()


    return <Routes>
        <Route path="/" element={<HomePage setUser={setUser} />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route element={<PrivateRoutes/>}>
            <Route path="/user" element={<UserPage />} />
        </Route>
        <Route path="*" element={<ErrorPage />} />
    </Routes>
};