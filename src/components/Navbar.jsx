import React from "react";
import { MdOutlineChevronRight, MdOutlineMenu } from 'react-icons/md'

const Navbar = () => {
    return (
        <div className="flex h-[80]">
            <nav className="fixed navbar z-50 w-full text-white h-[80px] flex justify-between backdrop-blur-[5px] border-b border-white/[.25] bg-[#171717]/[.15] drop-shadow-lg">
                <h1 className="w-full text-3xl font-bold text-[#d7dbe0] py-5 pl-5">Frederik Hansen</h1>
                <ul className="uppercase flex my-2 mx-2 rounded-md font-bold">
                    <a href="#/">
                        <li className="p-4">Home</li>
                    </a>
                    <a href="#/Portfolio">
                        <li className="p-4">Portfolio</li>
                    </a>
                    <a href="#/Projects">
                        <li className="p-4">Projects</li>
                    </a>
                    <a href="#/CV">
                        <li className="p-4">CV</li>
                    </a>
                    <a href="#/Contact">
                        <li className="p-4">Contact</li>
                    </a>
                </ul>
            </nav>
        </div>
    )
}

export default Navbar