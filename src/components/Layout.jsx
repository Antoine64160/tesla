import React from "react";
import Navbar from "./Navbar";

const Layout = ({ children }) => {
  return (
    <div className="w-screen min-h-screen">
      <Navbar />

      <main>{children}</main>
    </div>
  );
};

export default Layout;
