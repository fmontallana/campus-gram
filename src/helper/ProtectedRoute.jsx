import { Outlet, useNavigate } from "react-router-dom"
import Login from "../pages/Login/Login"
// import Login from "./Pages/Login"

export default function ProtectedRoutes ({isAuth}) {
let navigate = useNavigate()

    return isAuth ? <Outlet /> :  window.location.pathname ='/login'
}