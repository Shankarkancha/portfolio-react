import React from "react";

const About = () => {
  return (
    <div
      name="about"
      className="w-full h-full bg-gradient-to-b from-gray-800 to-black text-white pt-20"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            About
          </p>
        </div>

        <p className="text-xl mt-10">
        Hello! I am a passionate and dedicated web developer who is eager to kickstart my career in the industry.I have gained hands-on experience with HTML, CSS, and JavaScript, allowing me to create well-structured and visually appealing web pages. I have also worked with popular front-end frameworks like React, and have a basic understanding of back-end technologies such as Node.js and databases like MongoDB and Mysql.

        </p>

        <br />

        <p className="text-xl">
          Collaboration is something I value deeply. I enjoy working as part of a team, learning from experienced professionals, and contributing to the collective success of a project. I am open to feedback and always strive to improve my skills and deliver high-quality work.<br/>
          <br/>
          I am a dedicated and ambitious individual with a genuine passion for web development. I am eager to leverage my technical skills, creativity, and enthusiasm to contribute to a dynamic and innovative team. I am ready to take on new challenges, expand my horizons, and make a meaningful impact in the world of web development.
        </p>
      </div>
    </div>
  );
};

export default About;
