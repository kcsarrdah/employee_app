import React from 'react'

const SmallCard = () => {
    return (
        <div>

            
        <a id="card" href="">
        <div class="flex flex-col justify-center w-full px-8 mx-6 my-12 text-center rounded-md md:w-96 lg:w-80 xl:w-64 bg-gray-800 text-gray-100">
          <img alt="" class="self-center w-24 h-24 -mt-12 bg-center bg-cover rounded-full" src="https://source.unsplash.com/100x100/?portrait" />
          <div class="flex-1 my-4">
            <p class="text-xl font-semibold leading-snug">Perk name</p>
            <p>Description</p>
          </div>
          <div class="flex items-center justify-end p-3 space-x-3 border-t-2">
            <p>Points</p>
          </div>
        </div>
      </a>
      
      </div>
    );
  };
  
  export default SmallCard;
  