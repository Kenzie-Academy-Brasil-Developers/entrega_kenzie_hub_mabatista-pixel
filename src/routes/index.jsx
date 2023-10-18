import { Route, Routes, useNavigate } from "react-router-dom";
import { ErrorPage, HomePage, RegisterPage, UserPage } from "../Pages";
import { useState } from "react";

export default () => {
    const [user, setUser] = useState(null);

    const navigate = useNavigate()

    const userLogout = () => {
        setUser(null)
        navigate("/")
        localStorage.removeItem("@TOKEN")
    }

    return <Routes>
        <Route path="/" element={<HomePage setUser={setUser}/>} />
        <Route path="/register" element={<RegisterPage/>} />
        <Route path="/user" element={<UserPage user={user} userLogout={userLogout} />} />
        <Route path="*" element={<ErrorPage/>}/>
    </Routes>
};