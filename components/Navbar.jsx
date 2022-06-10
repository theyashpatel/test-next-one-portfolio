import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";

import {
  FaBars,
  FaFacebook,
  FaGithub,
  FaLinkedinIn,
  FaTimes,
  FaTwitter,
} from "react-icons/fa";

const Navbar = () => {
  const [nav, setNav] = useState(false);

  return (
    <div className="fixed w-full h-20 shadow-xl z-10">
      <div className="flex justify-between items-center w-full h-full px-4 2xl:px-16">
        <h2>Yash Patel</h2>

        <div>
          <ul className="hidden md:flex">
            <Link href="/">
              <li className="ml-10 text-sm uppercase hover:border-b">Home</li>
            </Link>
            <Link href="/">
              <li className="ml-10 text-sm uppercase hover:border-b">About</li>
            </Link>
            <Link href="/">
              <li className="ml-10 text-sm uppercase hover:border-b">Skills</li>
            </Link>
            <Link href="/">
              <li className="ml-10 text-sm uppercase hover:border-b">
                Projects
              </li>
            </Link>
            <Link href="/">
              <li className="ml-10 text-sm uppercase hover:border-b">
                Contact
              </li>
            </Link>
          </ul>

          {/* mobile menu */}

          <div className="md:hidden" onClick={() => setNav(true)}>
            <FaBars size={30} />
          </div>
        </div>
      </div>

      <div
        className={
          nav ? "md:hidden fixed left-0 top-0 w-full h-screen bg-black/70" : ""
        }
      >
        <div
          className={
            nav
              ? "fixed left-0 w-[75%] sm:2-[60%] md:w-[45%] h-screen bg-white p-10 ease-in duration-500"
              : "fixed left-[-100%] top-0 p-10 h-screen ease-in duration-500"
          }
        >
          <div>
            <div className="flex w-full items-center justify-between">
              <h2 className="">Yash Patel</h2>
              <div
                className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer"
                onClick={() => setNav(false)}
              >
                <FaTimes size={30} />
              </div>
            </div>

            <div className="border-b border-gray-300 my-4">
              <p className="w-[85%] md:w-[90%] py-4">
                Let's build something legendary together
              </p>
            </div>
          </div>

          <div className="py-4 flex flex-col">
            <ul className="uppercase">
              <Link href="/">
                <li className="py-4 text-sm">Home</li>
              </Link>
              <Link href="/">
                <li className="py-4 text-sm">About</li>
              </Link>
              <Link href="/">
                <li className="py-4 text-sm">Skills</li>
              </Link>
              <Link href="/">
                <li className="py-4 text-sm">Projects</li>
              </Link>
              <Link href="/">
                <li className="py-4 text-sm">Contact</li>
              </Link>
            </ul>

            <div className="pt-40">
              <p className="uppercase tracking-widest text-[#5651e5] ">
                Let's Connect
              </p>

              <div
                className="flex intece
               justify-between my-4 w-full sm:w-[80%]"
              >
                <div className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300 ">
                  <FaLinkedinIn />
                </div>
                <div className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300 ">
                  <FaGithub />
                </div>
                <div className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300 ">
                  <FaTwitter />
                </div>
                <div className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300 ">
                  <FaFacebook />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
