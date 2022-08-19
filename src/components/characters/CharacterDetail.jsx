import React from "react";

const CharacterDetail = () => {
  return (
    <div className="bg-zinc-200 px-4 py-8">
      <h1 className="mb-8 text-2xl font-bold border-b-2 border-zinc-500 pb-2">
        Character Detail
      </h1>
      <div className="text-center mb-8">
        <p className="mb-4 font-bold tracking-widest text-lg">Ned Stark </p>
        <img
          src="https://thronesapi.com/assets/images/ned-stark.jpg
"
          alt="portrait"
          className="shadow-xl rounded"
        />
      </div>
      <div className="flex flex-col space-y-4 font-medium tracking-wide leading-relaxed">
        <div>
          ID: <span className="pl-28">6</span>
        </div>
        <div>
          First Name: <span className="pl-10">Ned</span>
        </div>
        <div>
          Last Name: <span className="pl-10">Stark</span>
        </div>
        <div>
          Full Name: <span className="pl-[3rem]">Ned Stark</span>
        </div>
        <div>
          Title: <span className="pl-24">Lord of Winterfell</span>
        </div>
        <div>
          Family: <span className="pl-[4.9rem]">House Stark</span>
        </div>
        <div>
          Image: <span className="pl-20">ned-stark.jpg</span>
        </div>
        <div>
          Image URL: <span className="pl-10">images/ned-stark.jpg</span>
        </div>
      </div>
    </div>
  );
};

export default CharacterDetail;
