import React from "react";
import { H2 } from "./common/Heading";
import { myBrandDataList } from "./common/Helper";
import Image from "next/image";

const MyBrands = () => {
  return (
    <div className="">
      <H2 heading="My Brands" className="text-center px-4" />
      <div className="w-14 h-[5px] bg-shadowGreen mx-auto mt-5"> </div>
      <div className="coursal overflow-x-hidden flex">
        <div className="slide_container gap-[104px]">
          {myBrandDataList.map((obj, index) => (
            <Image
              key={index}
              src={obj.image}
              alt={obj.name}
              width={240}
              height={90}
              className="max-"
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default MyBrands;
