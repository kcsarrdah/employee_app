import React, { useState } from "react";
import { Switch, Route } from "react-router";
import MyPerks from "../../pages/MyPerks";
import MyTransactions from "../../pages/MyTransactions";
import EmployeeDashboard from "../../pages/EmployeeDashboard.jsx";
import EmployeeDetails from "../../pages/employeeInfo";
import FormikForm from "../DataDisplay/FormikForm";
import { useUser } from "@clerk/clerk-react";

const AfterSignIn = () => {
  const user = useUser();

  const [fields, updateFields] = useState({
    name: "Admin",
    email: "admin@example.com",
    mobile_no: "012345678",
  });

  console.log(user);
  if (!user.publicMetadata.activated) {
    return <h1>Not Activated</h1>;
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
          <FormikForm fields={fields} updateFields={updateFields} />
        </Route>

        <Route path="/test" exact>
          <EmployeeDetails />
        </Route>

        {/*ADD 404 ROUTE  */}
        <Route path="*" exact>
          <h1>404</h1>
        </Route>
      </Switch>
    );
  }
};

export default AfterSignIn;
