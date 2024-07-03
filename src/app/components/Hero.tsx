import React from "react";
import { CommonBtn } from "./common/CommonBtn";
import Image from "next/image";

const Hero = () => {
  return (
    <div className="sm:pt-14 sm:mt-1 pt-12">
      <div className="container max-w-[1172px]">
        <div className="flex lg:flex-row flex-col xl:items-start items-center xl:gap-14 gap-10">
          <div className="lg:w-[55%] w-full xl:pt-36">
            <h2 className="sm:text-custom-4xl text-4xl leading-110 text-white font-bold  sm:mb-4 mb-3">
              Create Your Dream Life through Entrepreneurship
            </h2>
            <p className="text-white text-2xl sm:mb-10 mb-6">
              For the Creators. I will teach you how to build an extraordinary
              business and how to build wealth without sacrificing what matters
              most.
            </p>
            <CommonBtn className="px-6">Start Now</CommonBtn>
          </div>
          <div className="lg:w-[40%] md:w-3/6 sm:w-4/6 w-5/6 relative">
            <Image
              src={"/assets/images/png/black-tshirt-man.png"}
              alt="blacktshirtman"
              width={594}
              height={670}
              className="custom2xl:w-[594px] w-full custom2xl:min-w-[594px] custom2xl:max-w-[594px] object-cover object-center relative z-10"
            />
            <div className="bg-ripeLemon custom2xl:w-[494px] custom2xl:h-[494px] w-[300px] h-[300px] rounded-full bg-opacity-50 custom2xl:blur-[200px] blur-[150px] absolute inset-0 z-0 m-auto"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
