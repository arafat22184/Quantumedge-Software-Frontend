import React, { useState } from "react";
import { useNavigate } from "react-router";
import { MdWorkOutline, MdAttachMoney, MdDescription } from "react-icons/md";
import { IoLocationOutline } from "react-icons/io5";
import { RiUserStarLine } from "react-icons/ri";
import { PiUsersThree } from "react-icons/pi";
import { FaPlus, FaTimes } from "react-icons/fa";
import { toast } from "react-toastify";
import { useAuth } from "../../context/AuthContext";

const AddJob = () => {
  const [formData, setFormData] = useState({
    title: "",
    price: "",
    pricingType: "Fixed Price Project",
    description: "",
    location: "Remote",
    experienceLevel: "Mid Level",
    vacancy: "1 Freelancer",
    skills: [],
    newSkill: "",
  });

  const navigate = useNavigate();
  const { user, setAllProjects, allProjects } = useAuth();

  const inputStyle =
    "border border-[#4B4B4B] rounded-[46px] focus:border-[#05AF2B] outline-none min-h-[50px] w-full pl-12 pr-4 bg-transparent text-white";
  const labelStyle = "text-white text-sm font-medium mb-2 block";
  const selectStyle = `${inputStyle} appearance-none`;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleAddSkill = () => {
    if (
      formData.newSkill.trim() &&
      !formData.skills.includes(formData.newSkill.trim())
    ) {
      setFormData({
        ...formData,
        skills: [...formData.skills, formData.newSkill.trim()],
        newSkill: "",
      });
    }
  };

  const handleRemoveSkill = (skillToRemove) => {
    setFormData({
      ...formData,
      skills: formData.skills.filter((skill) => skill !== skillToRemove),
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Basic validation
    if (!formData.title || !formData.description || !formData.price) {
      return toast.error("Please fill in all required fields");
    }

    if (formData.skills.length === 0) {
      return toast.error("Please add at least one skill");
    }

    try {
      const jobData = {
        ...formData,
        postedBy: user?.name || "Anonymous",
        authorEmail: user?.email || "",
        postedDate: new Date().toLocaleDateString("en-US", {
          month: "short",
          day: "numeric",
          year: "numeric",
        }),
      };

      const res = await fetch("http://localhost:3000/api/jobs", {
        method: "POST",
        credentials: "include",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(jobData),
      });

      const data = await res.json();
      setAllProjects([...allProjects, jobData]);
      if (!res.ok) throw new Error(data.message || "Failed to post job");

      toast.success("Job posted successfully!");
      setTimeout(() => navigate("/"), 1000);
    } catch (err) {
      toast.error(err.message);
    }
  };

  return (
    <section>
      <div className="max-w-[1000px] mx-auto bg-[#071400] flex my-12 p-8 md:p-10 rounded-[28px] text-[#4B4B4B] text-center text-sm font-semibold relative">
        {/* Flare effect */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <div className="absolute w-[405px] h-[368px] bg-[#05AF2B] opacity-30 blur-[173.4px] rounded-full"></div>
        </div>

        {/* Form */}
        <div className="flex-1 w-full">
          <h3 className="text-[32px] font-bold text-white mb-6">
            Post a New Job
          </h3>

          <form className="flex flex-col gap-6" onSubmit={handleSubmit}>
            {/* Job Title */}
            <div>
              <label htmlFor="title" className={labelStyle}>
                Job Title *
              </label>
              <div className="relative">
                <input
                  type="text"
                  id="title"
                  name="title"
                  placeholder="e.g., SEO Audit and Optimization Specialist"
                  className={inputStyle}
                  value={formData.title}
                  onChange={handleChange}
                  required
                />
                <MdWorkOutline size={24} className="absolute top-3 left-4" />
              </div>
            </div>

            {/* Budget/Price */}
            <div>
              <label htmlFor="price" className={labelStyle}>
                Budget *
              </label>
              <div className="relative">
                <input
                  type="text"
                  id="price"
                  name="price"
                  placeholder="e.g., $800-$1,200"
                  className={inputStyle}
                  value={formData.price}
                  onChange={handleChange}
                  required
                />
                <MdAttachMoney size={24} className="absolute top-3 left-4" />
              </div>
            </div>

            {/* Pricing Type */}
            <div>
              <label htmlFor="pricingType" className={labelStyle}>
                Pricing Type
              </label>
              <div className="relative">
                <select
                  id="pricingType"
                  name="pricingType"
                  className={selectStyle}
                  value={formData.pricingType}
                  onChange={handleChange}
                >
                  <option value="Fixed Price Project">
                    Fixed Price Project
                  </option>
                  <option value="Hourly Rate">Hourly Rate</option>
                  <option value="Negotiable">Negotiable</option>
                </select>
                <div className="absolute right-4 top-3 pointer-events-none">
                  <svg
                    className="w-6 h-6 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </div>
              </div>
            </div>

            {/* Description */}
            <div>
              <label htmlFor="description" className={labelStyle}>
                Job Description *
              </label>
              <div className="relative">
                <textarea
                  id="description"
                  name="description"
                  placeholder="Describe the job responsibilities, requirements, and expectations..."
                  className="border border-[#4B4B4B] rounded-2xl focus:border-[#05AF2B] outline-none min-h-[150px] w-full p-4 bg-transparent text-white pl-12"
                  value={formData.description}
                  onChange={handleChange}
                  required
                />
                <MdDescription size={24} className="absolute top-4 left-4" />
              </div>
            </div>

            {/* Location and Experience Level */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="location" className={labelStyle}>
                  Location
                </label>
                <div className="relative">
                  <select
                    id="location"
                    name="location"
                    className={selectStyle}
                    value={formData.location}
                    onChange={handleChange}
                  >
                    <option value="Remote">Remote</option>
                    <option value="On-Site">On-Site</option>
                    <option value="Hybrid">Hybrid</option>
                  </select>
                  <IoLocationOutline
                    size={24}
                    className="absolute top-3 left-4"
                  />
                  <div className="absolute right-4 top-3 pointer-events-none">
                    <svg
                      className="w-6 h-6 text-white"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  </div>
                </div>
              </div>

              <div>
                <label htmlFor="experienceLevel" className={labelStyle}>
                  Experience Level
                </label>
                <div className="relative">
                  <select
                    id="experienceLevel"
                    name="experienceLevel"
                    className={selectStyle}
                    value={formData.experienceLevel}
                    onChange={handleChange}
                  >
                    <option value="Entry Level">Entry Level</option>
                    <option value="Mid Level">Mid Level</option>
                    <option value="Senior Level">Senior Level</option>
                  </select>
                  <RiUserStarLine size={24} className="absolute top-3 left-4" />
                  <div className="absolute right-4 top-3 pointer-events-none">
                    <svg
                      className="w-6 h-6 text-white"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  </div>
                </div>
              </div>
            </div>

            {/* Vacancy */}
            <div>
              <label htmlFor="vacancy" className={labelStyle}>
                Vacancy
              </label>
              <div className="relative">
                <select
                  id="vacancy"
                  name="vacancy"
                  className={selectStyle}
                  value={formData.vacancy}
                  onChange={handleChange}
                >
                  <option value="1 Freelancer">1 Freelancer</option>
                  <option value="2 Freelancers">2 Freelancers</option>
                  <option value="Multiple">Multiple</option>
                  <option value="Team">Team</option>
                </select>
                <PiUsersThree size={24} className="absolute top-3 left-4" />
                <div className="absolute right-4 top-3 pointer-events-none">
                  <svg
                    className="w-6 h-6 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </div>
              </div>
            </div>

            {/* Skills */}
            <div>
              <label className={labelStyle}>Required Skills *</label>
              <div className="flex gap-2 mb-3">
                <input
                  type="text"
                  placeholder="Add a skill (e.g., SEO Auditing)"
                  className="border border-[#4B4B4B] rounded-[46px] focus:border-[#05AF2B] outline-none min-h-[50px] flex-1 pl-4 pr-10 bg-transparent text-white"
                  value={formData.newSkill}
                  onChange={(e) =>
                    setFormData({ ...formData, newSkill: e.target.value })
                  }
                  onKeyPress={(e) =>
                    e.key === "Enter" && (e.preventDefault(), handleAddSkill())
                  }
                />
                <button
                  type="button"
                  onClick={handleAddSkill}
                  className="bg-[#05AF2B] hover:bg-[#16bb3a] text-white rounded-full w-12 h-12 flex items-center justify-center"
                >
                  <FaPlus />
                </button>
              </div>

              {/* Skills List */}
              <div className="flex flex-wrap gap-2">
                {formData.skills.map((skill, index) => (
                  <div
                    key={index}
                    className="bg-[#05AF2B] text-white rounded-full px-4 py-2 flex items-center gap-2"
                  >
                    {skill}
                    <button
                      type="button"
                      onClick={() => handleRemoveSkill(skill)}
                      className="text-white hover:text-gray-200"
                    >
                      <FaTimes size={12} />
                    </button>
                  </div>
                ))}
              </div>
            </div>

            {/* Submit Button */}
            <div className="mt-6">
              <button
                type="submit"
                className="w-full bg-[#05AF2B] hover:bg-[#16bb3a] py-4 rounded-[46px] text-white font-semibold text-lg cursor-pointer"
              >
                Post Job
              </button>
            </div>
          </form>
        </div>
      </div>

      {/* Custom styles for select dropdowns */}
      <style jsx>{`
        select option {
          background-color: #071400;
          color: white;
        }

        select:focus option:checked {
          background-color: #05af2b;
          color: white;
        }
      `}</style>
    </section>
  );
};

export default AddJob;
