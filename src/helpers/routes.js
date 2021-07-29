import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import Authentication from "../pages/authentication/authentication";
import Home from "../pages/home/home";

export const useRoutes = (props) => {
  if (true) {
    return <Authentication />;
  }
  return (
    <Switch>
      <Route path="/home" exact>
        <Home />
      </Route>
      <Redirect from="/" to="/home" />
    </Switch>
  );
};
