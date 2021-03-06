import { UserButton } from "@clerk/clerk-react";
import React from "react";

function Header(props) {
  return (
    <header class="text-gray-800 bg-gray-200 body-font">
      <div class="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        <a
          class="flex title-font font-medium items-center text-white mb-4 md:mb-0"
          href="/"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            stroke="black"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            class="w-10 h-10 text-white p-2 bg-white rounded-full"
            viewBox="0 0 24 24"
          >
            <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
          </svg>
          <span class="ml-3 text-red-500 font-weight-xl text-xl">Perkeasy</span>
        </a>

        <nav class="md:ml-auto flex flex-wrap items-center text-base justify-center">
          <a href="/myPerks" class="mr-5 btn btn-link text-gray-800 text-lg">My Perks</a>
          <a href="/myTransaction" class="mr-5 btn btn-link text-gray-800 text-lg">Transactions</a>
          <a class="mr-5 text-lg">&#8383; 2500</a>
        </nav>
        {!props.NoLogoutButton ? (
          <div className="flex">
            <UserButton class="inline-flex items-center bg-gray-800 border-0 py-1 px-3 focus:outline-none hover:bg-gray-700 rounded text-base mt-4 md:mt-0" />
          </div>
        ) : null}
      </div>
    </header>
  );
}

export default Header;
