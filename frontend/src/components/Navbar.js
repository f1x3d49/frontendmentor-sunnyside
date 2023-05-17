import React from "react";
import { ReactComponent as AgencyLogo } from "../images/logo.svg";

const Navbar = () => {
  return (
    <nav className="relative flex justify-between items-center z-10 py-3 px-8 ">
      <AgencyLogo />
      <ul className="flex">
        <li className="p-4 font-barlow font-semibold text-nwhite text-lg">
          About
        </li>
        <li className="p-4 font-barlow font-semibold text-nwhite text-lg">
          Services
        </li>
        <li className="p-4 font-barlow font-semibold text-nwhite text-lg">
          Projects
        </li>
        <li className="p-4 text-xl font-fraunces text-vddblue bg-nwhite rounded-full hover:cursor-pointer active:bg-gblue active:text-nwhite">
          Contact
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
