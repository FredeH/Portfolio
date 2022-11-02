import React from "react";
import Video from '../assets/Simulation_vanddunk.mp4'

const Hero = () => {
    return (
        <div className="text-white">
            <div className="max-w-[800px] w-full h-[580px] mx-auto text-center flex justify-center">
                <div className="z-10 flex-col justify-center pt-60">
                    <p className="font-bold p-2 sm:text-6xl">Frederik Hansen</p>
                    <h1 className="sm:text-3xl">Developer and designer</h1>
                    <h1 className="sm:text-xl py-4">This page will show you some of the things that I've made</h1>
                </div>
            </div>
        </div>
    )
}

export default Hero;