import { Navigate, useLocation } from "react-router";
import { useContext } from "react";
import { AuthContext } from "../Components/AuthProvider/AuthProvider";
import useAdmin from "../Hooks/useAdmin/useAdmin";


const AdminRoute = ({ children }) => {
    const { user, loader } = useContext(AuthContext)
    const [isAdmin, isAdminLoading] = useAdmin()
    const location = useLocation();

    if(loader || isAdminLoading){
        return <progress className="progress w-56"></progress>
    }

    if (user && isAdmin) {
        return children;
    }
    return <Navigate to="/" state={{from: location}} replace></Navigate>
};

export default AdminRoute;