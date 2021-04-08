import React from "react";
import BalanceCard from "../components/cards/BalanceCard";
import MainBody from "../components/headers/MainBody";
import ProfileDisplay from "../components/profile/profileDisplay";

const EmployeeDashboard = () => {
  return (
    <MainBody>
      <div className="grid grid-cols-4 gap-4 ">
        <div className="col-span-3 flex">
          <ProfileDisplay />
          <BalanceCard />
        </div>
        <div className="bg-blue-300">2</div>
      </div>
    </MainBody>
  );
};

export default EmployeeDashboard;
