import React from "react";

const TextSection = ({ title, content, color }) => {
  return (
    <section className="flex flex-col justify-center my-8 md:my-0 gap-8 md:text-left text-center">
      <h1 className="text-3xl font-fraunces text-vddblue md:pl-48 md:pr-72">
        {title}
      </h1>
      <p className="text-base text-dgblue font-barlow line-clamp-3 md:pl-48 md:pr-40 md:indent-0 indent-5">
        {content}
      </p>
      <button
        className={`uppercase text-sm font-fraunces md:text-left underline decoration-4 md:pl-48 tracking-wider decoration-${color}`}
      >
        Learn more
      </button>
    </section>
  );
};

export default TextSection;
