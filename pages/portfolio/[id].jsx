import { useRouter } from "next/router";
import React from "react";
import installNode from "../../public/assets/portfolio/installNode.jpg";
import reactParallax from "../../public/assets/portfolio/reactParallax.jpg";
import usestate from "../../public/assets/portfolio/usestate.jpg";
import reactWeather from "../../public/assets/portfolio/reactWeather.jpg";
import reactPortfolio2 from "../../public/assets/portfolio/reactPortfolio2.jpg";
import Image from "next/image";
import { AiOutlineCaretRight } from "react-icons/ai";
import { BiChevronLeft } from "react-icons/bi";
import Link from "next/link";
import { FaGithub } from "react-icons/fa";

const portfolios = [
  {
    id: 1,
    title: "react weather app",
    imageSrc: reactWeather,
    url: "react-weather",
  },
  {
    id: 2,
    title: "install node",
    imageSrc: installNode,
    url: "install-node",
  },
  {
    id: 3,
    title: "use state explained",
    imageSrc: usestate,
    url: "use-state-hook",
  },
  {
    id: 4,
    title: "react parallax scroll",
    imageSrc: reactParallax,
    url: "react-parallax",
  },
];

export async function getStaticPaths() {
  const paths = portfolios.map((portfolio) => ({
    params: { id: portfolio.url },
  }));

  return {
    paths,
    fallback: false,
  };
}

const getPortfolioFrom = (url) =>
  portfolios.filter((portfolio) => portfolio.url === url)[0];

export async function getStaticProps({ params }) {
  const portfolio = getPortfolioFrom(params.id);

  return { props: { portfolio } };
}

const OnePortfolio = ({ portfolio: { title, imageSrc } }) => {
  return (
    <div id="home" className=" h-fit w-full text-center">
      <div className="max-w-screen-xl mx-auto w-full h-full pt-24 p-8 flex flex-col">
        <div className="flex">
          <Link href="/portfolio">
            <div className="group flex items-center justify-center my-8 text-indigo-500 font-bold capitalize rounded-md tracking-wider cursor-pointer">
              <span className="">
                <BiChevronLeft size={25} />
              </span>
              back
            </div>
          </Link>
        </div>

        <h1 className="capitalize text-4xl mt-2 mb-8 text-left font-bold text-blue-500 tracking-wider">
          {title}
        </h1>
        <div className="relative w-96 h-56 mx-auto overflow-hidden my-8">
          <Image src={imageSrc} alt={title} layout="fill" objectFit="cover" />
        </div>
        <h2 className="text-left my-4 text-2xl font-bold">Description</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Possimus
          beatae ad veritatis voluptas placeat sit debitis sapiente
          necessitatibus, excepturi animi quis libero et, sunt vero. Tempore
          esse neque quidem magni doloremque itaque accusantium, officia cumque
          enim porro, cum fugiat quam? Magnam a iusto dolores. Est ea sit
          voluptatibus praesentium quod maiores sunt, dolorum consequuntur
          aliquid nesciunt nemo architecto eaque libero amet expedita esse
          deleniti laborum beatae ipsa quisquam dolorem voluptate? Cupiditate
          quis ipsam quaerat delectus sit voluptas corporis id nisi autem,
          corrupti provident magnam! Facilis possimus provident quaerat velit
          sunt. Inventore enim quaerat eos nobis veniam ab dolor, accusamus
          impedit.
        </p>

        <div className="flex items-center justify-center gap-10">
          <Link href="/">
            <div className="group flex items-center justify-center my-8 bg-blue-500 text-white px-6 py-3 font-bold uppercase rounded-md tracking-wider cursor-pointer">
              demo
              <span className="duration-100 ease-in">
                <AiOutlineCaretRight size={20} className="ml-2" />
              </span>
            </div>
          </Link>
          <Link href="https://github.com/theyashpatel">
            <div className="group flex items-center justify-center my-8 bg-blue-500 text-white px-6 py-3 font-bold uppercase rounded-md tracking-wider cursor-pointer">
              github
              <span className="duration-100 ease-in">
                <FaGithub size={20} className="ml-2" />
              </span>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default OnePortfolio;
