import React from "react";

function Model3() {
  return (
    <div className="parent ">
      <section className="section flex justify-center items-start w-screen h-screen relative">
        <img
          className="absolute w-full h-full object-cover"
          alt=""
          src="assets/Model 3.jpeg"
        ></img>
        <div className="flex justify-center pt-32">
          <h1 className="relative text-white font-medium text-5xl">Model 3</h1>
        </div>
        <div>
          <div>
            <h2>3,3s</h2>
            <p>0 à 100 km/h</p>
          </div>
          <div>
            <h2>602 km</h2>
            <p>Autonomie</p>
          </div>
          <div>
            <h2>100 000 km</h2>
            <p>Kilométrage</p>
          </div>
          <div>
            <button>Louer</button>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Model3;
