import { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { AuthContext } from "../provider/AuthProvider";
import PropTypes from 'prop-types'

const PrivateRoute = ({children}) => {
    const location = useLocation();
    console.log(location);

    const {user,loading} = useContext(AuthContext);
    if(loading){
        return <span className="loading loading-infinity loading-lg"></span>

    }
    if(user){
        return children;
    }

    return <Navigate to="/login" state={location.pathname}></Navigate>
};

PrivateRoute.propTypes = {
    children:PropTypes.node
}

export default PrivateRoute;