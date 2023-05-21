import React from "react";
import { ReactComponent as AgencyLogo } from "../images/logo.svg";
import { ReactComponent as Facebook } from "../images/icon-facebook.svg";
import { ReactComponent as Instagram } from "../images/icon-instagram.svg";
import { ReactComponent as Pinterest } from "../images/icon-pinterest.svg";
import { ReactComponent as Twitter } from "../images/icon-twitter.svg";

const Footer = () => {
  return (
    <footer className="flex flex-col items-center text-dmcyan font-barlow justify-center w-auto py-12 gap-8 bg-teal-400 md:col-span-2">
      <AgencyLogo className="fill-ddcyan" />
      <ul className="flex">
        <li className="p-4 hover:cursor-pointer hover:text-nwhite">About</li>
        <li className="p-4 hover:cursor-pointer hover:text-nwhite">Services</li>
        <li className="p-4 hover:cursor-pointer hover:text-nwhite">Projects</li>
      </ul>
      <div className="flex gap-4">
        <Facebook className="fill-[#2C7566] hover:cursor-pointer hover:fill-nwhite" />
        <Instagram className="fill-[#2C7566] hover:cursor-pointer hover:fill-nwhite" />
        <Pinterest className="fill-[#2C7566] hover:cursor-pointer hover:fill-nwhite" />
        <Twitter className="fill-[#2C7566] hover:cursor-pointer hover:fill-nwhite" />
      </div>
    </footer>
  );
};

export default Footer;
