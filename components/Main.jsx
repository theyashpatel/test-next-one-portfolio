import React from "react";
import { FaFacebook, FaGithub, FaLinkedinIn, FaTwitter } from "react-icons/fa";

const Main = () => {
  return (
    <div className="w-full h-screen text-center">
      <div className="max-w-screen-xl mx-auto w-full h-full p-2 flex justify-center items-center">
        <div>
          <p className="uppercase text-sm tracking-widest text-gray-600">
            let's build something together
          </p>

          <h1 className="py-4 text-gray-700">
            Hi, I'm <span className="text-[#5651e5]">Yash</span>
          </h1>

          <h1 className="capitalize py-4 text-gray-700">
            a full stack developer
          </h1>

          <p className="py-4 text-gray-600 max-w-[70%] mx-auto">
            I'm a full stack developer specializing in building (and
            occasionally designing) exceptional digital experiences. Currently,
            I'm focused on building responsive full stack applications while
            learning back-end technologies.
          </p>

          <div className="flex items-center justify-between max-w-[330px] m-auto py-4">
            <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-105 ease-in duration-300">
              <FaLinkedinIn />
            </div>
            <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-105 ease-in duration-300">
              <FaGithub />
            </div>
            <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-105 ease-in duration-300">
              <FaTwitter />
            </div>
            <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-105 ease-in duration-300">
              <FaFacebook />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
