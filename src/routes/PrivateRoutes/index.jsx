import { useContext } from "react";
import { HubContext } from "../../components/providers/HubContext"; 
import { Navigate } from "react-router-dom";
import { Outlet } from "react-router-dom";

export const PrivateRoutes = () => {
    const { user} = useContext(HubContext)

    return user ? <Outlet/> : <Navigate to="/" />     
}