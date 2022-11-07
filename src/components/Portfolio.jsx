import React from "react";
import MP40 from "../assets/rkgldypd.webp";
import ColtNavy from "../assets/9yvicj65.webp";
import M9A1 from "../assets/xqc31gps.webp";
import M2 from "../assets/M2_portfolio.webp";
import HiPower from "../assets/HiPower_portfolio.webp";
import StG44 from "../assets/stg44.webp";

const Portfolio = () => {
  return (
    <div className="text-white my-6 max-w-screen">
      <h1 className="font-bold text-3xl text-left max-w-[1240px] mx-auto pl-4 pb-4 uppercase">
        ArtStation
      </h1>
      <div className="max-w-[1240px] mx-auto grid md:grid-cols-2 xl:grid-cols-3 gap-4 justify-center">
        
        <a href="https://www.artstation.com/artwork/mqw0la">
          <div
            style={{ backgroundImage: `url(${MP40})` }}
            className="group rounded-3xl drop-shadow-lg portfolio-div md:h-[225px] md:w-[400px] hover:scale-105 duration-300 container"
          >
            <div className="opacity-0 flex justify-center portfolio-div md:h-[225px] md:w-[400px] hover-div hover:opacity-100 rounded-3xl ease-in-out duration-500">
              <h1 className="fixed mb-3 bottom-0 font-bold text-2xl">MP40</h1>
            </div>
          </div>
        </a>

        <a href="https://www.artstation.com/artwork/P9yg8">
          <div
            style={{ backgroundImage: `url(${ColtNavy})` }}
            className="rounded-3xl drop-shadow-lg portfolio-div md:h-[225px] md:w-[400px] hover:scale-105 duration-300 container"
          >
            <div className="opacity-0 flex justify-center portfolio-div md:h-[225px] md:w-[400px] hover-div hover:opacity-100 rounded-3xl ease-in-out duration-500">
              <h1 className="fixed mb-3 bottom-0 font-bold text-2xl">
                Colt Navy
              </h1>
            </div>
          </div>
        </a>

        <a href="https://www.artstation.com/artwork/0bVDw">
          <div
            style={{ backgroundImage: `url(${M9A1})` }}
            className="rounded-3xl drop-shadow-lg portfolio-div md:h-[225px] md:w-[400px] hover:scale-105 duration-300 container"
          >
            <div className="opacity-0 flex justify-center portfolio-div md:h-[225px] md:w-[400px] hover-div hover:opacity-100 rounded-3xl ease-in-out duration-500">
              <h1 className="fixed mb-3 bottom-0 font-bold text-2xl">M9A1</h1>
            </div>
          </div>
        </a>

        <a href="#/Portfolio">
          <div
            style={{ backgroundImage: `url(${StG44})` }}
            className="rounded-3xl drop-shadow-lg portfolio-div md:h-[225px] md:w-[400px] hover:scale-105 duration-300 container"
          >
            <div className="opacity-0 flex justify-center portfolio-div md:h-[225px] md:w-[400px] hover-div hover:opacity-100 rounded-3xl ease-in-out duration-500">
              <h1 className="fixed mb-3 bottom-0 font-bold text-2xl">StG 44</h1>
            </div>
          </div>
        </a>

      </div>


      <h1 className="font-bold text-3xl text-left max-w-[1240px] mx-auto pl-4 pb-4 mt-6 uppercase">
        Squad CAF dlc
      </h1>

      <div className="max-w-[1240px] mx-auto grid md:grid-cols-2 xl:grid-cols-3 gap-4 justify-center">
        <a href="#/Projects/CAF">
          <div
            style={{ backgroundImage: `url(${M2})` }}
            className="rounded-3xl drop-shadow-lg portfolio-div md:h-[225px] md:w-[400px] hover:scale-105 duration-300 container"
          >
            <div className="opacity-0 flex justify-center portfolio-div md:h-[225px] md:w-[400px] hover-div hover:opacity-100 rounded-3xl ease-in-out duration-500">
              <h1 className="fixed mb-3 bottom-0 font-bold text-2xl">M2 Carl Gustav</h1>
            </div>
          </div>
        </a>

        <a href="#/Projects/CAF">
          <div
            style={{ backgroundImage: `url(${HiPower})` }}
            className="rounded-3xl drop-shadow-lg portfolio-div md:h-[225px] md:w-[400px] hover:scale-105 duration-300 container"
          >
            <div className="opacity-0 flex justify-center portfolio-div md:h-[225px] md:w-[400px] hover-div hover:opacity-100 rounded-3xl ease-in-out duration-500">
              <h1 className="fixed mb-3 bottom-0 font-bold text-2xl">Browning HiPower</h1>
            </div>
          </div>
        </a>
      </div>
    </div>
  );
};

export default Portfolio;
