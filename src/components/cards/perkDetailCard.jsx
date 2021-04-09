import React from "react";

const PerkDetailCard = (props) => {
  return (
    <section class="text-gray-600 body-font">
      <div class="container mx-auto">
        <div class="lg:w-3/5 w-auto mx-auto flex ">
          <img
            alt="ecommerce"
            class="mx-2 border border-2 border-black lg:w-1/2 w-2/3 lg:h-auto h-64 object-cover object-center rounded"
            src="https://dummyimage.com/200x200"
          />
          <div class="lg:w-1/2  w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
            <h2 class="text-sm title-font text-gray-500 tracking-widest">
              {props.Perk.category}
            </h2>
            <h1 class="text-gray-900 text-3xl title-font font-medium mb-1">
              {props.Perk.description}
            </h1>

            <p class="leading-relaxed">
              {props.Perk.perkType}
              <br />
              Fam locavore kickstarter distillery. Mixtape chillwave tumeric
              sriracha taximy chia microdosing tilde DIY. XOXO fam indxgo
              juiceramps cornhole raw denim forage brooklyn. Everyday carry +1.
            </p>

            <div class="flex mt-24">
              <span class="title-font font-medium text-2xl text-gray-900">
                {props.Perk.value} Points
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PerkDetailCard;
