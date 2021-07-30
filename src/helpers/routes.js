import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import Authentication from "../pages/authentication/authentication";
import Home from "../pages/home/home";
import { loadState } from "./localStorage";

export const useRoutes = (props) => {
  return (
    <Switch>
      <Route path="/home" exact>
        <Home />
      </Route>
      <Route path="/login" exact>
        <Authentication />
      </Route>
      {loadState("auth") ? (
        <Redirect from="/" to="/home" />
      ) : (
        <Redirect from="" to="/login" />
      )}
    </Switch>
  );
};
