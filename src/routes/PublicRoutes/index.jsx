import { useContext } from "react"
import { HubContext } from "../../components/providers/HubContext"
import { Navigate, Outlet } from "react-router-dom"

export const PublicRoutes = () => {

    const { user } = useContext(HubContext)


    return !user ? <Outlet/> : <Navigate to="/user" />

}