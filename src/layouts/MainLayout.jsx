import React from "react";
import { Outlet } from "react-router";

const MainLayout = () => {
  return (
    <div>
      <h1 className="text-amber-800">Hello from router</h1>
      <Outlet></Outlet>
    </div>
  );
};

export default MainLayout;
