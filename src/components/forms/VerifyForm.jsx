import axios from "axios";
import React from "react";

const VerifyForm = (props) => {
  const ClickActivate = (e) => {
    e.preventDefault();
    const email = props.user.primaryEmailAddress.emailAddress;
    const clerkId = props.user.data.id;
    console.log(email, clerkId);

    axios({
      method: "post",
      url: "http://localhost:3000/profile/new",
      data: { email, clerkId },
    })
      .then((resp) => {
        alert(resp.data.message);
        window.location.reload();
      })
      .catch((err) => {
        alert("Activation Failed");
      });
  };
  return (
    <button className="btn bg-blue-200 border-2" onClick={ClickActivate}>
      Activate Account
    </button>
  );
};

export default VerifyForm;
