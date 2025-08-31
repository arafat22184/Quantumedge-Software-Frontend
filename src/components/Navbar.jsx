import React from "react";
import { Link } from "react-router";
import logo from "../assets/logo.png";
import { BiCategory } from "react-icons/bi";

const Navbar = () => {
  const user = false;
  const conditionalLink = user ? (
    <p>Hello user</p>
  ) : (
    <>
      <Link to={"/login"} className="hover:text-[#05AF2B] cursor-pointer">
        Login
      </Link>
      <Link
        to={"/register"}
        className="py-2.5 px-5 bg-[#05AF2B] rounded-[46px] lg:hidden xl:block"
      >
        Register
      </Link>
    </>
  );

  return (
    <nav className="navbar py-5 max-w-7xl mx-auto text-sm font-semibold text-white">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {" "}
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />{" "}
            </svg>
          </div>
          <div
            tabIndex={0}
            className="menu menu-sm dropdown-content rounded-box z-1 mt-3 p-2 shadow bg-green-950 gap-3"
          >
            <form className="relative">
              <input
                className="bg-white/10 min-h-12 lg:min-w-[345px] rounded-lg text-white pl-36"
                type="search"
                name="search-nav"
              />
              <select className="absolute left-2.5 top-[6px] min-h-9 bg-white/22 rounded-md text-center">
                <option className="bg-green-950">Freelancer</option>
                <option className="bg-green-950">Project-based</option>
                <option className="bg-green-950">Employment</option>
              </select>
            </form>
            <div className="flex gap-7 items-center">
              <p className="hover:text-[#05AF2B] cursor-pointer">
                BECAME A SELLER
              </p>
              {conditionalLink}
            </div>
          </div>
        </div>
        <div className="flex items-center gap-2.5 md:gap-[35px]">
          <Link to={"/"}>
            <img className="max-w-[234px]" src={logo} alt="logo"></img>
          </Link>
          <div className="hidden md:flex items-center gap-[5px] text-[#05AF2B] px-3 py-1 border border-[#05AF2B] rounded-[29px] ">
            <BiCategory />
            Categories
          </div>
        </div>
      </div>
      <div className="navbar-center hidden lg:flex gap-12">
        <form className="relative">
          <input
            className="bg-white/10 min-h-12 lg:min-w-[345px] rounded-lg text-white pl-36"
            type="search"
            name="search-nav"
          />
          <select className="absolute left-2.5 top-[6px] min-h-9 bg-white/22 rounded-md text-center">
            <option className="bg-green-950">Freelancer</option>
            <option className="bg-green-950">Project-based</option>
            <option className="bg-green-950">Employment</option>
          </select>
        </form>
        <div className="flex gap-7 items-center">
          <p className="hover:text-[#05AF2B] cursor-pointer">BECAME A SELLER</p>
          {conditionalLink}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
