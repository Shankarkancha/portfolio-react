import React from "react";
import "../index.css"
import aisummarizer from "../assets/portfolio/Black Modern Artificial Intelligence Expo Instagram Post.png"
import weatherreport from "../assets/portfolio/weatherreport.png"
import bankingsystem from "../assets/portfolio/bankingsystem.jpg"
import voiceassistant from "../assets/portfolio/pythonvoiceassistant.png"
import nodeweatherreport from "../assets/portfolio/nodeweatherreport.jpg"

const Portfolio = () => {
  const portfolios = [
    {
      id: 1,
      src: aisummarizer,
      demolink:`https://summarizerapplication.netlify.app/`,
      codelink:`https://github.com/Shankarkancha/AI_SUMMARIZER`
    },
    {
      id: 2,
      src: weatherreport,
      demolink:`https://weatherreportproject.onrender.com/`,
      codelink:`https://github.com/Shankarkancha/webproject`
    },
    {
      id: 3,
      src: bankingsystem,
      demolink:`https://basic-banking-system-jsd8.onrender.com/`,
      codelink:`https://github.com/Shankarkancha/Basic-Banking-system`
    },
    {
      id: 4,
      src: nodeweatherreport,
      demolink:`https://node-weather-app-rjpv.onrender.com/`,
      codelink:`https://github.com/Shankarkancha/node-weather-app`
    },
    {
      id: 5,
      src: voiceassistant,
      demolink:`https://github.com/Shankarkancha/DESKTOP-VOICE-ASSISTANT`,
      codelink:`https://github.com/Shankarkancha/DESKTOP-VOICE-ASSISTANT`
    }
  ];

  return (
    <div
      name="portfolio"
      className="bg-gradient-to-b from-black to-gray-800 w-full text-white md:h-full py-20"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            Portfolio
          </p>
          <p className="py-6">Check out some of my work right here</p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0">
          {portfolios.map(({ id, src,demolink,codelink }) => (
            <div key={id} className="shadow-md shadow-gray-600 rounded-lg">
              <img
                src={src}
                alt=""
                className="rounded-md duration-200 hover:scale-105 portfolioimage object-fill"
              />
              <div className="flex items-center justify-center">
                <button onClick={() => window.open(demolink)}  className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105">
                  Demo
                </button>
                <button onClick={() => window.open(codelink)} className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105">
                  Code
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
