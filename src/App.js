import React from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import MyPerks from "./pages/MyPerks";
import MyTransactions from "./pages/MyTransactions";
import EmployeeDashboard from "./pages/EmployeeDashboard.jsx";
import LargeCard from "./components/cards/largeCard";
import SmallCard from "./components/cards/smallCard";
import smallCardContainer from "./components/cards/CardContainer/smallCardcontainer";
import SearchBar from "./components/searchBar/basicSearchBar";

function App() {
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
        {/*ADD 404 ROUTE  */}
        <Route path="/test" exact>
          <SearchBar />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
