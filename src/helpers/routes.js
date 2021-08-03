import React, { useContext } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import Authentication from "../pages/authentication/authentication";
import SignUp from "../pages/authentication/signUp";
import Home from "../pages/home/home";
import Movie from "../pages/moviePage/moviePage";
import { loadState } from "./localStorage";
import { useAuthState } from "react-firebase-hooks/auth";
import { Context } from "..";

export const useRoutes = (props) => {
  const { auth } = useContext(Context);
  const [user] = useAuthState(auth);

  console.log("sssp", user);
  if (user === null) {
    return (
      <Switch>
        <Route path="/login" exact>
          <Authentication />
        </Route>
        <Route path="/signup" exact>
          <SignUp />
        </Route>
        <Redirect to="/login" />
      </Switch>
    );
  }

  return (
    <Switch>
      <Route path="/home" exact>
        <Home />
      </Route>
      <Route path="/movie/:id" exact>
        <Movie />
      </Route>
      <Redirect to="/home" />
    </Switch>
  );
};
