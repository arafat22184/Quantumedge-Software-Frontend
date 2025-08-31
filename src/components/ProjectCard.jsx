import React from "react";
import { FiBriefcase } from "react-icons/fi";
import { GrUserWorker } from "react-icons/gr";
import { IoLocationOutline } from "react-icons/io5";

const ProjectCard = () => {
  return (
    <div className="pt-6 pb-8.5 pl-5 pr-10 text-sm rounded-2xl hover:shadow-2xl group cursor-pointer">
      <p className="text-[#888888]">Apr 30, 2024</p>
      <h2 className="text-xl font-bold text-[#4B4B4B] mt-[9px] mb-[22px]">
        Website Design and Front-End Development
      </h2>
      <div className="bg-[#CCCCCC]/20 py-[11px] pl-[22px] pr-[25px] flex justify-between items-center rounded-[5px]">
        <p className="text-[#888888]">Fixed Price Project</p>
        <p className="font-semibold text-[#4B4B4B]">$1,200-$1,400</p>
      </div>
      <p className="text-[16px] text-[#4B4B4B] mt-5 mb-8.5">
        In this role, you will be responsible for conducting comprehensive SEO
        audits and implementing strategies to optimize websites...
      </p>

      {/* details */}
      <div className="flex items-center gap-2.5">
        {/* Working Location */}
        <div className="bg-[#FAF7FF] text-[#9747FF] flex items-center gap-[5px] p-[5px] rounded-[23px]">
          <IoLocationOutline />
          <p>App Design</p>
        </div>

        {/* Experience level */}
        <div className="bg-[#FFF5F5] text-[#DB3131] flex items-center gap-[5px] p-[5px] rounded-[23px]">
          <FiBriefcase />
          <p>Senior level</p>
        </div>

        {/* Skill level */}
        <div className="bg-[#E9FFEE] text-[#05AF2B] flex items-center gap-[5px] p-[5px] rounded-[23px]">
          <GrUserWorker />
          <p>2 Freelancer</p>
        </div>
      </div>

      {/* details */}
      <div className="flex mt-8.5 mb-4 gap-2.5">
        <p className="font-semibold py-[6px] px-4 bg-[#CCCCCC]/18 rounded-xl">
          App Design
        </p>
        <p className="font-semibold py-[6px] px-4 bg-[#CCCCCC]/18 rounded-xl">
          Art Generation
        </p>
        <p className="font-semibold py-[6px] px-4 bg-[#CCCCCC]/18 rounded-xl">
          Illustration
        </p>
      </div>

      <p className="text-[#CCCCCC] my-5">
        Posted by{" "}
        <span className="text-[16px] text-black font-semibold">
          Eamman Olio
        </span>
      </p>

      {/* Button */}
      <button className="py-[9px] px-6 bg-black text-white rounded-[22px] transition-colors duration-300 group-hover:bg-[#05AF2B] cursor-pointer">
        Apply Now
      </button>
    </div>
  );
};

export default ProjectCard;
