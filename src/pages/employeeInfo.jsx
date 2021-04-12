import { useUser } from "@clerk/clerk-react";
import axios from "axios";
import React, { useState, useEffect } from "react";
import DataDisplay from "../components/DataDisplay/datadisplay";
import MainBody from "../components/headers/MainBody";
import Spinner from "../components/Spinner";

const EmployeeDetails = () => {
  const User = useUser();
  const [user, setUser] = useState();

  useEffect(() => {
    axios
      .get("http://localhost:3000/profile", {
        headers: { "x-clerkid": User.data.id },
      })
      .then((resp) => {
        setUser(resp.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div>
      {!user ? (
        <div>
          <Spinner />
        </div>
      ) : (
        <MainBody>
          <div class="m-8 avatar avatar-xl mx-auto">
            <img src="https://picsum.photos/200/300" alt="Pic" />
          </div>
          <DataDisplay user={user} />
        </MainBody>
      )}
    </div>
  );
};

export default EmployeeDetails;
