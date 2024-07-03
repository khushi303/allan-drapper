import Image from "next/image";
import React from "react";
import { Button } from "../common/Button";

const Hero = () => {
  return (
    <div className="container max-w-[1172px] lg:mt-24 lg:py-1 mt-16">
      <div className="flex md:items-end items-center md:flex-row flex-col justify-between sm:gap-10 gap-6 sm:mb-10 mb-8">
        <div className="max-w-[537px] w-full">
          <h2 className="text-custom-4xl leading-110 text-white text-bold">
            Meet Allan
          </h2>
          <p className="sm:mt-4 mt-2 text-2xl text-white font-medium">
            I have a unique ability to motivate people to make short-term
            sacrifices to build businesses and wealth. Are you next?
          </p>
        </div>
        <Button className="text-nowrap">talk to allan</Button>
      </div>
      <Image
        src={"/assets/images/png/signature.svg"}
        alt="signature"
        width={308}
        height={79}
        className="pb-14"
      />
    </div>
  );
};

export default Hero;
