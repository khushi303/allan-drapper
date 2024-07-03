import Image from "next/image";
import { H3 } from "./common/Heading";
import { governMoneyList } from "./common/Helper";

const GovernMoney = () => {
  return (
    <div className="px-4 py-[29px]">
      <div className="container max-w-[1140px] px-0">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 xl:gap-0">
          <div className="flex flex-col col-span-1 lg:max-w-[536px]">
            <H3
              className="inline-block relative after:absolute pb-5 after:bottom-0 after:h-[5px] after:bg-chileanFire after:w-16 after:left-0"
              heading="10 Laws That Govern Money"
            />
            <Image
              className="mt-5 lg:mt-10 max-lg:w-full max-w-[536px] flex mx-auto"
              src="/assets/images/png/allan-drapper.png"
              alt="allan-drapper"
              width={536}
              height={905}
            />
          </div>
          <div className="col-span-1 flex flex-col gap-3 xl:-ml-[18px]">
            {governMoneyList.map((obj, index) => (
              <div className="border flex border-gray p-3 sm:p-4 items-start gap-[14px]">
                <div className="bg-bunker min-w-8 w-8 h-8 flex items-center justify-center bg-opacity-80 text-white mt-[5px]">{index + 1}</div>
                <p className="text-bunker font-bold text-xl sm:text-2xl md:text-custom-xl !leading-[120%] text-opacity-80">{obj.title}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default GovernMoney;
