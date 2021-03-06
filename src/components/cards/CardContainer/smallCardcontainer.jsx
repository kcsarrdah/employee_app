import React from "react";

const SmallCardContainer = (props) => {
  return (
    <div className="mx-auto">
      <section className="py-4 bg-white-100 text-gray-800">
        <div className="flex flex-col items-start justify-center mx-auto">
          <div className="flex flex-row flex-wrap justify-start mt-4">
            {props.children}
          </div>
        </div>
      </section>
    </div>
  );
};

export default SmallCardContainer;
