import React from "react";

const SmallCard = (props) => {
  return (
    <a id="card " className="mx-1" href="#" onClick={props.onClick}>
      <div className="flex flex-col shadow-2xl justify-center w-full px-8 mx-2 my-12 text-center rounded-md md:w-96 lg:w-80 sm:w-64  bg-gray-800 text-gray-100 hover:bg-gray-600">
        <img
          alt=""
          className="self-center w-24 h-24 -mt-12 bg-center bg-cover rounded-full"
          src="https://source.unsplash.com/100x100/?portrait"
        />
        <div className="flex-1 my-4">
          <p className="text-xl font-semibold leading-snug">
            {props.Perk.description}
          </p>
          <p>{props.Perk.description}</p>
        </div>
        <div className="flex items-center justify-end p-3 space-x-3 border-t-2 border-gray-100">
          <p>{props.Perk.value}</p>
        </div>
      </div>
    </a>
  );
};

export default SmallCard;
