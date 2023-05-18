import React from "react";

const TextSection = ({ title, content, color }) => {
  return (
    <section className="flex flex-col items-center justify-center gap-8 md:text-left text-center py-12">
      <h1 className="text-3xl font-fraunces text-vddblue md:px-64 px-16">
        {title}
      </h1>
      <p className="text-base text-dgblue font-barlow line-clamp-5  px-16 indent-5">
        {content}
      </p>
      <button
        className={`uppercase text-sm font-fraunces underline decoration-pyellow`}
      >
        Learn more
      </button>
    </section>
  );
};

export default TextSection;
