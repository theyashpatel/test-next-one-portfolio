import Image from "next/image";
import Link from "next/link";
import React from "react";
import ProjectItem from "./ProjectItem";
import arrayDestruct from "../public/assets/portfolio/arrayDestruct.jpg";
import installNode from "../public/assets/portfolio/installNode.jpg";
import reactParallax from "../public/assets/portfolio/reactParallax.jpg";
import reactSmooth from "../public/assets/portfolio/reactSmooth.jpg";
import usestate from "../public/assets/portfolio/usestate.jpg";
import navbar from "../public/assets/portfolio/navbar.jpg";
import reactWeather from "../public/assets/portfolio/reactWeather.jpg";

const Projects = () => {
  return (
    <div id="projects" className="w-full">
      <div className="max-w-screen-xl mx-auto px-2 py-16">
        <p className="text-xl tracking-widest uppercase text-[#5651e5]">
          Projects
        </p>
        <h2 className="py-4">What I've Built</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <ProjectItem
            title="Array Destruct"
            image={arrayDestruct}
            projectUrl="/property"
          />
          <ProjectItem title="Install Node" image={installNode} />
          <ProjectItem title="React Parallax" image={reactParallax} />
          <ProjectItem title="React Smooth Scroll" image={reactSmooth} />
          <ProjectItem title="React Weather App" image={reactWeather} />
          <ProjectItem title="usestate hook explained" image={usestate} />
        </div>
      </div>
    </div>
  );
};

export default Projects;
