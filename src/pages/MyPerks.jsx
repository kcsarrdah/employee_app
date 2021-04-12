import React, { useState, useEffect } from "react";
import MainBody from "../components/headers/MainBody";
import LargeCardContainer from "../components/cards/CardContainer/largeCardcontainer";
import LargeCard from "../components/cards/largeCard";
import FaqAndTnc from "../components/extras/faqAndTncBox";
import axios from "axios";
import Spinner from "../components/Spinner";
import { useUser } from "@clerk/clerk-react";

const MyPerks = () => {
  const user = useUser();
  const [perks, setPerks] = useState([]);

  useEffect(() => {
    const options = {
      headers: {
        "x-clerkid": user.data.id,
      },
    };

    axios
      .get("http://localhost:3000/employee/perks/active", options)
      .then((resp) => {
        console.log(resp.data.Transactions);
        setPerks(resp.data.Transactions);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <MainBody>
      <LargeCardContainer>
        {perks.map((perk, index) => {
          return <LargeCard perk={perk} key={index} />;
        })}
      </LargeCardContainer>
      <FaqAndTnc />
    </MainBody>
  );
};

export default MyPerks;
