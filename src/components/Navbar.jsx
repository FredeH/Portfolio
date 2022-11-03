import React from "react";
import { MdOutlineChevronRight, MdOutlineMenu } from "react-icons/md";
import { useState } from "react";

const Navbar = () => {
    const [nav, setNav] = useState(false)

    const handleNav = () => {
        setNav(!nav)
    }

  return (
    <div className="">
      <nav className="fixed navbar items-center z-50 w-full text-white h-[80px] flex justify-between backdrop-blur-[5px] border-b border-white/[.25] bg-[#171717]/[.15] drop-shadow-lg">
        <h1 className="w-full text-3xl font-bold text-[#d7dbe0] py-5 pl-5">
          Frederik Hansen
        </h1>
        <ul className="uppercase hidden md:flex my-2 mx-2 rounded-md font-bold">
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
        <div className="p-4 block md:hidden" onClick={handleNav}>
            {!nav ? <MdOutlineChevronRight size={25}/> : <MdOutlineMenu size={25}/>}
        </div>
      </nav>

      <div className={!nav ? 'fixed left-0 top-0 w-[35%] border-r z-20 backdrop-blur-[5px] border-white/[.25] bg-[#171717]/[.15] drop-shadow-lg h-full ease-in-out duration-300' : 'fixed left-[-100%]'}>
        <ul className="uppercase pt-24 my-2 mx-2 rounded-md font-bold text-white">
          <a href="#/">
            <li className="p-4" onClick={handleNav}>Home</li>
          </a>
          <a href="#/Portfolio" onClick={handleNav}>
            <li className="p-4">Portfolio</li>
          </a>
          <a href="#/Projects" onClick={handleNav}>
            <li className="p-4">Projects</li>
          </a>
          <a href="#/CV">
            <li className="p-4" onClick={handleNav}>CV</li>
          </a>
          <a href="#/Contact" onClick={handleNav}>
            <li className="p-4">Contact</li>
          </a>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
