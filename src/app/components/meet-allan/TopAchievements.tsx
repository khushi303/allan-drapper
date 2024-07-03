import Image from "next/image";
import React from "react";
import { H2 } from "../common/Heading";
import { topAchievementsList } from "../common/Helper";
import { GreenSquare } from "../common/Icons";

const TopAchievements = () => {
  return (
    <div className="container xl:max-w-[1172px] mt-36 pt-1.5 mb-36 pb-3">
      <div className="flex xl:gap-[95px] gap-10 items-center lg:flex-row flex-col">
        <Image
          src={"/assets/images/png/red_shirt_man.png"}
          alt="redshirtman"
          width={464}
          height={603}
          className="max-w-[464px] xl:min-w-[464px] w-full"
        />
        <div className="lg:pb-11">
          <H2 heading="Allan's Top Achievements" className="" />
          <div className="w-14 h-[5px] bg-ripeLemon sm:mt-5 mt-3 sm:mb-8 mb-6"></div>
          <div className="flex flex-col sm:gap-4 gap-3">
            {topAchievementsList.map((obj, index) => (
              <div key={index} className="flex sm:gap-3 gap-2 items-start">
                <span className="mt-1">
                  <GreenSquare />
                </span>
                <p className="text-2xl text-bunker font-medium text-opacity-80 leading-130">
                  {obj.title}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopAchievements;
