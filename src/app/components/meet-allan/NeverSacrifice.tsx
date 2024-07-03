import Image from "next/image";
import React from "react";

const NeverSacrifice = () => {
  return (
    <div className="container xl:max-w-[1172px] lg:py-36 lg:my-1.5 sm:py-14 py-12">
      <p className="sm:text-custom-4xl text-custom-3xl font-bold leading-110 text-bunker text-center lg:mb-14 sm:mb-8 mb-4">
        Never Sacrifice These 3 Things
      </p>
      <h1 className="lg:text-custom-5xl sm:text-6xl text-custom-3xl !leading-120 font-black tracking-widest text-center uppercase text-transparent">
        Your Family
      </h1>
      <h1 className="lg:text-custom-5xl sm:text-6xl text-custom-3xl !leading-120 font-black tracking-widest text-center uppercase text-white">
        Your Heart
      </h1>
      <h1 className="lg:text-custom-5xl sm:text-6xl text-custom-3xl !leading-120 font-black tracking-widest text-center uppercase text-white">
        Your Dignity
      </h1>
      <div className="lg:mt-16 md:mt-10 mt-8">
        <Image
          src={"/assets/images/png/family.png"}
          alt="black"
          width={1140}
          height={588}
          className="min-h-[200px] object-cover object-center"
        />
      </div>
    </div>
  );
};

export default NeverSacrifice;
