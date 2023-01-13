import React from "react";
import { Link } from "react-router-dom";

function ModelS() {
  return (
    <div className="w-full flex flex-col p-24 justify-between h-screen">
      <img
        className="absolute w-screen top-0 left-0  h-screen object-cover"
        src="assets/Model S.webp"
        alt=""
      />
      <div className="flex justify-center font-medium">
        <h1 className="relative text-black justify-center  text-5xl mt-10">
          Model S
        </h1>
      </div>
      <div className="flex w-full justify-center font-medium">
        <div className="relative flex flex-col  text-white px-10">
          <h2 className="text-3xl">2,1s</h2>
          <p className="text-sm">0 à 100 km/h</p>
        </div>
        <div className="relative flex flex-col  text-white px-10">
          <h2 className="text-3xl">600 km</h2>
          <p className="text-sm">Autonomie</p>
        </div>
        <div className="relative flex flex-col  text-white px-10">
          <h2 className="text-3xl">114 863</h2>
          <p className="text-sm ">Kilométrage</p>
        </div>
        <div className="relative flex flex-col  text-white px-10 pt-[5px]  border-solid border-white border-[3px] rounded-xl">
          <Link to="/LocationS">
            <button className="text-3xl">Louer</button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default ModelS;
