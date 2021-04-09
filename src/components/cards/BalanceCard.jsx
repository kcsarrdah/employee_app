import axios from "axios";
import React, { useState, useEffect } from "react";

const BalanceCard = () => {
  const [balance, setBalance] = useState();

  useEffect(() => {
    axios
      .get("http://localhost:3000/employee/balance", {
        headers: {
          "x-clerkid": "Krishnna1234",
        },
      })
      .then((resp) => {
        console.log(resp.data);
        setBalance(resp.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div class="card text-center bg-gray-50 py-6 px-auto border-black border-rounded ml-4">
      <div class="card-header h-1/2 w-auto">
        <div class="font-bold text-gray-90 p-2">Point balance</div>
      </div>
      <div class="flex items-center text-xl justify-center p-3 space-x-3 border-t-2">
        {balance ? balance.totalCredits - balance.totalConsumedCredits : 0}
      </div>
    </div>
  );
};

export default BalanceCard;
