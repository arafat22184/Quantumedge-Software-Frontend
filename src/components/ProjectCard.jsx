import React from "react";
import { FiBriefcase } from "react-icons/fi";
import { GrUserWorker } from "react-icons/gr";
import { IoLocationOutline } from "react-icons/io5";
import { Link } from "react-router";
import Swal from "sweetalert2";
import { useAuth } from "../context/AuthContext";

const ProjectCard = ({ project, user }) => {
  const { setAllProjects } = useAuth();
  const {
    title,
    price,
    pricingType,
    description,
    location,
    experienceLevel,
    vacancy,
    skills,
    postedBy,
    postedDate,
    authorEmail,
  } = project;
  const isAuthor = authorEmail === user?.email;

  const handleDelete = async () => {
    const result = await Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#05AF2B",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    });

    if (result.isConfirmed) {
      try {
        const response = await fetch(
          `https://quantumedge-software-backend.onrender.com/api/jobs/${project._id}`,
          {
            method: "DELETE",
            credentials: "include",
            headers: {
              "Content-Type": "application/json",
            },
          }
        );

        const data = response.status !== 204 ? await response.json() : {};

        if (!response.ok) {
          throw new Error(data.message || "Failed to delete job");
        }

        Swal.fire("Deleted!", "Your job has been deleted.", "success");

        setAllProjects((prev) => prev.filter((job) => job._id !== project._id));
      } catch (err) {
        Swal.fire("Error!", err.message, "error");
      }
    }
  };

  return (
    <div className="pt-6 pb-8.5 pl-5 pr-10 text-sm rounded-2xl hover:shadow-2xl group cursor-pointer">
      <p className="text-[#888888]">{postedDate}</p>
      <h2 className="text-xl font-bold text-[#4B4B4B] mt-[9px] mb-[22px]">
        {title}
      </h2>
      <div className="bg-[#CCCCCC]/20 py-[11px] pl-[22px] pr-[25px] flex justify-between items-center rounded-[5px]">
        <p className="text-[#888888]">{pricingType}</p>
        <p className="font-semibold text-[#4B4B4B]">{price}</p>
      </div>
      <p className="text-[16px] text-[#4B4B4B] mt-5 mb-8.5">
        {description.length > 100
          ? description.slice(0, 120) + "..."
          : description}
      </p>

      {/* details */}
      <div className="flex items-center gap-2.5">
        {/* Working Location */}
        <div className="bg-[#FAF7FF] text-[#9747FF] flex items-center gap-[5px] p-[5px] rounded-[23px]">
          <IoLocationOutline />
          <p>{location}</p>
        </div>

        {/* Experience level */}
        <div className="bg-[#FFF5F5] text-[#DB3131] flex items-center gap-[5px] p-[5px] rounded-[23px]">
          <FiBriefcase />
          <p>{experienceLevel}</p>
        </div>

        {/* Vacancy */}
        <div className="bg-[#E9FFEE] text-[#05AF2B] flex items-center gap-[5px] p-[5px] rounded-[23px]">
          <GrUserWorker />
          <p>{vacancy}</p>
        </div>
      </div>

      {/* details */}
      <div className="flex mt-8.5 mb-4 gap-2.5">
        {skills.slice(0, 3).map((skill) => (
          <p
            key={skill}
            className="font-semibold py-[6px] px-4 bg-[#CCCCCC]/18 rounded-xl"
          >
            {skill}
          </p>
        ))}
      </div>
      {skills.length > 3 && (
        <p className="font-semibold">+{skills.length - 3} more</p>
      )}

      <p className="text-[#CCCCCC] my-5">
        Posted by{" "}
        <span className="text-[16px] text-black font-semibold">{postedBy}</span>
      </p>

      {/* Button */}
      {isAuthor ? (
        <div className="flex items-center gap-4">
          <Link
            to={`/updateJob/${project._id}`}
            className="py-[9px] px-6 bg-black text-white rounded-[22px] transition-colors duration-300 cursor-pointer hover:bg-[#05AF2B]"
          >
            Edit Job
          </Link>
          <button
            onClick={handleDelete}
            className="py-[9px] px-6 bg-red-500 text-white rounded-[22px] transition-colors duration-300 cursor-pointer hover:bg-red-600"
          >
            Delete Job
          </button>
        </div>
      ) : (
        <button className="py-[9px] px-6 bg-black text-white rounded-[22px] transition-colors duration-300 group-hover:bg-[#05AF2B] cursor-pointer">
          Apply Now
        </button>
      )}
    </div>
  );
};

export default ProjectCard;
