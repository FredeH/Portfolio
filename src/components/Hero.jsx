import React from "react";
import STG44 from "../assets/stg44.webp";
import ProfilePic from "../assets/profile_pic.webp";

const Hero = () => {
  return (
    <div className="text-white h-[700px]">
      <div className="w-full h-[700px] absolute">
        <img
          className="w-full h-full object-cover mix-blend-overlay"
          src={STG44}
          alt="/"
        />
      </div>

      <div className="flex justify-center">
        <img
          className="w-[150px] h-[150px] rounded-full absolute my-[175px]"
          src={ProfilePic}
          alt="/"
        />
      </div>
      <div className="max-w-[800px] w-full mx-auto text-center flex justify-center">
        <div className="z-10 flex-col justify-center pt-[22rem]">
          <p className="font-bold p-2 text-3xl md:text-6xl">Frederik Hansen</p>
          <h1 className="text-lg md:text-3xl">
            Software developer and 3D Generalist
          </h1>
        </div>
      </div>
    </div>
  );
};

export default Hero;
