import React, { useState } from "react";
import { Link } from "react-router";
import regimg from "../../assets/reg-image.jpg";
import { MdMailOutline } from "react-icons/md";
import { CiLock } from "react-icons/ci";
import { FiEye, FiEyeOff } from "react-icons/fi";
import { FaApple, FaFacebookF } from "react-icons/fa";
import { BsTwitterX } from "react-icons/bs";

const Register = () => {
  const [showPass, setShowPass] = useState(false);
  const inputStyle =
    "border border-[#4B4B4B] rounded-[46px] focus:border-[#05AF2B] outline-none min-h-[50px] w-full pl-15";

  const socialButtonStyle =
    "py-4 text-white bg-[#1E1E1E] rounded-[46px] flex-1 flex justify-center cursor-pointer hover:bg-[#292828]";

  const passShowCondition = () => {
    setShowPass(!showPass);
  };

  return (
    <section>
      <div className="max-w-7xl mx-auto bg-[#071400] flex my-36 p-10 rounded-[28px] justify-between gap-36 text-[#4B4B4B] text-center text-sm font-semibold">
        {/* Form */}
        <div className="flex-1 max-w-[447px]">
          {/* Heading */}
          <h3 className="text-[32px] font-bold text-white">
            Open your account
          </h3>
          <p className="text-white mt-2.5 mb-9">
            Already have an account?{" "}
            <Link className="text-[#05AF2B]" to={"/login"}>
              Sign in
            </Link>
          </p>

          {/* Registration Form */}
          <form className="flex flex-col gap-[30px]">
            <div className="relative">
              <input
                type="email"
                name="email"
                placeholder="Email Address"
                className={inputStyle}
              />
              <MdMailOutline size={"24"} className="absolute top-3 left-6" />
            </div>

            {/* Password */}
            <div className="relative">
              <input
                type={showPass ? "text" : "password"}
                name="password"
                placeholder="Password"
                className={inputStyle}
              />
              <CiLock size={"24"} className="absolute top-3 left-6" />
              <div onClick={passShowCondition} className="cursor-pointer">
                {showPass ? (
                  <FiEyeOff size={"24"} className="absolute top-3 right-6" />
                ) : (
                  <FiEye size={"24"} className="absolute top-3 right-6" />
                )}
              </div>
            </div>

            {/* Confirm Password */}
            <div className="relative">
              <input
                type={showPass ? "text" : "password"}
                name="confirm-password"
                placeholder="Confirm Password"
                className={inputStyle}
              />
              <CiLock size={"24"} className="absolute top-3 left-6" />
              <div onClick={passShowCondition} className="cursor-pointer">
                {showPass ? (
                  <FiEyeOff size={"24"} className="absolute top-3 right-6" />
                ) : (
                  <FiEye size={"24"} className="absolute top-3 right-6" />
                )}
              </div>
            </div>

            <input
              type="submit"
              className="w-full bg-[#05AF2B] py-[14px] rounded-[46px] text-white"
              value="Create Account"
            />
          </form>

          {/* Divider */}
          <div className="divider before:h-[1px] after:h-[1px] before:bg-[#4B4B4B] after:bg-[#4B4B4B] text-white my-10">
            or
          </div>

          {/* Social Login Buttons */}
          <div className="flex items-cente gap-[30px]">
            {/* Facebook */}
            <div className={socialButtonStyle}>
              <FaFacebookF size={26} />
            </div>

            {/* Apple */}
            <div className={socialButtonStyle}>
              <FaApple size={26} />
            </div>

            {/* Twitter */}
            <div className={socialButtonStyle}>
              <BsTwitterX size={26} />
            </div>
          </div>
        </div>

        {/* Image */}
        <div className="flex-1">
          <img src={regimg} alt="employee image" />
        </div>
      </div>
    </section>
  );
};

export default Register;
