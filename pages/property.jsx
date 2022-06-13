import Image from "next/image";
import React from "react";
import reactWeather from "../public/assets/portfolio/reactWeather.jpg";
import { RiRadioButtonFill } from "react-icons/ri";
import Link from "next/link";

const property = () => {
  return (
    <div className="w-full">
      <div className="w-screen h-[30vh] lg:h-[40vh] relative">
        <div className="absolute top-0 left-0 w-full h-[30vh] lg:h-[40vh] bg-black/80 z-10" />

        <Image
          src={reactWeather}
          alt="lkjlj"
          className="absolute z-1"
          objectFit="cover"
          layout="fill"
        />

        <div className="absolute top-[70%] max-w-screen-xl w-full left-[50%] translate-x-[-50%] translate-y-[-50%] text-white z-10">
          <h2 className="py-2">Property Finder</h2>
          <h3>React JS / Tailwind / Firebase</h3>
        </div>
      </div>

      <div className="max-w-screen-xl mx-auto p-2 grid md:grid-cols-5 gap-8 pt-8">
        <div className="col-span-4">
          <p>Project</p>
          <h2>Overview</h2>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iure
            porro, maxime cumque beatae sequi culpa asperiores sapiente. Est
            explicabo magnam facere sunt, nemo eum pariatur voluptate tempore
            consectetur magni perferendis. Culpa laudantium odit quod est
            architecto aperiam deserunt aliquid consectetur nesciunt deleniti
            minima voluptates vero, reiciendis cupiditate ducimus, tenetur
            blanditiis quidem eligendi sapiente molestiae magni? Natus atque
            incidunt accusamus necessitatibus esse quidem aut, expedita corporis
            unde? Corporis eum voluptatum magnam? Nobis eum accusantium ipsa
            voluptate quod iure et laudantium quia mollitia voluptatibus dicta
            cupiditate animi neque quae atque eligendi, explicabo consectetur
            sint? Commodi sapiente molestiae id beatae, quis vel laboriosam.
          </p>

          <button className="px-8 py-2 mt-4 mr-8">Demo</button>
          <button className="px-8 py-2 mt-4 ">Code</button>
        </div>

        <div className="col-span-4 md:col-span-1 shadow-xl shadow-gray-400 rounded-xl p-4">
          <div className="p-2">
            <p className="text-center font-bold pb-2">Technologies</p>
            <div className="grid grid-cols-3 md:grid-cols-1 ">
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" /> React
              </p>
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" /> Tailwind
              </p>
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" /> Firebase
              </p>
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" /> JavaScript
              </p>
            </div>
          </div>
        </div>

        <Link href="/#projects">
          <p className="underline cursor-pointer">Back</p>
        </Link>
      </div>
    </div>
  );
};

export default property;
