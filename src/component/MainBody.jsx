import React from "react";
import Header from "./Header";

const MainBody = (props) => {
  return (
    <div id="mainPage" className=" bg-purple-100 h-screen">
      <Header />
      <section class="text-gray-600 body-font ">
        <div class="container px-2 pt-12 pb-2 mx-auto">{props.children}</div>
      </section>
    </div>
  );
};

export default MainBody;
