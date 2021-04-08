import React from "react";

const LoginPage = () => {
  return (
    <div>
    <h1 class="text-gray-600 text-center py-4 text-4xl mb-3 mt-6">Employee Login</h1>
<section class="text-gray-600 body-font">
<div class="container px-48 py-24 mx-auto">
  <div class="flex flex-wrap -mx-4 -mb-10 text-center">
    <div class="sm:w-full mb-10 px-4">
      <div class="rounded-lg h-64 overflow-hidden">
        <img alt="content" class="object-contain h-full w-full" src="https://img.freepik.com/free-vector/meeting-business-people-avatar-character_24877-57276.jpg?size=626&ext=jpg"></img>
      </div>
      <h2 class="title-font text-2xl font-medium text-gray-900 mt-6 mb-3">Employee</h2>
      <a href="/empDashboard"><button  class="flex mx-auto mt-6 text-white bg-indigo-500 border-0 py-2 px-5 focus:outline-none hover:bg-indigo-600 rounded">Login</button></a>
    </div>
  </div>
</div>
</section>
</div>
  );
};

export default LoginPage;
