import React, {useState} from "react";
import Burger from "../icons/Burger";
import CrossIcon from "../icons/CrossIcon";
import NavLinks from "./NavLinks";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div className="flex w-full flex-row  sticky top-0 bg-white sm:py-1 py-2 z-50">
      {/* Logo */}
      <div className="logo w-4/5 sm:w-1/2 flex items-center justify-around sm:justify-start">
        <img src="/assets/favicon.png" alt="logo" className="w-10 mx-2" />
        <Link to="/" className="text-blue-700 text-md sm:text-2xl font-semibold text-center sm:text-left flex mx-2 cursor-pointer">
          ADR- Due to Cancer Chemotherapy
        </Link>
      </div>

      {/* Desktop Links */}
      <div className="w-1/5 sm:w-1/2 flex justify-end ">
        <div className="hidden sm:flex items-center ">
          <NavLinks aboutClass="pr-5" />
        </div>

        {/* Mobile Burger Icon */}
        <div className="block sm:hidden mr-5">
          <button onClick={toggleMenu} className="transition-all ease-out duration-300">
            {isOpen?<CrossIcon/> :<Burger />}
          </button>
        </div>

		{/* Dropdown menu for mobile screens*/}
		<div className={`${isOpen?"max-h-screen":"max-h-0"} overflow-hidden transition-all duration-300 ease-in-out sm:hidden w-full bg-white absolute top-16 left-0 z-50`}>
        <NavLinks className="flex flex-col items-center p-1"/>         
		</div>
		
      </div>
    </div>
  );
};

export default Navbar;
