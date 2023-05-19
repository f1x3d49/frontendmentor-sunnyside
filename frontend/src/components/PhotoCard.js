import React from "react";

const PhotoCard = ({ img, title, content }) => {
  return (
    <section>
      <picture>
        <source
          media="(min-width: 768px)"
          srcSet={`../images/desktop/${img}`}
          className=""
        />
        <source srcSet={`../images/mobile/${img}`} />
        <img
          src={`./images/mobile/${img}`}
          alt={title}
          className="object-center w-full"
        />
      </picture>
    </section>
  );
};

export default PhotoCard;
