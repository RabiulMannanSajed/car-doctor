import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";

const PrivateRoute = ({ children }) => {

    const { user, loading } = useContext(AuthContext);
    const location = useLocation();

    if (loading) {
        return <progress className=" progress w-56"> </progress>
    }

    if (user?.email) { // checking is the user is present if present  
        return children; // go to the route
    }

    return <Navigate to="/login" state={{ from: location }}></Navigate> // user not present then go to the login page
};

export default PrivateRoute;