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

        <div className="">
          <div class="list pt-12 p-auto items-center">
            <a href="/myPerks"><button class="btn px-10 mb-4 btn-outline-secondary">My Perks</button></a>
            <a href="/myTransaction" class=""><button class="btn btn-outline-secondary">Purchase History</button></a>
          </div>
        </div>
        
      </div>

    </MainBody>
  );
};

export default EmployeeDashboard;
