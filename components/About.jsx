import React from "react";
import { MdExpandMore } from "react-icons/md";
import Link from "next/link";

const About = () => {
  return (
    <div id="me" className="w-full">
      <div className="max-w-screen-xl mx-auto px-8 py-16">
        <p className="text-5xl md:text-7xl tracking-wider uppercase text-blue-500 font-bold text-center md:text-left">
          Me
        </p>
        <div className="shadow-xl shadow-blue-300 my-8 px-8">
          <p className="py-4 max-w-2xl mx-auto">
            Is bleak tapping from maiden thy bird, the me ever door wind leave.
            Is plume as followed lattice air, of i horror nodded bird opened
            laden his desert above, black and turning off than oer still in
            then, but that and morrow into at this, as angels wide a we.
          </p>
          <p className="py-4 max-w-2xl mx-auto">
            Straight bends all i a shutter. Though is prophet being much of
            whether forget the. Tapping only heart nothing this and chamber
            sitting word if. Obeisance by before the i bore more only i
            shrieked. Visiter i implore came for. Of then soul raven thy visiter
            scarce bust, i truly whose door unhappy the a. Help smiling the
            plutonian thrilled my of wandering name surely, dirges the in the
            burning there nothing that bore. The.
          </p>
          <p className="py-4 max-w-2xl mx-auto">
            Is bleak tapping from maiden thy bird, the me ever door wind leave.
            Is plume as followed lattice air, of i horror nodded bird opened
            laden his desert above, black and turning off than oer still in
            then, but that and morrow into at this, as angels wide a we.
          </p>
        </div>
        <div className="flex items-center justify-center gap-10">
          <Link href="/resume.pdf" download={true}>
            <div className="group flex items-center justify-center my-8 bg-blue-500 text-white px-6 py-3 font-bold uppercase rounded-md tracking-wider cursor-pointer">
              resume
              <span className="-rotate-90 duration-100 ease-in group-hover:rotate-0">
                <MdExpandMore size={25} />
              </span>
            </div>
          </Link>
          <Link href="/#portfolio">
            <div className="group flex items-center justify-center my-8 bg-blue-500 text-white px-6 py-3 font-bold uppercase rounded-md tracking-wider cursor-pointer">
              my portfolio
              <span className="-rotate-90 duration-100 ease-in group-hover:-rotate-180">
                <MdExpandMore size={25} />
              </span>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default About;
