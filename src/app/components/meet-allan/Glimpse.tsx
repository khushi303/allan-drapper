import React from "react";
import { H2 } from "../common/Heading";
import Image from "next/image";

const Glimpse = () => {
  return (
    <div className="container xl:max-w-[1172px]">
      <H2 heading="A Glimpse into Our Togetherness" className="text-center" />
      <div className="w-14 h-[5px] bg-ripeLemon sm:mt-5 mt-3 mx-auto"></div>
      <div className="grid mt-12 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-6 mb-16">
        <div className="col-span-1 flex flex-col gap-6">
          <Image
            src={"/assets/images/png/industrial-man.png"}
            alt="industrialman"
            width={364}
            height={255}
            className="h-full object-cover object-center w-full"
          />
          <Image
            src={"/assets/images/png/children.png"}
            alt="industrialman"
            width={364}
            height={199}
            className="h-full object-cover object-center w-full"
          />
        </div>
        <div className="col-span-1">
          <Image
            src={"/assets/images/png/little-kid-playing.png"}
            alt="industrialman"
            width={364}
            height={479}
            className="h-full object-cover object-center w-full"
          />
        </div>
        <div className="sm:col-span-2 md:col-span-1 col-span-1 flex md:flex-col sm:flex-row flex-col md:gap-6 sm:gap-0 gap-6 w-full">
          <Image
            src={"/assets/images/png/full-family.png"}
            alt="industrialman"
            width={364}
            height={255}
            className="h-full md:w-full sm:pr-3 md:pr-0 sm:w-1/2 w-full"
          />
          <div className="flex sm:w-1/2 sm:pl-3 md:pl-0 md:w-full w-full">
            <Image
              src={"/assets/images/png/mlb-playing.png"}
              alt="industrialman"
              width={170}
              height={200}
              className="h-full w-1/2 pr-3 object-cover object-center"
            />
            <Image
              src={"/assets/images/png/couple.png"}
              alt="industrialman"
              width={170}
              height={200}
              className="h-full w-1/2 pl-3 object-cover object-center"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Glimpse;
