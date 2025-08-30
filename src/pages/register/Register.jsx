import React from "react";
import { Link } from "react-router";
import regimg from "../../assets/reg-image.jpg";

const Register = () => {
  return (
    <section>
      <div className="max-w-7xl mx-auto bg-[#071400] flex my-36 p-10 rounded-[28px] justify-between min-h-[700px] gap-36 text-[#4B4B4B] text-center">
        {/* Form */}
        <div>
          <h3 className="text-[32px]">Open your account</h3>
          <p className="">
            Already have an account? <Link to={"/login"}>Sign in</Link>
          </p>
        </div>
        {/* Image */}
        <div>
          <img src={regimg} alt="employee image" />
        </div>
      </div>
    </section>
  );
};

export default Register;
