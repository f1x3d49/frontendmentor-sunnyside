import React from "react";
import morange from "../images/mobile/image-photography.jpg";
import dorange from "../images/desktop/image-photography.jpg";

const OrangeCard = () => {
  return (
    <section className="relative text-center">
      <picture>
        <source media="(min-width: 768px)" srcSet={dorange} className="" />
        <source srcSet={morange} />
        <img
          src={morange}
          alt="cherry"
          className="w-full object-fill object-center"
        />
      </picture>
      <div className="absolute top-[65%] left-[5%] translate-x-[5%]  w-[80%]">
        <h2 className="text-2xl font-fraunces font-extrabold text-dblue pb-4">
          Photography
        </h2>
        <p className="font-barlow text-dblue font-semibold md:max-w-[60%] md:indent-0 md:mx-auto">
          Increase your credibility by getting the most stunning, high-quality
          photos that improve your business image.
        </p>
      </div>
    </section>
  );
};

export default OrangeCard;
