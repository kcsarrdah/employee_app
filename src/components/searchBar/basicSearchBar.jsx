import React from "react";

const SearchBar = () => {
  return (
    <input
      type="text"
      class="ml-auto float-right py-3 m-4 w-full pl-8 text-gray-700 bg-white border border-gray-600 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"
      placeholder="Search"
    />
  );
};

export default SearchBar;
