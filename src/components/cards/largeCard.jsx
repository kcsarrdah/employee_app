import React from "react";

const LargeCard = (props) => {
  let date = new Date(props.perk.transactionTime);
  return (
    <div className="p-4 w-1/4">
      <div class=" p-6 shadow-2xl bg-yellow-100 rounded-2xl border-2 border-gray-800 flex flex-col hover:bg-gray-100">
        <h2 class="text-sm tracking-widest title-font mb-1 font-medium">
          {date.toLocaleTimeString()} - {date.toLocaleDateString()}
        </h2>
        <h1 class="text-5xl text-gray-900 pb-4 mb-4 border-b border-gray-600 leading-none">
          {props.perk.Perk.description}
        </h1>
        <p class="flex items-center text-gray-800 mb-2">
          <span class="w-4 h-4 mr-2 inline-flex items-center justify-center bg-gray-800 text-white flex-shrink-0">
            <svg
              fill="none"
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2.5"
              class="w-3 h-3"
              viewBox="0 0 24 24"
            >
              <path d="M20 6L9 17l-5-5"></path>
            </svg>
          </span>
          perk.descriptionLine1
        </p>
        <p class="flex items-center text-gray-800 mb-2">
          <span class="w-4 h-4 mr-2 inline-flex items-center justify-center bg-gray-800 text-white flex-shrink-0">
            <svg
              fill="none"
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2.5"
              class="w-3 h-3"
              viewBox="0 0 24 24"
            >
              <path d="M20 6L9 17l-5-5"></path>
            </svg>
          </span>
          perk.descriptionLine2
        </p>
        <p class="flex items-center text-gray-800 mb-6">
          <span class="w-4 h-4 mr-2 inline-flex items-center justify-center bg-gray-800 text-white  flex-shrink-0">
            <svg
              fill="none"
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2.5"
              class="w-3 h-3"
              viewBox="0 0 24 24"
            >
              <path d="M20 6L9 17l-5-5"></path>
            </svg>
          </span>
          perk.descriptionLine3
        </p>
        <button class="flex items-center mt-auto text-white bg-gray-600 border-0 py-2 px-4 focus:outline-none hover:bg-gray-800 rounded">
          redeem
          <svg
            fill="none"
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            class="w-4 h-4 ml-auto"
            viewBox="0 0 24 24"
          >
            <path d="M5 12h14M12 5l7 7-7 7"></path>
          </svg>
        </button>
        <a href={props.perk.Perk.url} target="_blank" rel="noreferrer">
          <p class="text-xs text-gray-800 mt-3">Terms and conditions</p>
        </a>
      </div>
    </div>
  );
};

export default LargeCard;
