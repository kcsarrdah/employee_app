import React from "react";
import Footer from "../footer/footer";
import Header from "./Header";

const MainBody = (props) => {
  return (
    <div
      id="mainPage"
      className="flex flex-col min-h-screen h-full" 
      > 
      
      <Header NoLogoutButton={props.NoLogoutButton} /> 
      <section class="text-gray-600 flex-grow body-font">
        <div class="container px-2 pt-12 pb-2 mx-auto">
          {props.children}
          </div>
      </section>
      <Footer />
    </div>
  );
};

export default MainBody;
