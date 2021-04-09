import React from "react";
import Footer from "../footer/footer";
import Header from "./Header";

const MainBody = (props) => {
  return (
    <div id="mainPage" className="bg-yellow-100 h-full">
      <Header />
      <section class="text-gray-600 body-font">
        <div class="container px-2 pt-12 pb-2 mx-auto">{props.children}</div>
      </section>
      <Footer />
    </div>
  );
};

export default MainBody;
