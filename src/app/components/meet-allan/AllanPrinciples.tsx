import Image from "next/image";
import React from "react";
import { H2 } from "../common/Heading";
import { principlesList } from "../common/Helper";

const AllanPrinciples = () => {
  return (
    <div className="bg-principleBlackLayer bg-cover bg-no-repeat bg-center lg:py-0 py-14">
      <div className="container xl:max-w-[1276px]">
        <div className="flex gap-3.5 items-center lg:flex-row flex-col">
          <div className="pt-3">
            <Image
              src={"/assets/images/png/blue-coat-man.png"}
              alt="bluecoatman"
              width={752}
              height={758}
              className="xl:max-w-[758px] lg:max-w-[600px] max-w-[450px] w-full"
            />
          </div>
          <div className="lg:py-14">
            <H2 heading="Allan's Principles" className="text-white mb-12" />
            {principlesList.map((obj, index) => (
              <div key={index} className="lg:max-w-[407px]">
                <div key={index} className="flex gap-3 items-center mb-2">
                  <span>{obj.icon}</span>
                  <p className="text-custom-xl font-bold text-iron !leading-120">
                    {obj.title}
                  </p>
                </div>
                <div
                  className={`${
                    index === 3 && "hidden"
                  } w-0 h-12 ml-5 border border-dashed border-shadowGreen mb-2`}
                ></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AllanPrinciples;
