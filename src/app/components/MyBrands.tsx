import React from "react";
import { H3 } from "./common/Heading";
import CustomSlider from "./common/CustomSlider";

const MyBrands = () => {
  return (
    <div className="container max-w-[1284px]">
      <H3 heading="My Brands" className="text-center px-4" />
      <div className="w-14 h-[5px] bg-shadowGreen mx-auto mt-5"></div>
      <div className="coursal overflow-x-hidden flex lg:gap-[104px] gap-16 lg:my-24 sm:my-16 my-12 flex-nowrap">
        <CustomSlider />
        <CustomSlider />
      </div>
    </div>
  );
};

export default MyBrands;
