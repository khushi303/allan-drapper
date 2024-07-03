import React from "react";
import { H2 } from "./common/Heading";
import Image from "next/image";

const WhoIsAllan = () => {
  return (
    <div className="relative mb-36">
      <div className="xl:pt-52 lg:py-28 sm:py-16 py-12 container xl:max-w-[1112px] relative z-40">
        <div className="flex xl:gap-[70px] sm:gap-12 gap-8 lg:justify-between justify-center lg:flex-row flex-col">
          <div className="xl:min-w-[526px] xl:max-w-[526px]">
            <H2 heading="Who is Allan Draper ?" className="" />
            <div className="sm:mt-5 mt-3 h-[5px] bg-chileanFire w-14 sm:mb-8 mb-4"></div>
            <p className="text-2xl font-medium leading-150 text-bunker">
              Allan’s story may sound familiar. It’s probably a lot like yours.
              Allan grew up in home that had very few financial resources. But
              there was something inside him. Something that yearned for more.
              Something that made him want to extract every last drop out of his
              potential. Allan is on a mission to help 10,000 people make
              short-term sacrifices to build businesses and wealth. Are you a
              creator?
            </p>
          </div>
          <div className="border-[20px] border-white max-w-[500px] max-lg:mx-auto lg:mt-3 xl:translate-x-5">
            <Image
              src={"/assets/images/png/mike-guy.png"}
              alt="mikeguy"
              width={500}
              height={603}
              className=" lg:min-w-[464px] max-w-[464px] w-full"
            />
          </div>
        </div>
      </div>
      <div className="absolute top-0 left-0 right-0">
        <Image
          src={"/assets/images/png/blur-layer.png"}
          alt="blacklayer"
          width={1440}
          height={698}
          className="w-full max-lg:object-cover object-right min-h-[698px] max-h-[689px] h-full"
        />
      </div>
    </div>
  );
};

export default WhoIsAllan;
