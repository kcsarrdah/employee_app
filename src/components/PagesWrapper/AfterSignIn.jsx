import React from "react";
import { Switch, Route } from "react-router";
import MyPerks from "../../pages/MyPerks";
import MyTransactions from "../../pages/MyTransactions";
import EmployeeDashboard from "../../pages/EmployeeDashboard.jsx";
import EmployeeDetails from "../../pages/employeeInfo";
import { useUser } from "@clerk/clerk-react";
import VerifyForm from "../forms/VerifyForm";
import MainBody from "../headers/MainBody";
import EditForm from "../../pages/editForm";
import ErrorPage from "../../pages/ErrorPage";

const AfterSignIn = () => {
  const user = useUser();

  
  if (!user.publicMetadata.activated) {
    return (
      <MainBody>
        <VerifyForm user={user} />
      </MainBody>
    );
  } else {
    return (
      <Switch>
        <Route path="/" exact>
          <EmployeeDashboard />
        </Route>

        <Route path="/myPerks" exact>
          <MyPerks />
        </Route>

        <Route path="/myTransaction" exact>
          <MyTransactions />
        </Route>

        <Route path="/empDashboard" exact>
          <EmployeeDashboard />
        </Route>

        <Route path="/empDetails" exact>
          <EmployeeDetails />
        </Route>

        <Route path="/editForm" exact>
          <EditForm />
        </Route>

        <Route path="/test" exact>
          <EmployeeDetails />
        </Route>

        {/*ADD 404 ROUTE  */}
        <Route path="*" exact>
          <ErrorPage />
        </Route>
      </Switch>
    );
  }
};

export default AfterSignIn;
