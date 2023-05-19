import React from "react";
import mdesign from "../images/mobile/image-graphic-design.jpg";
import ddesign from "../images/desktop/image-graphic-design.jpg";

const CherryCard = () => {
  return (
    <section className="relative text-center">
      <picture>
        <source media="(min-width: 768px)" srcSet={ddesign} className="" />
        <source srcSet={mdesign} />
        <img
          src={mdesign}
          alt="cherry"
          className="w-full object-fill object-center"
        />
      </picture>
      <div className="absolute top-[65%] left-[5%] translate-x-[5%]  w-[80%]">
        <h2 className="text-2xl font-fraunces font-extrabold text-ddcyan pb-4">
          Graphic Design
        </h2>
        <p className="font-barlow text-ddcyan font-semibold md:max-w-[60%] md:indent-0 md:mx-auto">
          Great design makes you memorable. We deliver artwork that underscores
          your brand message and captures potential clients' attention.
        </p>
      </div>
    </section>
  );
};

export default CherryCard;
