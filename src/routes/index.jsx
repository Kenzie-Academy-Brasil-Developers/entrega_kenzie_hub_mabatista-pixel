import { Route, Routes, useNavigate } from "react-router-dom";
import { ErrorPage, HomePage, RegisterPage, UserPage } from "../Pages";
import { PrivateRoutes } from "./PrivateRoutes";
import { PublicRoutes } from "./PublicRoutes";

export default () => {

    return <Routes>
        <Route element={<PublicRoutes />}>
            <Route path="/" element={<HomePage />} />
            <Route path="/register" element={<RegisterPage />} />
        </Route>
        <Route element={<PrivateRoutes />}>
            <Route path="/user" element={<UserPage />} />
        </Route>
        <Route path="*" element={<ErrorPage />} />
    </Routes>
};