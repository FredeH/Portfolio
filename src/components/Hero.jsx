import React from "react";
import STG44 from "../assets/stg44.png";
import ProfilePic from "../assets/profile_pic2.png";

const Hero = () => {
  return (
    <div className="text-white relative">
      <div className="w-full h-[580px] absolute">
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
      <div className="max-w-[800px] w-full h-[580px] mx-auto text-center flex justify-center">
        <div className="z-10 flex-col justify-center pt-[22rem]">
          <p className="font-bold p-2 sm:text-6xl">Frederik Hansen</p>
          <h1 className="sm:text-3xl">Software developer and 3D Generalist</h1>
        </div>
      </div>
    </div>
  );
};

export default Hero;
