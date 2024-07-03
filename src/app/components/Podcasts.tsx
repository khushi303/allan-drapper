import Link from "next/link";
import { H2 } from "./common/Heading";
import { PlayIcon } from "./common/Icons";

const Podcasts = () => {
  const podcastsList = [
    {
      thamnail: "/assets/images/png/podcast_thamnal_1.png",
      title: "Leadership Lessons From Legendary… College Coaches",
      description: (
        <>
          In today's episode, ESPN storyteller & interviewer Marty Smith chats
          with Allan about his new book, SIDELINE CEO: LEADERSHIP PRINCIPLES
          FROM…
        </>
      ),
    },
  ];
  return (
    <div className="w-full px-3 pt-[154px]">
      <div className="container px-0 mx-auto max-w-[1140px]">
        <div className="flex justify-center">
          <H2
            className="inline-block mx-auto relative after:absolute pb-5 after:bottom-0 after:h-[5px] after:bg-ripeLemon after:w-16 after:left-1/2 after:-translate-x-1/2"
            heading="Podcasts"
          />
        </div>
        <div className="grid grid-cols-1 mt-[87px]">
          {podcastsList.map((podcast, index) => (
            <div key={index} className="border border-gray p-4">
              <div className="flex gap-5">
                <img src={podcast.thamnail} className="w-[331px] h-[198px]" />
                <div className="flex flex-col mr-16 relative">
                  <div className="flex gap-4 items-center">
                    <button className="text-ripeLemon bg-bunker py-[3px] px-[10px] rounded-full font-black text-sm sm:text-base">
                      S2 &nbsp;-&nbsp; Ep: {`14${4 + index + 1}`}
                    </button>
                    <p className="text-gray text-sm sm:text-base font-medium">
                      Dec 4, 2023
                    </p>
                  </div>
                  <p className="mt-4 text-bunker font-bold text-xl sm:text-2xl md:text-custom-xl !leading-[120%]">
                    {podcast.title}
                  </p>
                  <p className="mt-[10px] text-bunker font-medium text-lg sm:text-xl md:text-2xl">
                    {podcast.description}
                  </p>
                  <Link className="mt-5" href={""}>
                    Read More
                  </Link>
                  <button className=" absolute">
                    <PlayIcon />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Podcasts;
