import React from "react";
import { Link } from "react-router-dom";

const navbar = () => {
  return (
    <div className=" bg-transparent absolute z-50 top-0 flex flex-row ">
      <div className="flex w-24 pl-3 pt-2">
        <Link to="/">
          <img alt="" src="assets/580b585b2edbce24c47b2cc9.png" />
        </Link>
      </div>
      <div className="flex flex-row px-60 mt-8 ">
        <li className="flex mx-16">
          <Link to="/ModelS">Model S</Link>
        </li>
        <li className="flex mx-16">
          <Link to="/Model3">Model 3</Link>
        </li>
        <li className="flex mx-16">
          <Link to="/ModelX">Model X</Link>
        </li>
        <li className="flex mx-16">
          <Link to="/ModelY">Model Y</Link>
        </li>
      </div>
    </div>
  );
};
export default navbar;
