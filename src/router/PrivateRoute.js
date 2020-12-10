import React from "react";
import { Route, Redirect } from "react-router-dom"
import { getFromLocalStorage } from "../helpers/utils";

export const PrivateRoute = ({ component: Component, ...rest }) => {
  const token = getFromLocalStorage("token");
  return (
    <Route {...rest} render={(props) => (
      token ?
        <Component {...props} />
        : <Redirect to='/' />
    )} />
  )
}