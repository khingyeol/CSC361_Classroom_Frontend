import { Component } from "react";
import { Route, Redirect } from "react-router-dom";
import Homepage from "../../containers/Homepage";

import { isLoggedIn } from "../../services/actions/api_auth";

export { PrivateRoute };

function PrivateRoute({ component: Component }){
    return (
        <Route render={props => {
            if (!isLoggedIn){
                return <Redirect to={'/login'} />
            }

            return PrivateRoute
        }} />
    );
}