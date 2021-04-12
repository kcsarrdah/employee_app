import React, { useState } from 'react';
//import 'bootstrap/dist/css/bootstrap.min.css';
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import MyPerks from "./pages/MyPerks";
import MyTransactions from "./pages/MyTransactions";
import EmployeeDashboard from "./pages/EmployeeDashboard.jsx";
import PerkDetailCard from "./components/cards/perkDetailCard";
import DataDisplay from "./components/DataDisplay/datadisplay";
import EmployeeDetails from "./pages/employeeInfo";
import FormikForm from "./components/DataDisplay/FormikForm";

function App() {

  const [fields, updateFields] = useState(
    {
      name: 'Admin',
      email: 'admin@example.com',
      mobile_no: '012345678'
    }
  );

  return (
    <Router>
      <Switch>
        <Route path="/" exact>
          <LoginPage />
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


        {/*ADD 404 ROUTE  */}
        <Route path="/test" exact>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
