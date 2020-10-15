import React from "react";
import { Redirect, Route } from "react-router-dom";
import { checkLogin } from "../../utils/checkLogin";
const PrivateRoute = ({component: Component, ...rest}) => {
    return (
        
        <Route {...rest} render={props => (
            checkLogin() ?
                <Component {...props} />
            : <Redirect to="/login" />
        )} />
    );
};

export default PrivateRoute;
