import React, { useState } from "react";
import { Link, useNavigate } from "react-router";
import { MdMailOutline, MdOutlineDriveFileRenameOutline } from "react-icons/md";
import { CiLock } from "react-icons/ci";
import { FiEye, FiEyeOff } from "react-icons/fi";
import { FaApple, FaFacebookF } from "react-icons/fa";
import { BsTwitterX } from "react-icons/bs";
import { IoMdClose } from "react-icons/io";
import { toast } from "react-toastify";
import regimg from "../../assets/reg-image.jpg";
import { useAuth } from "../../context/AuthContext";

const Register = () => {
  const [showPass, setShowPass] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const navigate = useNavigate();
  const { register } = useAuth();

  const inputStyle =
    "border border-[#4B4B4B] rounded-[46px] focus:border-[#05AF2B] outline-none min-h-[50px] w-full pl-15";
  const socialButtonStyle =
    "py-4 text-white bg-[#1E1E1E] rounded-[46px] flex-1 flex justify-center cursor-pointer hover:bg-[#292828]";

  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (formData.password !== formData.confirmPassword)
      return toast.error("Passwords do not match");
    try {
      await register({
        name: formData.name,
        email: formData.email,
        password: formData.password,
      });
      setTimeout(() => navigate("/jobs"), 800);
    } catch (err) {
      toast.error(err.message);
    }
  };

  return (
    <section>
      <div className="max-w-[1400px] mx-2 xl:mx-auto bg-[#071400] flex my-12 p-10 lg:pl-[119px] rounded-[28px] justify-between gap-36 text-[#4B4B4B] text-center text-sm font-semibold relative">
        {/* Flare effect */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <div className="absolute w-[405px] h-[368px] bg-[#05AF2B] opacity-30 blur-[173.4px] rounded-full"></div>
        </div>

        {/* Form */}
        <div className="flex-1 lg:max-w-[447px]">
          <h3 className="text-[32px] font-bold text-white">
            Open your account
          </h3>
          <p className="text-white mt-2.5 mb-9">
            Already have an account?{" "}
            <Link className="text-[#05AF2B]" to="/login">
              Sign in
            </Link>
          </p>

          <form className="flex flex-col gap-[30px]" onSubmit={handleSubmit}>
            <div className="relative">
              <input
                type="text"
                name="name"
                placeholder="Full Name"
                className={inputStyle}
                autoComplete="name"
                onChange={handleChange}
                required
              />
              <MdOutlineDriveFileRenameOutline
                size={24}
                className="absolute top-3 left-6"
              />
            </div>

            <div className="relative">
              <input
                type="email"
                name="email"
                placeholder="Email Address"
                className={inputStyle}
                autoComplete="email"
                onChange={handleChange}
                required
              />
              <MdMailOutline size={24} className="absolute top-3 left-6" />
            </div>

            <div className="relative">
              <input
                type={showPass ? "text" : "password"}
                name="password"
                placeholder="Password"
                className={inputStyle}
                autoComplete="new-password"
                onChange={handleChange}
                required
              />
              <CiLock size={24} className="absolute top-3 left-6" />
              <div
                onClick={() => setShowPass(!showPass)}
                className="cursor-pointer"
              >
                {showPass ? (
                  <FiEyeOff size={24} className="absolute top-3 right-6" />
                ) : (
                  <FiEye size={24} className="absolute top-3 right-6" />
                )}
              </div>
            </div>

            <div className="relative">
              <input
                type={showPass ? "text" : "password"}
                name="confirmPassword"
                placeholder="Confirm Password"
                className={inputStyle}
                autoComplete="new-password"
                onChange={handleChange}
                required
              />
              <CiLock size={24} className="absolute top-3 left-6" />
              <div
                onClick={() => setShowPass(!showPass)}
                className="cursor-pointer"
              >
                {showPass ? (
                  <FiEyeOff size={24} className="absolute top-3 right-6" />
                ) : (
                  <FiEye size={24} className="absolute top-3 right-6" />
                )}
              </div>
            </div>

            <input
              type="submit"
              className="w-full bg-[#05AF2B] hover:bg-[#16bb3a] py-[14px] rounded-[46px] text-white cursor-pointer"
              value="Create Account"
            />
          </form>

          <div className="divider before:h-[1px] after:h-[1px] before:bg-[#4B4B4B] after:bg-[#4B4B4B] text-white my-10">
            or
          </div>

          <div className="flex items-cente gap-[30px] mb-10">
            <div className={socialButtonStyle}>
              <FaFacebookF size={26} />
            </div>
            <div className={socialButtonStyle}>
              <FaApple size={26} />
            </div>
            <div className={socialButtonStyle}>
              <BsTwitterX size={26} />
            </div>
          </div>

          <p className="text-[#888888]">
            By joining, you agree to the Fiverr{" "}
            <span className="text-[#05AF2B] underline">Terms of Service</span>{" "}
            and to occasionally receive emails from us. Please read our{" "}
            <span className="text-[#05AF2B] underline">Privacy Policy</span>.
          </p>
        </div>

        {/* Image */}
        <div className="flex-1 relative hidden lg:block">
          <div className="inverted-radius-top h-full">
            <img
              src={regimg}
              className="h-full object-cover object-center rounded-tl-2xl rounded-br-2xl rounded-[16px] inverted-radius-bottom"
              alt="employee"
            />
          </div>
          <div className="absolute w-[45px] h-[45px] top-0 right-0">
            <IoMdClose
              className="text-[#05AF2B] rounded-full bg-[#1B1B1B] border border-[#4B4B4B] p-1 w-full h-full"
              size={32}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Register;
