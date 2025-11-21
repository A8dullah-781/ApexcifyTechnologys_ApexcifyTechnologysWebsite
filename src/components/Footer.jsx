import React from "react";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";
import { SiReact } from "react-icons/si";

const Footer = () => {
  return (
    <footer
      className="bg-gray-900 
        cursor-none text-gray-200 py-12 px-6 md:px-20"
    >
      <div className="flex flex-col md:flex-row justify-between gap-10">
        
        <div className="flex flex-col items-center md:items-start gap-4">
          <div className="flex items-center gap-2 text-3xl font-bold text-white">
            <SiReact className="text-cyan-400 hover:shadow-[0_0_10px_cyan] transition-shadow duration-300 " />
            Apexify
          </div>
          <div className="flex gap-4 mt-2">
            <FaFacebookF className="hover:text-blue-500 hover:shadow-[0_0_10px_blue] transition duration-300 " />
            <FaTwitter className="hover:text-sky-400 hover:shadow-[0_0_10px_skyblue] transition duration-300 " />
            <FaInstagram className="hover:text-pink-500 hover:shadow-[0_0_10px_pink] transition duration-300 " />
            <FaLinkedinIn className="hover:text-blue-700 hover:shadow-[0_0_10px_blue] transition duration-300 " />
          </div>
        </div>

        <div
          className="flex justify-center 
        cursor-none md:justify-start gap-6 flex-wrap"
        >
          {["Home", "About", "Services"].map((link) => (
            <a
              key={link}
              href={`#${link.toLowerCase()}`}
              className="relative group 
        cursor-none px-2 py-1 text-gray-200 hover:text-cyan-400 transition-colors"
            >
              {link}
          
              <span
                className="absolute left-0 bottom-15 w-0 
        cursor-none h-[1px] bg-white transition-all duration-300 group-hover:w-full"
              ></span>
            </a>
          ))}
        </div>

       
        <div className="flex flex-col gap-2 text-center md:text-left">
          <div className="font-semibold text-xl mb-2">Contact</div>
          <div>+1 (682) 600-4502</div>
          <div>info@apexifytechnologies.com</div>
        </div>
      </div>

      <div className="mt-10 text-center text-gray-500 text-sm">
        © 2025 Apexify Technologies. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
