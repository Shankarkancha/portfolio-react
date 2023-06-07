import React from "react";
import "../index.css";
import HeroImage from "../assets/heroImage.png";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { Link } from "react-scroll";
const Home = () => {
  return (
    <div
      name="home"
      className="h-full w-full bg-gradient-to-b from-black via-black to-gray-800 pt-40"
    >
      <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row">
        <div className="flex flex-col justify-center h-full">
          <h2 className="text-4xl sm:text-7xl font-bold text-white">
            I'm an aspiring Full Stack Developer
          </h2>
          <p className="text-gray-500 py-4 max-w-md">
          Passionate fresher with a strong interest in full-stack web development. Skilled in front-end technologies like HTML, CSS, JavaScript, and back-end technologies like Node.js and databases. Eager to contribute to impactful projects and learn from experienced professionals. Seeking opportunities to kick-start my career in web development and grow as a full-stack developer.
          </p>

          <div>
            <Link
              to="portfolio"
              smooth
              duration={500}
              className="group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer"
            >
              Portfolio
              <span className="group-hover:rotate-90 duration-300">
                <MdOutlineKeyboardArrowRight size={25} className="ml-1" />
              </span>
            </Link>
          </div>
        </div>

        <div>
          <img
            src={HeroImage}
            alt="my profile"
            className="rounded-2xl pb-10 mx-auto w-2/3 md:w-full object-fill"
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
