import React from "react";
import Navbar from "../components/navbar";
import { Outlet } from "react-router-dom";
import RootFooter from "./RootFooter";

const RootLayout = () => {
  return (
    <div>
      <Navbar />
      <Outlet />
      <RootFooter />
    </div>
  );
};

export default RootLayout;
