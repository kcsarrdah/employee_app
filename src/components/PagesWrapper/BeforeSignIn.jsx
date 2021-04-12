import React from "react";
import { Switch, Route } from "react-router";
import LoginPage from "../../pages/LoginPage";

const BeforeSignIn = () => {
  return (
    <Switch>
      <Route path="/" exact>
        <LoginPage />
      </Route>

      <Route path="*" exact>
        <h1>404</h1>
      </Route>
    </Switch>
  );
};

export default BeforeSignIn;
