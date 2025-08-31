import React from "react";
import { LuSearch } from "react-icons/lu";

const Banner = () => {
  return (
    <section className="bg-[#071400] mb-80 pt-[77px] pb-23">
      <form className="max-w-7xl mx-auto">
        <div className="relative">
          <input
            type="search"
            name="searchBanner"
            placeholder="Search your needs"
            className="border border-white min-h-14.5 min-w-141.5 rounded-[10px] bg-white/10"
          />

          {/* Select */}
          <select className="absolute left-2.5 top-[6px] min-h-9 bg-white/22 rounded-md text-center">
            <option className="bg-green-950">Freelancer</option>
            <option className="bg-green-950">Project-based</option>
            <option className="bg-green-950">Employment</option>
          </select>

          <button className="w-11.5 h-11.5 bg-[#05AF2B] text-white rounded-full flex justify-center items-center absolute right-0">
            <LuSearch />
          </button>
        </div>
        <input type="submit" value="Advanced search" />
      </form>
    </section>
  );
};

export default Banner;
