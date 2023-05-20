import React from "react";

const ClientCard = ({ portrait, content, name, title }) => {
  return (
    <div className="flex flex-col items-center mb-12 md:mb-0">
      <img src={portrait} alt="portrait" className="w-16 h-16 rounded-full" />
      <p className="text-base font-barlow text-vdgblue py-8 px-20 text-center line-clamp-3">
        {content}
      </p>
      <h1 className="font-fraunces font-extrabold text-vddblue pb-1">{name}</h1>
      <h3 className="text-sm font-barlow text-gblue">{title}</h3>
    </div>
  );
};

export default ClientCard;
