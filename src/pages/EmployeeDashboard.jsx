import React from "react";
import BalanceCard from "../components/cards/BalanceCard";
import SmallCardContainer from "../components/cards/CardContainer/smallCardcontainer";
import ModalCard from "../components/cards/modalCard";
import SpecialCard from "../components/cards/specialCard";
import XlCard from "../components/cards/xlCard";
import FilterButton from "../components/Buttons/filterButton/filterbutton";
import MainBody from "../components/headers/MainBody";
import ProfileDisplay from "../components/profile/profileDisplay";
import SearchBar from "../components/searchBar/basicSearchBar";

const EmployeeDashboard = () => {
  return (
    <MainBody>
      <div className="grid grid-cols-4 gap-4 ">
        <div className="col-span-3 flex ">
          <ProfileDisplay />
          <BalanceCard />
        </div>

        <div className="pr-6">
          <div
            class="list pt-12 p-auto float-right
           items-center"
          >
            <a href="/myPerks">
              <button class="btn px-10 mb-4 btn-outline-secondary">
                My Perks
              </button>
            </a>
            <a href="/myTransaction" class="">
              <button class="btn btn-outline-secondary">
                Purchase History
              </button>
            </a>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-5 p-4">
        <div className="col-span-3">
          <FilterButton />
        </div>
        <div className="col-span-2 float-right">
          <SearchBar />
        </div>
      </div>

      <div className="grid grid-cols-4 gap-10">
        <div className="col-span-3">
          <SmallCardContainer>
            <ModalCard />
            <ModalCard />
            <ModalCard />
            <ModalCard />
            <ModalCard />
            <ModalCard />
            <ModalCard />
            <ModalCard />
          </SmallCardContainer>
        </div>
        <div className="flex flex-col">
          <div>
            <XlCard />
          </div>

          <div>
              <h1 class="flex-grow pl-4 pt-4 sm:pr-16 text-xl font-medium title-font text-gray-900">
                Special Perks
            </h1>
            <div class="h-1 bg-gray-500 rounded m-1"></div>
              <SpecialCard/>
              <SpecialCard/>

          </div>


        </div>
      </div>
    </MainBody>
  );
};

export default EmployeeDashboard;
