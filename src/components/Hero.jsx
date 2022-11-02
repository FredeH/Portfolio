import React from "react";
import STG44 from '../assets/stg44.png'

const Hero = () => {
    return (
        <div className="text-white relative">
            <div className="w-full h-[580px] absolute">
            <img className="w-full h-full object-cover opacity-30" src={STG44} alt="/" />
            </div>
            <div className="max-w-[800px] w-full h-[580px] mx-auto text-center flex justify-center">
                <div className="z-10 flex-col justify-center pt-60">
                    <p className="font-bold p-2 sm:text-6xl">Frederik Hansen</p>
                    <h1 className="sm:text-3xl">Software developer and 3D Generalist</h1>
                </div>
            </div>
                            

        </div>
    )
}

export default Hero;