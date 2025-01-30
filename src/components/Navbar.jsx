import React from "react";
import { GiHamburgerMenu } from "react-icons/gi";

const Navbar = () => {
  return (
    <nav className="w-full h-14 bg-indigo-200 flex items-center justify-between px-4 md:px-4">
      <div className="text-2xl text-indigo-700 font-bold">PW Skills</div>
      <ul className="md:flex font-semibold hidden">
        <li className="mx-[10px] cursor-pointer">Home</li>
        <li className="mx-[10px] cursor-pointer">About Us</li>
        <li className="mx-[10px] cursor-pointer">Contact Us</li>
      </ul>
      <button className="hidden md:block bg-indigo-700 text-white rounded p-2 font-bold">
        Login/Signup
      </button>
      <div class="md:hidden">
        <a href="#">
          <GiHamburgerMenu />
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
