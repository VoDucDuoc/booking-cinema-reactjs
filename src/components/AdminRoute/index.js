import React from "react";
import { Redirect, Route } from "react-router-dom";
import { checkLogin } from "../../utils/checkLogin";
const AdminPrivateRoute = ({component: Component, ...rest}) => {
    return (
        
        <Route {...rest} render={props => (
            checkLogin() ?
                <Component {...props} />
            : <Redirect to="/admin/login" />
        )} />
    );
};

export default AdminPrivateRoute;
