import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaFacebook, FaGithub, FaLinkedinIn, FaTwitter } from "react-icons/fa";
import { HiOutlineChevronDoubleUp } from "react-icons/hi";
import contactusImage from "../public/assets/contact-us.jpg";

const Contact = () => {
  return (
    <div id="contact" className="w-full">
      <div className="max-w-screen-xl mx-auto px-8 py-16 text-center md:text-left">
        <p className="text-5xl md:text-7xl tracking-wider uppercase text-blue-500 font-bold">
          Contact
        </p>
        <h2 className="py-4 max-w-lg">
          Fearing lenore above songs hauntedtell yore of ghost undaunted spoken
          raven. My i ghastly dream hauntedtell seeing.
        </h2>
        <div className="flex flex-col md:flex-row gap-8 shadow-xl shadow-blue-300 bg-white">
          {/* left */}
          <div className="col-span-3 lg:col-span-2 w-full h-full rounded-xl p-4">
            <div className="h-full p-8">
              <div>
                <Image
                  src={contactusImage}
                  alt="man with laptop"
                  className="rounded-xl hover:scale-105 ease-in duration-300"
                />
              </div>

              <div>
                <p className="pt-2 pb-8">
                  I am open to talk regarding freelancing or full-time
                  opportunities. Fell free to contact me using your preferred
                  medium.
                </p>
              </div>
              <div>
                <div className="grid grid-cols-2 mx-auto w-4/5 gap-10">
                  <div className="flex items-center justify-center  rounded-full shadow-md shadow-blue-500 p-3 cursor-pointer hover:scale-105 duration-200">
                    <FaLinkedinIn size={25} />
                  </div>
                  <div className="flex items-center justify-center  rounded-full shadow-md shadow-blue-500 p-3 cursor-pointer hover:scale-105 duration-200">
                    <FaGithub size={25} />
                  </div>
                  <div className="flex items-center justify-center  rounded-full shadow-md shadow-blue-500 p-3 cursor-pointer hover:scale-105 duration-200">
                    <FaTwitter size={25} />
                  </div>
                  <div className="flex items-center justify-center  rounded-full shadow-md shadow-blue-500 p-3 cursor-pointer hover:scale-105 duration-200">
                    <FaFacebook size={25} />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* right */}
          <div className="col-span-3 w-full h-auto rounded-xl lg:p-4">
            <div className="p-4 text-left">
              <form
                action="https://getform.io/f/305bdcd9-527b-4954-8adf-66e78c7d1619"
                method="POST"
              >
                <div className="grid md:grid-cols-2 gap-4 w-full py-2">
                  <div className="flex flex-col">
                    <label className="capitalize text-sm py-2 text-slate-600 font-light">
                      name
                    </label>
                    <input
                      name="name"
                      type="text"
                      className="border-2 rounded-lg p-3 flex focus:outline-none border-blue-200 "
                    />
                  </div>

                  <div className="flex flex-col">
                    <label className="capitalize text-sm py-2 text-slate-600 font-light">
                      phone number
                    </label>
                    <input
                      name="phone"
                      type="text"
                      className="border-2 rounded-lg p-3 flex focus:outline-none border-blue-200 "
                    />
                  </div>

                  <div className="flex flex-col col-span-2">
                    <label className="capitalize text-sm py-2 text-slate-600 font-light">
                      email
                    </label>
                    <input
                      name="email"
                      type="email"
                      className="border-2 rounded-lg p-3 flex focus:outline-none border-blue-200 "
                    />
                  </div>

                  <div className="flex flex-col col-span-2">
                    <label className="capitalize text-sm py-2 text-slate-600 font-light">
                      message
                    </label>
                    <textarea
                      name="message"
                      className="border-2 rounded-lg p-3 border-blue-200 focus:outline-none"
                      rows="10"
                    ></textarea>
                  </div>
                </div>

                <div className="flex items-center justify-center">
                  <button className="group my-8 bg-blue-500 text-white px-6 py-3 font-bold uppercase rounded-md tracking-wider cursor-pointer">
                    send message
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
