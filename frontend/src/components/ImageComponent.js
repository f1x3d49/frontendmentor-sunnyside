import React from "react";

const ImageComponent = ({ mobile, desktop }) => {
  return (
    <section className="w-full">
      <picture>
        <source
          media="(min-width: 768px)"
          srcSet={desktop}
          className="w-full object-fill"
        />
        <source srcSet={mobile} />
        <img src={mobile} alt="img" className="object-center w-full" />
      </picture>
    </section>
  );
};

export default ImageComponent;
