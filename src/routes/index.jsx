import { Route, Routes } from "react-router-dom";
import { ErrorPage, HomePage, RegisterPage, UserPage } from "../Pages";

export default () => {
    return <Routes>
        <Route path="/" element={<HomePage/>} />
        <Route path="/register" element={<RegisterPage/>} />
        <Route path="/user" element={<UserPage/>} />
        <Route path="*" element={<ErrorPage/>}/>
    </Routes>
};