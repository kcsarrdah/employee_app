import React, { useState, useEffect } from "react";
import BalanceCard from "../components/cards/BalanceCard";
import SmallCardContainer from "../components/cards/CardContainer/smallCardcontainer";
import ModalCard from "../components/cards/modalCard";
import SpecialCard from "../components/cards/specialCard";
import XlCard from "../components/cards/xlCard";
import FilterButton from "../components/Buttons/filterButton/filterbutton";
import MainBody from "../components/headers/MainBody";
import ProfileDisplay from "../components/profile/profileDisplay";
import SearchBar from "../components/searchBar/basicSearchBar";
import axios from "axios";
import { useUser } from "@clerk/clerk-react";

const EmployeeDashboard = () => {
  const user = useUser();
  const [allPerks, setAllPerks] = useState({ Perks: [], Categories: [] });
  const [currentCategory, setCurrentCategory] = useState("All");

  // On Mount
  useEffect(() => {
    const options = {
      headers: {
        "x-clerkid": user.data.id,
      },
    };

    axios
      .get("http://localhost:3000/employee/perks", options)
      .then((resp) => {
        setAllPerks({
          Perks: resp.data.Perks,
          Categories: resp.data.categories,
        });
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  //Effect if Category is selected
  useEffect(() => {
    const options = {
      headers: {
        "x-clerkid": user.data.id,
      },
    };

    if (currentCategory === "All") {
      // Select all Perks
      axios
        .get("http://localhost:3000/employee/perks", options)
        .then((resp) => {
          setAllPerks({
            Perks: resp.data.Perks,
            Categories: resp.data.categories,
          });
        })
        .catch((err) => {
          console.log(err);
        });
    } else {
      // Select Specific Category of Perks
      options.headers["x-category"] = currentCategory;
      axios
        .get("http://localhost:3000/employee/perks/categories", options)
        .then((resp) => {
          setAllPerks({ ...allPerks, Perks: resp.data });
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }, [currentCategory]);

  return (
    <MainBody>
      <div className="grid grid-cols-4 gap-4 mb-12">
        <div className="col-span-3 flex ">
          <ProfileDisplay clerkid={user.data.id} />
          <BalanceCard clerkid={user.data.id} />
        </div>

      </div>
      <div class="h-1 bg-gray-900 rounded m-1 mb-16"></div>

      <div className="grid grid-cols-5 p-4 mb-12">
        <div className="col-span-3">
          <FilterButton
            Categories={allPerks.Categories}
            currentCategory={currentCategory}
            setCurrentCategory={setCurrentCategory}
          />
        </div>
        <div className="col-span-2 float-right">
          <SearchBar />
        </div>
      </div>

      <div className="grid grid-cols-4 gap-10">
        <div className="col-span-3">
          <SmallCardContainer>
            {allPerks.Perks.map((Perk, index) => {
              return (
                <ModalCard Perk={Perk} key={index} clerkid={user.data.id} />
              );
            })}
          </SmallCardContainer>
        </div>
        <div className="flex flex-col">
          <div>
            <XlCard />
          </div>

          <div>
            <h1 class="flex-grow pl-4 pt-4 sm:pr-16 text-xl font-medium title-font text-gray-900 mb-3">
              Special Perks
            </h1>
            <div class="h-1 bg-gray-500 rounded mb-1"></div>
            <SpecialCard />
            <SpecialCard />
          </div>
        </div>
      </div>
    </MainBody>
  );
};

export default EmployeeDashboard;
