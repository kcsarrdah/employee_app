import axios from "axios";
import React, { useState, useEffect } from "react";
import ProfileDisplay from "../profile/profileDisplay";

const BalanceCard = (props) => {
  const [balance, setBalance] = useState();

  useEffect(() => {
    axios
      .get("http://localhost:3000/employee/balance", {
        headers: {
          "x-clerkid": props.clerkid,
        },
      })
      .then((resp) => {
        setBalance(resp.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div class="card text-center shadow-2xl bg-gray-400 py-6 px-auto border-gray-300 border-rounded ml-4">
      <div class="card-header h-1/2 w-auto">
        <div class="font-bold text-xl text-gray-900 p-2">Point balance</div>
      </div>
      <div class="flex items-center text-gray-900 text-xl justify-center p-3 space-x-3 border-t-2">
        {balance ? balance.totalCredits - balance.totalConsumedCredits : 0}
      </div>
    </div>
  );
};

export default BalanceCard;
