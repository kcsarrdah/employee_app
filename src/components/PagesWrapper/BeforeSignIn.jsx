import React from "react";
import { Switch, Route } from "react-router";
import ErrorPage from "../../pages/ErrorPage";
import LoginPage from "../../pages/LoginPage";

const BeforeSignIn = () => {
  return (
    <Switch>
      <Route path="/" exact>
        <LoginPage />
      </Route>

      <Route path="*" exact>
        <ErrorPage />
      </Route>
    </Switch>
  );
};

export default BeforeSignIn;
