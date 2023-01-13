import React from "react";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="parent">
      <section className="section w-screen h-screen relative">
        <img
          className="absolute w-screen top-0 left-0  h-screen object-cover"
          src="assets/Y Home.jpeg"
          alt=""
        />
        <div className="flex justify-center font-medium">
          <h1 className="relative text-black justify-center  text-5xl pt-24 mt-10">
            Model Y
          </h1>
        </div>
        <div className="relative flex flex-col items-center  text-black px-10 mt-[450px] mx-[630px] border-solid border-black border-[3px] rounded-xl">
          <Link to="/modelY">
            <button className="text-3xl ">Voir</button>
          </Link>
        </div>
      </section>
      <section className="section w-screen h-screen relative">
        <img
          className="absolute w-screen top-0 left-0  h-screen object-cover"
          src="assets/3 Home.jpeg"
          alt=""
        />
        <div className="flex justify-center font-medium">
          <h1 className="relative text-black justify-center  text-5xl pt-24 mt-10">
            Model 3
          </h1>
        </div>
        <div className="relative flex flex-col items-center  text-black px-10 mt-[450px] mx-[630px] border-solid border-black border-[3px] rounded-xl">
          <Link to="/model3">
            <button className="text-3xl">Voir</button>
          </Link>
        </div>
      </section>
      <section className="section w-screen h-screen relative">
        <img
          className="absolute w-screen top-0 left-0  h-screen object-cover"
          src="assets/S Home.webp"
          alt=""
        />
        <div className="flex justify-center font-medium">
          <h1 className="relative text-black justify-center  text-5xl pt-24 mt-10">
            Model S
          </h1>
        </div>
        <div className="relative flex flex-col items-center  text-black px-10 mt-[450px] mx-[630px] border-solid border-black border-[3px] rounded-xl">
          <Link to="/modelS">
            <button className="text-3xl">Voir</button>
          </Link>
        </div>
      </section>
      <section className="section w-screen h-screen relative">
        <img
          className="absolute w-screen top-0 left-0  h-screen object-cover"
          src="assets/X Home.webp"
          alt=""
        />
        <div className="flex justify-center font-medium">
          <h1 className="relative text-black justify-center  text-5xl pt-24 mt-10">
            Model X
          </h1>
        </div>
        <div className="relative flex flex-col items-center  text-black px-10 mt-[450px] mx-[630px] border-solid border-black border-[3px] rounded-xl">
          <Link to="/modelX">
            <button className="text-3xl">Voir</button>
          </Link>
        </div>
      </section>
    </div>
  );
}

export default Home;
