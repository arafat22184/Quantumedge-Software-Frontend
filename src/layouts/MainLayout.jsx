import React from "react";
import { Outlet } from "react-router";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const MainLayout = () => {
  return (
    <div className="relative">
      <header className="bg-[#071400]">
        <Navbar></Navbar>
        {/* Flare effect */}
        <div className="absolute inset-0 -left-20 -top-28 pointer-events-none">
          <div className="absolute w-[405px] h-[368px] bg-[#05AF2B] opacity-30 blur-[120px] rounded-full"></div>
        </div>
      </header>
      <Outlet></Outlet>
      <Footer></Footer>
    </div>
  );
};

export default MainLayout;
