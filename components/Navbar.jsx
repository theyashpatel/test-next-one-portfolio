import Link from "next/link";
import React, { useEffect, useState } from "react";

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
  const [pageScroll, setPageScroll] = useState(false);

  useEffect(() => {
    const sub = window.addEventListener("scroll", () =>
      setPageScroll(window.scrollY >= 90)
    );

    return sub;
  }, []);

  const links = [
    {
      id: 1,
      link: "home",
    },
    {
      id: 2,
      link: "portfolio",
    },
    {
      id: 3,
      link: "experience",
    },
    {
      id: 4,
      link: "me",
    },
    {
      id: 5,
      link: "contact",
    },
  ];

  return (
    <div
      className={`w-full h-20 z-[100] fixed bg-white text-black duration-300 ease-in ${
        pageScroll && "bg-black text-[#fff]"
      }`}
    >
      <div className="flex justify-between items-center w-full h-full max-w-screen-xl mx-auto p-4">
        <Link href="/#home">
          <h2 className="text-3xl lg:text-4xl font-bold uppercase underline underline-offset-2 tracking-wider cursor-pointer">
            yash
          </h2>
        </Link>

        <div>
          <ul className="hidden md:flex">
            {links.map(({ id, link }) => (
              <Link key={id} href={`/#${link}`}>
                <li className="ml-10 text-sm uppercase cursor-pointer duration-200 ease-out hover:scale-105 tracking-wider">
                  {link}
                </li>
              </Link>
            ))}
          </ul>

          {/* mobile menu */}

          {!nav && (
            <div className="md:hidden" onClick={() => setNav(true)}>
              <FaBars size={30} />
            </div>
          )}
        </div>
      </div>

      <div
        className={
          nav
            ? "md:hidden fixed left-0 top-0 w-full h-full bg-black/70 backdrop-blur"
            : ""
        }
      />
      <div
        className={
          nav
            ? "fixed left-0 top-0 w-4/5 h-full bg-gradient-to-r from-blue-600 to-cyan-600 text-white p-10 ease-in duration-500"
            : "fixed top-0 left-[-100%] p-10 h-full ease-in duration-500"
        }
      >
        <div>
          <div className="flex w-full items-center justify-between">
            <Link href="/#home">
              <h2
                onClick={() => setNav(false)}
                className="text-3xl lg:text-4xl font-bold uppercase underline underline-offset-2 tracking-wider cursor-pointer"
              >
                Yash
              </h2>
            </Link>
            <div className=" p-3 cursor-pointer" onClick={() => setNav(false)}>
              <FaTimes size={30} />
            </div>
          </div>
        </div>

        <div className="mt-24 flex flex-col h-fit gap-20">
          <ul className="uppercase">
            {links.map(({ id, link }) => (
              <Link key={id} href={`/#${link}`}>
                <li
                  onClick={() => setNav(false)}
                  className="py-4 text-2xl tracking-wider cursor-pointer"
                >
                  {link}
                </li>
              </Link>
            ))}
          </ul>

          <div className="">
            <div className="grid grid-cols-2 mx-auto w-4/5 gap-10">
              <div className="flex items-center justify-center  rounded-full shadow-md shadow-white p-3 cursor-pointer">
                <FaLinkedinIn size={25} />
              </div>
              <div className="flex items-center justify-center  rounded-full shadow-md shadow-white p-3 cursor-pointer">
                <FaGithub size={25} />
              </div>
              <div className="flex items-center justify-center  rounded-full shadow-md shadow-white p-3 cursor-pointer">
                <FaTwitter size={25} />
              </div>
              <div className="flex items-center justify-center  rounded-full shadow-md shadow-white p-3 cursor-pointer">
                <FaFacebook size={25} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
