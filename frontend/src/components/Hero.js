import React from "react";
import morange from "../images/mobile/image-header.jpg";
import dorange from "../images/desktop/image-header.jpg";
import Navbar from "./Navbar";

const Hero = () => {
  return (
    <section className="relative">
      <Navbar />
      <picture>
        <source media="(min-width: 768px)" srcSet={dorange} />
        <source srcSet={morange} />
        <img className="-mt-24 object-center md:-mt-28" src={morange} alt="" />
      </picture>
    </section>
  );
};

export default Hero;
