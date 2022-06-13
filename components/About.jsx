import React from "react";

const About = () => {
  return (
    <div id="about" className="w-full md:h-screen p-2 flex items-center py-1">
      <div className="max-w-screen-xl mx-auto md:grid grid-cols-3 gap-8">
        <div className="col-span-2">
          <p className="uppercase text-xl tracking-widest text-[#5651e5]">
            About
          </p>
          <h2 className="py-2 text-gray-600">Who I am</h2>
          <p className="py-2 text-gray-600">
            have spent the last 12 years in the fire service working as a
            professional firefighter & paramedic. have always had a knack for
            technology and working with computers. In 2019 started working with
            HTML & CSS to make some minor edits on a small business website that
            I was operating. What I thought was just a few small edits turned
            into a love for programming.
          </p>
          <p className="py-2 text-gray-600">
            Fascinated with how intricate programming can be I was quickly drawn
            to learn more. I started learning javascript and was even more
            enthused with making websites interactive. I then started
            freelancing for e-commerce companies on the Shopify platform. I am
            now spending my time building projects with React JS, Firebase, and
            learning new technologies.
          </p>

          <p className="py-2 text-gray-600 underline cursor-pointer">
            Check out some of my latest projects
          </p>
        </div>

        <div className="w-full h-auto shadow-xl shadow-gray-400 rounded-xl flex items-center justify-center hover:scale-105 ease-in duration-300">
          <img
            className="rounded-xl"
            src="https://images.unsplash.com/photo-1525547719571-a2d4ac8945e2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1364&q=80"
            alt="/"
          />
        </div>
      </div>
    </div>
  );
};

export default About;
