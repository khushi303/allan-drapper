import React from "react";
import { H2 } from "../common/Heading";

const Glimpse = () => {
  return (
    <div className="container xl:max-w-[1172px]">
      <H2 heading="A Glimpse into Our Togetherness" className="text-center" />
      <div className="w-14 h-[5px] bg-ripeLemon sm:mt-5 mt-3 mx-auto"></div>
      <div className="grid mt-12 grid-cols-3"></div>
    </div>
  );
};

export default Glimpse;
