import React from "react";

const Plan = () => {
  return (
    <div className="max-w-[1400px] m-auto py-16 px-4 grid lg:grid-cols-2 gap-4">
      <div className="grid grid-cols-2 grid-rows-6 h-[80vh]">
        <img className="row-span-3 object-cover w-full h-full p-2"
          src="https://images.pexels.com/photos/1450363/pexels-photo-1450363.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
          alt="Beach image"
        />
        <img className="row-span-2 object-cover w-full h-full p-2"
          src="https://images.pexels.com/photos/3250613/pexels-photo-3250613.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
          alt="Beach image"
        />
        <img className="row-span-2 object-cover w-full h-full p-2"
          src="https://images.pexels.com/photos/1430671/pexels-photo-1430671.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
          alt="Beach image"
        />
        <img className="row-span-3 object-cover w-full h-full p-2"
          src="https://images.pexels.com/photos/6044984/pexels-photo-6044984.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
          alt="Beach image"
        />
        <img className="row-span-2 object-cover w-full h-full p-2"
          src="https://images.pexels.com/photos/1320686/pexels-photo-1320686.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
          alt="Beach image"
        />
      </div>
      <div className="flex flex-col h-full justify-center">
        <h3 className="text-5xl md:text-6xl font-bold">Plan Your Next Trip</h3>
        <p className="text-2xl py-6">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet,
          deserunt.
        </p>
        <p className="pb-6">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo
          repellendus ipsam in, autem sapiente dolorum harum assumenda quaerat
          nulla inventore rerum mollitia aliquam placeat! Atque facilis amet
          consectetur ullam error.
        </p>
        <div>
          <button className="border-black mr-4 hover:shadow-lg">Learn More</button>
          <button className="bg-black text-white border-black hover:shadow-lg">Book Your Trip</button>
        </div>
      </div>
    </div>
  );
};

export default Plan;
