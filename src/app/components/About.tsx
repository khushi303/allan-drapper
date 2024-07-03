import React from "react";
import { aboutDataList } from "./common/Helper";

const About = () => {
  return (
    <div className="bg-[#1D1D1D] xl:py-28 sm:py-16 py-12 ">
      <div className="container max-w-[1172px]">
        <div className="flex items-center lg:gap-[120px] sm:gap-14 gap-8 justify-center flex-wrap">
          {aboutDataList.map((obj, index) => (
            <div
              key={index}
              className="flex items-center justify-center flex-col"
            >
              <h2
                className={`sm:text-5xl text-3xl leading-120 text-ripeLemon sm:mb-1.5 mb-1 ${
                  index === 1 && "!text-shadowGreen"
                } ${index === 2 && "!text-chileanFire"}`}
              >
                {obj.value}
              </h2>
              <p className="sm:text-2xl text-lg leading-130 text-iron sm:mb-4 mb-3">
                {obj.title}
              </p>
              <div
                className={`w-14 h-0.5 bg-ripeLemon ${
                  index === 1 && "!bg-shadowGreen"
                } ${index === 2 && "!bg-chileanFire"}`}
              ></div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default About;
