import React from 'react'
import { Route } from 'react-router-dom'
import UserTemplate from "../UserTemplate";

const UserRoute = (props) =>{
    const {component: Component, ...rest} = props;
    return <Route
        {...rest}
        render={(routerProps)=>{
            return (<UserTemplate>
                <Component {...routerProps}/>
            </UserTemplate>)
        }}
    />  
}
export default UserRoute
