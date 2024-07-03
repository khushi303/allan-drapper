import { H2 } from "./common/Heading";
import { PlayIcon } from "./common/Icons";
import { podcastsList } from "./common/Helper";
import { CommonBtn } from "./common/CommonBtn";

const Podcasts = () => {
  return (
    <div className="w-full px-3 py-10 sm:py-12 md:py-16 lg:py-20 xl:pt-[154px] xl:pb-24">
      <div className="container px-0 mx-auto max-w-[1140px]">
        <div className="flex justify-center">
          <H2
            className="inline-block mx-auto relative after:absolute pb-5 after:bottom-0 after:h-[5px] after:bg-ripeLemon after:w-16 after:left-1/2 after:-translate-x-1/2"
            heading="Podcasts"
          />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-1 mt-8 sm:mt-10 md:mt-12 lg:mt-14 xl:mt-[87px] gap-4 sm:gap-5 md:gap-6">
          {podcastsList.map((podcast, index) => (
            <div key={index} className={`border border-gray p-3 sm:p-4 ${index ===2 && "md:col-span-2 lg:col-span-1 md:w-1/2 lg:w-full md:mx-auto lg:mx-0"}`}>
              <div className="flex gap-4 sm:gap-5 items-center max-lg:flex-col">
                <img src={podcast.thamnail} className="w-full xl:w-[331px] object-contain h-full xl:h-[198px]" />
                <div className="flex flex-col md:pr-10 xl:pr-14 relative">
                  <div className="flex gap-3 sm:gap-4 items-center">
                    <button className="text-ripeLemon bg-bunker py-[3px] px-[10px] rounded-full font-black text-sm sm:text-base">
                      S2 &nbsp;-&nbsp; Ep: {`14${4 + index + 1}`}
                    </button>
                    <p className="text-gray text-sm sm:text-base font-medium">
                      Dec 4, 2023
                    </p>
                  </div>
                  <p className="mt-2 sm:mt-4 text-bunker font-bold text-xl sm:text-2xl md:text-custom-xl !leading-[120%]">
                    {podcast.title}
                  </p>
                  <p className="mt-1 sm:mt-[10px] opacity-80 text-bunker font-medium text-lg sm:text-xl md:text-2xl">
                    {podcast.description}
                  </p>
                  <div>
                    <button className="mt-3 sm:mt-4 lg:mt-5 text-bunker inline-block font-bold text-sm sm:text-base relative after:absolute after:bg-bunker after:w-full after:h-[0.5px] after:left-0 after:bottom-1">
                      Read More
                    </button>
                  </div>
                  <button className=" absolute right-0 top-0">
                    <PlayIcon />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="flex justify-center gap-3 sm:gap-4 items-center mt-5 sm:mt-7 md:mt-10 xl:mt-[67px] max-sm:flex-col">
        <CommonBtn className="px-6 border border-transparent max-sm:w-full">BE A GUEST</CommonBtn>
        <CommonBtn className="px-6 border border-bunker !bg-transparent border-opacity-80 !text-bunker max-sm:w-full">HAVE ME ON YOUR SHOW</CommonBtn>
        </div>
      </div>
    </div>
  );
};

export default Podcasts;
