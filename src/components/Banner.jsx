import React from "react";
import { LuSearch } from "react-icons/lu";

const Banner = () => {
  return (
    <section className="bg-[#071400] mb-80">
      <form className="max-w-[1400px] mx-auto space-x-5.5 pt-[77px] pb-23 border-t-2 border-[#CCCCCC]/6">
        <div className="relative inline-block">
          <input
            type="search"
            name="searchBanner"
            placeholder="Search your needs"
            className="min-h-[58px] w-[566px] text-white pl-[40px] pr-[208px] searchInput outline-none"
          />
          {/* Select */}
          <select className="text-white rounded-full flex justify-center items-center absolute right-16.5 top-1/2 -translate-y-1/2 bg-transparent border-none outline-none">
            <option className="bg-green-950">MERN Developer</option>
            <option className="bg-green-950">Web Developer</option>
            <option className="bg-green-950">IOS Developer</option>
          </select>
          <button
            type="button"
            className="w-11.5 h-11.5 bg-[#05AF2B] text-white rounded-full flex justify-center items-center absolute right-2 top-1/2 -translate-y-1/2 cursor-pointer"
          >
            <LuSearch />
          </button>
        </div>
        <input
          type="submit"
          value="Advanced search"
          className="bg-[#05AF2B] text-white mt-4 px-4 py-4 rounded-[46px]"
        />
      </form>
    </section>
  );
};

export default Banner;
