import React from "react";
import { Menu } from "@headlessui/react";
import { ReactComponent as AgencyLogo } from "../images/logo.svg";
import { ReactComponent as Hamburger } from "../images/icon-hamburger.svg";

const Navbar = () => {
  return (
    <nav className="relative flex justify-between items-center z-10 py-3 px-8 ">
      <AgencyLogo className="fill-nwhite" />
      <ul className="hidden md:flex select-none">
        <li className="p-4 font-barlow font-semibold text-nwhite text-lg hover:cursor-pointer">
          About
        </li>
        <li className="p-4 font-barlow font-semibold text-nwhite text-lg hover:cursor-pointer">
          Services
        </li>
        <li className="p-4 font-barlow font-semibold text-nwhite text-lg hover:cursor-pointer">
          Projects
        </li>
        <li className="p-4 text-xl font-fraunces text-vddblue bg-nwhite rounded-full hover:cursor-pointer active:bg-gblue active:text-nwhite">
          Contact
        </li>
      </ul>
      <Menu as="div" className="md:hidden relative inline-flex text-center">
        <Menu.Button>
          <Hamburger />
        </Menu.Button>
        <Menu.Items className="absolute flex flex-col items-center p-8 gap-8 z-10 right-0 w-96 top-20 bg-nwhite shadow-sm ring-1 ring-nwhite text-lg font-barlow text-dgblue arrow">
          <Menu.Item>
            <a href="/">About</a>
          </Menu.Item>
          <Menu.Item>
            <a href="/">Services</a>
          </Menu.Item>
          <Menu.Item>
            <a href="/">Projects</a>
          </Menu.Item>
          <Menu.Item>
            <a
              href="/"
              className="bg-pyellow w-1/2 py-3 rounded-full font-fraunces text-vddblue font-semibold text-xl"
            >
              Contact
            </a>
          </Menu.Item>
        </Menu.Items>
      </Menu>
    </nav>
  );
};

export default Navbar;
