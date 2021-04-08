import React from "react";

const LargeCardContainer = (props) => {
  return (
    <section className="text-gray-600 body-font">
      <div class="container px-auto py-auto mx-auto">
        <div className="flex flex-wrap -m-4">{props.children}</div>
      </div>
    </section>
  );
};

export default LargeCardContainer;
