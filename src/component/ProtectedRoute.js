import { Navigate, Outlet } from "react-router-dom";

const ProtectedRoute = () => {
    //Responsibility of protected route is to check if user authenticated or not then only give access to the route.
    const isAuthenticated = true;
    return isAuthenticated ? <Outlet/> : <Navigate to="/login"/>
};
export default ProtectedRoute;