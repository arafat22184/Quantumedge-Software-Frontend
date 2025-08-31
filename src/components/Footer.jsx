import React from "react";
import logo from "../assets/logo.png";
import { Link } from "react-router";
import { FaFacebookF, FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import footerImage from "../assets/footerImage.png";

const Footer = () => {
  return (
    <footer className="bg-[#071400] py-11">
      <div className="max-w-7xl mx-auto">
        {/* header part */}
        <div className="flex gap-[200px] mb-[46px]">
          <h3 className="text-[32px] font-bold text-white">
            Reach Your Requirement Goals Right
            <br /> on Schedule
          </h3>
          <div>
            <p className="text-[#CCCCCC]">
              Sign up, complete your profile, and start browsing projects.
              Submit
              <br />
              proposals and communicate with clients to get hired.
            </p>
            <button className="py-[9px] px-[21px] bg-[#05AF2B] text-white rounded-[22px] mt-6">
              Get Started
            </button>
          </div>
        </div>

        {/* Main part */}
        <div className="grid grid-cols-4 justify-items-center border-t-2 border-[#CCCCCC]/6">
          {/* Logo */}
          <div className="justify-self-start mt-[42px]">
            <img className="max-w-[227px]" src={logo} alt="Logo" />
          </div>

          {/* About */}
          <div className="footerLink w-full justify-items-center border-r-2 border-[#CCCCCC]/6">
            <div>
              <h4>About</h4>
              <ul>
                <li>
                  <Link to={"/about"}>About Us</Link>
                </li>
                <li>
                  <Link to={"/become-seller"}>Become Seller</Link>
                </li>
                <li>
                  <Link to={"/projobs"}>ProProJobs</Link>
                </li>
              </ul>
            </div>
          </div>

          {/* Categories */}
          <div className="footerLink w-full justify-items-center border-r-2 border-b-2 border-[#CCCCCC]/6">
            <div>
              <h4>Categories</h4>
              <ul>
                <li>
                  <Link to={"/design&creative"}>Design & Creative</Link>
                </li>
                <li>
                  <Link to={"/development&it"}>Developments & IT</Link>
                </li>
                <li>
                  <Link to={"/music&audio"}>Music & Audio</Link>
                </li>
                <li>
                  <Link to={"/programming"}>Programming & Tech</Link>
                </li>
              </ul>
            </div>
          </div>

          {/* Support */}
          <div className="footerLink w-full justify-items-center border-b-2 border-[#CCCCCC]/6">
            <div>
              <h4>Support</h4>
              <ul>
                <li>
                  <Link to={"/support"}>Help & Support</Link>
                </li>
                <li>
                  <Link to={"/faq"}>FAQ</Link>
                </li>
                <li>
                  <Link to={"/contact"}>Contact Us</Link>
                </li>
                <li>
                  <Link to={"/services"}>Terms & Services</Link>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Social-Media Icon & Latest Posts */}
        <div className="grid grid-cols-2 items-center mt-[17px] pb-[34px] border-b-2 border-[#CCCCCC]/6">
          {/* Social-Media Icons */}
          <div className="flex gap-[14px] relative">
            <a
              className="rounded-full w-10 h-10 bg-[#05AF2B] text-white flex items-center justify-center"
              href="https://www.facebook.com/"
              target="_blank"
            >
              <FaFacebookF size={24} />
            </a>
            <a
              className="rounded-full w-10 h-10 bg-[#4B4B4B] text-white/60 flex items-center justify-center"
              href="https://www.instagram.com/"
              target="_blank"
            >
              <FaInstagram size={24} />
            </a>
            <a
              className="rounded-full w-10 h-10 bg-[#4B4B4B] text-white/60 flex items-center justify-center"
              href="http://x.com/"
              target="_blank"
            >
              <FaXTwitter size={24} />
            </a>

            {/* Flare effect */}
            <div className="absolute inset-0 -top-4 left-4 pointer-events-none">
              <div className="absolute w-[120px] h-[100px] bg-[#05AF2B] opacity-80 blur-[90px] rounded-full"></div>
            </div>
          </div>

          {/* Latest Posts */}
          <div>
            <h1 className="text-lg text-white font-bold mb-[21px]">
              Our Popular Post
            </h1>
            <div className="flex">
              {/* 1st popular post */}
              <div className="flex gap-[18px]">
                <img src={footerImage} alt="Popular post" />
                <div className="space-y-[9px]">
                  <p className="text-[#CCCCCC] text-[12px]">November 7,2024</p>
                  <h4 className="text-white text-sm font-semibold">
                    Unveils the Best Canadian Cities for Biking
                  </h4>
                </div>
              </div>

              {/* 2nd Popular post */}
              <div className="flex gap-[18px]">
                <img src={footerImage} alt="Popular post" />
                <div className="space-y-[9px]">
                  <p className="text-[#CCCCCC] text-[12px]">November 7,2024</p>
                  <h4 className="text-white text-sm font-semibold">
                    Unveils the Best Canadian Cities for Biking
                  </h4>
                </div>
              </div>
            </div>
          </div>
        </div>

        <p className="text-center text-[#CCCCCC] font-semibold text-sm pt-[30px]">
          &copy; QuantumEdge Software INC. 2025. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
