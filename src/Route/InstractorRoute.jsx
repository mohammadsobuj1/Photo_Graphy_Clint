import { Navigate, useLocation } from "react-router";
import useInstractor from "../Hooks/useInstractor/useInstractor";
import { useContext } from "react";
import { AuthContext } from "../Components/AuthProvider/AuthProvider";


const InstractorRoute = ({ children }) => {
    const { user, loader } = useContext(AuthContext)
    const [isInstractor, isinstractorLoading ] = useInstractor()
    const location = useLocation();

    if (loader || isinstractorLoading) {
        return <progress className="progress w-56"></progress>
    }

    if (user && isInstractor) {
        return children;
    }
    return <Navigate to="/" state={{ from: location }} replace></Navigate>
};

export default InstractorRoute;