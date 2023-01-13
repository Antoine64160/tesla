import React from "react";

function Loc() {
  return (
    <div>
      <img
        className="absolute w-[900px] pl-16"
        alt=""
        src="assets/Capture d’écran 2566-01-13 à 00.25.00.png"
      />
      <div className="mr-28 mt-52">
        <div className="flex justify-end font-medium  ">
          <h1 className="text-6xl ">Model Y</h1>
        </div>
        <div className="flex w-full justify-end font-medium pt-12 ml-7">
          <div className="relative flex flex-col ">
            <h2 className="text-lg ml-5">6,9s</h2>
            <p className="text-sm text-slate-500">0 à 100 km/h</p>
          </div>
          <div className="relative flex flex-col px-5">
            <h2 className="text-lg ml-1">533 km</h2>
            <p className="text-sm text-slate-500">Autonomie</p>
          </div>
          <div className="relative flex flex-col">
            <h2 className="text-lg ml-1">137 194</h2>
            <p className="text-sm  text-slate-500">Kilométrage</p>
          </div>
        </div>
        <div className="flex justify-end pt-10  pr-[68px]">
          <h1 className="text-gray-600">70€ /heure</h1>
        </div>
        <div className="flex justify-end pt-16 pr-14">
          <div className="flex text-black w-24 h-14 border-solid border-black border-[3px] rounded-xl pl-2">
            <button className="text-3xl ">Louer</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Loc;
