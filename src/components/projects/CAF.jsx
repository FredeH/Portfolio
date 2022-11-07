import React from "react";
import CAF_DLC from "../../assets/CAF_dlc.webp";
import M2 from "../../assets/M2_Gustav.webp";
import M2_2 from "../../assets/M2_Gustav_2.webp";
import HiPower from "../../assets/HiPower.webp";
import HE from "../../assets/84mm_HE.webp";
import Tandem from "../../assets/84mm_Tandem.webp";
import Heat from "../../assets/84mm_HEAT.webp";

const CAF = () => {
  return (
    <div className="my-6">
      <div className="">
        <div className="h-auto max-w-6xl mx-auto">
          <div className="text-white text-center">
            <h1 className="font-bold text-3xl">Canadian Armed Forces Squad DLC</h1>
            <h2 className="p-2 text-2xl">These are the weapons I modeled, textured and implemented in Squad's SDK</h2>
            <div className="bg-[#1f1f23] mx-auto group rounded-3xl mt-4 container relative">
              <div
                className="md:h-[300px] lg:h-[400px] project-div m-4"
                style={{ backgroundImage: `url(${M2})` }}
              ></div>
              <div
                className="md:h-[300px] lg:h-[400px] project-div m-4"
                style={{ backgroundImage: `url(${M2_2})` }}
              ></div>
              <div className="opacity-100 flex justify-center">
                <h1 className="mb-3 bottom-0 font-bold text-2xl">
                  M2 Carl Gustav
                </h1>
              </div>
            </div>

            <div className="bg-[#1f1f23] mx-auto group rounded-3xl m-6 container relative border border-transparent">
              <div className="grid grid-cols-3 grid-rows-1">
              <div
                className="md:h-[400px] lg:h-[500px] project-div m-4"
                style={{ backgroundImage: `url(${HE})` }}
              ></div>
                            <div
                className="md:h-[400px] lg:h-[500px] project-div m-4"
                style={{ backgroundImage: `url(${Heat})` }}
              ></div>
                            <div
                className="md:h-[400px] lg:h-[500px] project-div m-4"
                style={{ backgroundImage: `url(${Tandem})` }}
              ></div>
              </div>

              <div className="opacity-100 flex justify-center">
                <h1 className="mb-3 bottom-0 font-bold text-2xl">
                  84mm HE 441D, HEAT 551, and HEAT 751
                </h1>
              </div>
            </div>

            <div className="bg-[#1f1f23] mx-auto group rounded-3xl m-6 container relative border border-transparent">
              <div
                className="md:h-[400px] lg:h-[500px] project-div m-4"
                style={{ backgroundImage: `url(${HiPower})` }}
              ></div>
              <div className="opacity-100 flex justify-center">
                <h1 className="mb-3 bottom-0 font-bold text-2xl">
                  Browning Hi-Power
                </h1>
              </div>
            </div>
          </div>
        </div>

        <div className="flex justify-center pt-3">
          <a href="https://store.steampowered.com/app/1123920/Canadian_Armed_Forces/">
            <div
              style={{ backgroundImage: `url(${CAF_DLC})` }}
              className="drop-shadow-xl dlc-div w-[350px] h-[150px] md:w-[460px] md:h-[215px] hover:scale-105 duration-300 container"
            ></div>
          </a>
        </div>
      </div>
    </div>
  );
};

export default CAF;
