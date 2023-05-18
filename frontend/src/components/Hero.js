import React from "react";
import morange from "../images/mobile/image-header.jpg";
import dorange from "../images/desktop/image-header.jpg";
import Navbar from "./Navbar";
import { ReactComponent as ADown } from "../images/icon-arrow-down.svg";

const Hero = () => {
  return (
    <section className="relative md:col-span-2">
      <Navbar />
      <picture>
        <source media="(min-width: 768px)" srcSet={dorange} />
        <source srcSet={morange} />
        <img className="-mt-24 object-center md:-mt-28" src={morange} alt="" />
      </picture>
      <h1 className="absolute w-screen text-center top-[20%] uppercase   tracking-wider font-fraunces text-nwhite text-7xl">
        We are creatives
      </h1>
      <div className="absolute top-[44%] left-[49%]">
        <ADown />
      </div>
    </section>
  );
};

export default Hero;
