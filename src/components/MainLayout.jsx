import React from "react";
import Navbar from "./Navbar";
import { Outlet } from "react-router-dom";

export default function MainLayout() {
  return (
    <div className="w-4/5 mx-auto">
      <Navbar></Navbar>
      <Outlet></Outlet>
    </div>
  );
}
