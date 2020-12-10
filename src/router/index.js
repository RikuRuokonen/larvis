import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import DashboardPage from "../containers/DashboardPage";
import UsersPage from "../containers/UsersPage";
import LoginPage from "../containers/LoginPage";
import { PrivateRoute } from "./PrivateRoute";


const AppRouter = () =>
  <Router>
    <Switch>
      <Route exact path="/" component={LoginPage} />
      <PrivateRoute exact path="/dashboard" component={DashboardPage} />
      <Route exact path="/users" component={UsersPage} />
    </Switch>
  </Router>

export default AppRouter;