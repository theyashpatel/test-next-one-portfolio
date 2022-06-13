import Link from "next/link";
import React from "react";
import { FaFacebook, FaGithub, FaLinkedinIn, FaTwitter } from "react-icons/fa";
import { HiOutlineChevronDoubleUp } from "react-icons/hi";

const Contact = () => {
  return (
    <div id="contact" className="w-full lg: h-screen">
      <div className="max-w-screen-xl m-auto px-2 py-16 w-full">
        <p className="text-xl tracking-widest uppercase text-[#5651e5]">
          Contact
        </p>
        <h2 className="py-4 capitalize">get in touch</h2>
        <div className="grid lg:grid-cols-5 gap-8">
          {/* left */}
          <div className="col-span-3 lg:col-span-2 w-full h-full shadow-xl shadow-gray-400 rounded-xl p-4">
            <div className="lg:p-4 h-full ">
              <div>
                <img
                  src="https://images.unsplash.com/photo-1516387938699-a93567ec168e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2671&q=80"
                  alt="/"
                  className="rounded-xl hover:scale-105 ease-in duration-300"
                />
              </div>

              <div>
                <h2 className="py-2">Name here</h2>
                <p className="capitalize">front end developer</p>
                <p className="py-4">
                  I am avvailable for freelance or full-time positions. Contact
                  me and let's talk.
                </p>
              </div>
              <div>
                <p className="uppercase">connect with me</p>
                <div className="flex items-center justify-between py-4">
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

          {/* right */}
          <div className="col-span-3 w-full h-auto shadow-xl shadow-gray-400 rounded-xl lg:p-4">
            <div className="p-4">
              <form>
                <div className="grid md:grid-cols-2 gap-4 w-full py-2">
                  <div className="flex flex-col">
                    <label className="uppercase text-sm py-2">name</label>
                    <input
                      type="text"
                      className="border-2 rounded-lg p-3 flex border-gray-300 "
                    />
                  </div>

                  <div className="flex flex-col">
                    <label className="uppercase text-sm py-2">
                      phone number
                    </label>
                    <input
                      type="text"
                      className="border-2 rounded-lg p-3 flex border-gray-300 "
                    />
                  </div>

                  <div className="flex flex-col col-span-2">
                    <label className="uppercase text-sm py-2">email</label>
                    <input
                      type="email"
                      className="border-2 rounded-lg p-3 flex border-gray-300 "
                    />
                  </div>

                  <div className="flex flex-col col-span-2">
                    <label className="uppercase text-sm py-2">message</label>
                    <textarea
                      className="border-2 rounded-lg p-3 border-gray-300"
                      rows="10"
                    ></textarea>
                  </div>
                </div>

                <button className="w-full p-4 text-gray-100 mt-4">
                  send message
                </button>
              </form>
            </div>
          </div>
        </div>

        <div className="flex justify-center py-12">
          <Link href="/">
            <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300 ">
              <HiOutlineChevronDoubleUp className="text-myblue" size={30} />
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Contact;
