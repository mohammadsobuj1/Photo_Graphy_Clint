import { Navigate, useLocation } from "react-router";
import { useContext } from "react";
import { AuthContext } from "../../Components/AuthProvider/AuthProvider";
import useInstractor from "../../Hooks/useInstractor/useInstractor";
import useAdmin from "../../Hooks/useAdmin/useAdmin";




const UserRoute = ({ children }) => {
    const {  loader } = useContext(AuthContext)
    const [isInstractor] = useInstractor()
    const [isAdmin] = useAdmin()
    const location = useLocation();

    if (loader ) {
        return <progress className="progress w-56"></progress>
    }

    if ( !isAdmin && !isInstractor) {
        return children;
    }
    return <Navigate to="/" state={{ from: location }} replace></Navigate>
};

export default UserRoute;