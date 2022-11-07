import React from "react";
import { BsLinkedin } from "react-icons/bs";
import M2 from "../assets/M2_portfolio.webp";
import ProfilePic from "../assets/profile_pic.webp";
import { SiArtstation, SiUnrealengine } from "react-icons/si";
import Blender from "../assets/icons/Blender.svg";
import Photoshop from "../assets/icons/ps_appicon.svg";
import Illustrator from "../assets/icons/illustrator.svg";
import SubstancePainter from "../assets/icons/pt_appicon_256.svg";
import Unity from "../assets/icons/Unity_512x512.jpg";
import Rizom from "../assets/icons/rizom_uv.png";
import Sw from "../assets/icons/SOLIDWORKS-white.svg";
import Fusion360 from "../assets/icons/Fusion360.png";
import Max from "../assets/icons/3dsMax.png";







const CV = () => {
  return (
    <div className="">
      {/* Hero */}

      <div className="mx-auto max-w-full h-[600px] bg-[#1f1f23] text-white container relative">
        <div
          style={{ backgroundImage: `url(${M2})` }}
          className="resume-hero h-[600px] opacity-20"
        ></div>

        <div className="text-center absolute bottom-[150px] right-0 left-0">
          <div className="flex justify-center">
            <img
              className="m-4 w-[150px] md:w-[200px] rounded-full"
              src={ProfilePic}
              alt="/"
            />
          </div>

          <h1 className="font-bold text-4xl">Frederik Hansen</h1>
          <h2 className="text-2xl p-2">Software Developer & 3D Generalist</h2>

          <div className="text-white flex justify-center pt-4 gap-3">
            <a
              className="hover:text-[#bbbbbb] duration-300 ease-in-out"
              href="https://www.linkedin.com/in/frederik-hansen96"
            >
              <BsLinkedin size={30} />
            </a>
            <a
              className="hover:text-[#bbbbbb] duration-300 ease-in-out"
              href="https://www.artstation.com/frederikh"
            >
              <SiArtstation size={30} />
            </a>
          </div>
        </div>
      </div>

      {/* About section */}

      <div className="mt-7 mb-10 justify-center max-w-4xl mx-auto">
        <h1 className="uppercase text-center font-bold text-4xl text-white m-3">
          About me
        </h1>
        <div className="mx-4">
          <h2 className="text-left text-white text-xl">
            I have a bachelor's degree in Product Development and Integrative
            Technology, where I've developed both physical and software
            products.
          </h2>
          <h2 className="text-white text-xl pt-2 text-left">
            I've also been working in Unity and Unreal Engine 4 to create VR,
            AR, and mobile solutions, where I've done everything from concepts,
            UI/UX, 3D modeling, and programming.
          </h2>
        </div>
      </div>

      {/* Software */}

      <div className="mt-7 mb-10 mx-auto text-white">
        <h1 className="uppercase text-center font-bold text-4xl text-white">
          Skills
        </h1>

        <div className="flex flex-wrap justify-center mx-auto w-[70%] text-xl mt-4 gap-3 container relative">
          <span className="inline-block whitespace-nowrap rounded-lg pt-2 border p-3">
            CAD/CAM
          </span>
          <span className="inline-block whitespace-nowrap rounded-lg pt-2 border p-3">
            3D Modeling
          </span>
          <span className="inline-block whitespace-nowrap rounded-lg pt-2 border p-3">
            Game Art
          </span>
          <span className="inline-block whitespace-nowrap rounded-lg pt-2 border p-3">
            PBR Texturing
          </span>
          <span className="inline-block whitespace-nowrap rounded-lg pt-2 border p-3">
            UI/UX
          </span>
          <span className="inline-block whitespace-nowrap rounded-lg pt-2 border p-3">
            Optimizing for mobile devices
          </span>
        </div>
      </div>

      <div className="mt-7 mb-10 mx-auto text-white">
        <h1 className="uppercase text-center font-bold text-4xl text-white"></h1>

        <div className="flex flex-wrap justify-center mx-auto w-[70%] text-xl mt-4 gap-3 container relative">
          <span className="inline-block whitespace-nowrap rounded-lg pt-2 border p-3">
            C#
          </span>
          <span className="inline-block whitespace-nowrap rounded-lg pt-2 border p-3">
            Unreal Engine Blueprinting
          </span>
          <span className="inline-block whitespace-nowrap rounded-lg pt-2 border p-3">
            Arduino
          </span>
        </div>
      </div>

      {/* Software */}

      <div className="mt-7 mb-10 mx-auto text-white">
        <h1 className="uppercase text-center font-bold text-4xl text-white">
          Software
        </h1>
        <div className="flex justify-center mt-4">
          <div className="grid grid-cols-2 sm:grid-cols-5 max-w-3xl">

            <div className="h-[128px] w-[128px] drop-shadow-lg rounded-lg flex justify-center items-center">
              <div
                style={{ backgroundImage: `url(${Max})` }}
                className="software-icon"
              ></div>
              <h1 className="absolute bottom-0">3ds Max</h1>
            </div>

            <div className="h-[128px] w-[128px] drop-shadow-lg rounded-lg flex justify-center items-center">
            <div
                style={{ backgroundImage: `url(${Blender})` }}
                className="software-icon"
              ></div>
              <h1 className="absolute bottom-0">Blender</h1>
            </div>

            <div className="h-[128px] w-[128px] drop-shadow-lg rounded-lg flex justify-center items-center">
            <div
                style={{ backgroundImage: `url(${SubstancePainter})` }}
                className="software-icon"
              ></div>
              <h1 className="absolute bottom-0">Substance Painter</h1>
            </div>

            <div className="h-[128px] w-[128px] drop-shadow-lg rounded-lg flex justify-center items-center">
            <div
                style={{ backgroundImage: `url(${Rizom})` }}
                className="software-icon"
              ></div>
              <h1 className="absolute bottom-0">RizomUV</h1>
            </div>

            <div className="h-[128px] w-[128px] drop-shadow-lg rounded-lg flex justify-center items-center">
                          <div
                style={{ backgroundImage: `url(${Photoshop})` }}
                className="software-icon"
              ></div>
              <h1 className="absolute bottom-0">Photoshop</h1>
            </div>

            <div className="h-[128px] w-[128px] drop-shadow-lg rounded-lg flex justify-center items-center">
                          <div
                style={{ backgroundImage: `url(${Illustrator})` }}
                className="software-icon"
              ></div>
              <h1 className="absolute bottom-0">Illustrator</h1>
            </div>

            <div className="h-[128px] w-[128px] drop-shadow-lg rounded-lg flex justify-center items-center">
                          <div
                style={{ backgroundImage: `url(${Fusion360})` }}
                className="software-icon"
              ></div>
              <h1 className="absolute bottom-0">Fusion360</h1>
            </div>

            <div className="h-[128px] w-[128px] drop-shadow-lg rounded-lg flex justify-center items-center">
                          <div
                style={{ backgroundImage: `url(${Sw})` }}
                className="software-icon"
              ></div>
              <h1 className="absolute bottom-0">SolidWorks</h1>
            </div>

            <div className="h-[128px] w-[128px] drop-shadow-lg rounded-lg flex justify-center items-center">
                          <div
              >
               <SiUnrealengine className="software-icon" />
              </div>
              <h1 className="absolute bottom-0">Unreal Engine</h1>
            </div>

            <div className="h-[128px] w-[128px] drop-shadow-lg rounded-lg flex justify-center items-center">
                          <div
                style={{ backgroundImage: `url(${Unity})` }}
                className="software-icon rounded-xl"
              ></div>
              <h1 className="absolute bottom-0">Unity</h1>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default CV;
