import React from "react";
import { H2 } from "../common/Heading";
import Image from "next/image";

const WhoIsAllan = () => {
  return (
    <div className="container xl:max-w-[1172px] lg:pt-1.5 lg:pb-28 lg:mb-2 sm:py-16 py-12">
      <div className="flex lg:justify-between justify-center items-center lg:flex-row flex-col-reverse lg:gap-14 gap-8">
        <div className="lg:max-w-[443px] w-full">
          <H2
            className="inline-block mx-auto relative after:absolute sm:pb-5 pb-3 after:bottom-0 after:h-[5px] after:bg-chileanFire after:w-16 after:left-0"
            heading="Who is Allan Draper ?"
          />
          <p className="text-2xl font-medium text-bunker text-opacity-80 lg:mt-8 mt-4">
            Allan’s story may sound familiar. It’s probably a lot like yours.
            Allan grew up in home that had very few financial resources. But
            there was something inside him. Something that yearned for more.
            Something that made him want to extract every last drop out of his
            potential. Allan is on a mission to help 10,000 people make
            short-term sacrifices to build businesses and wealth. Are you a
            creator?
          </p>
        </div>
        <div className="max-w-[611px] w-full">
          <Image
            src={"/assets/images/png/collage.png"}
            alt="collage"
            width={611}
            height={594}
          />
        </div>
      </div>
    </div>
  );
};

export default WhoIsAllan;
