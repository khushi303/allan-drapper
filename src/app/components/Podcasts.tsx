import { H2 } from "./common/Heading";

const Podcasts = () => {
  const podcastsList = [
    {
      thamnail: "/assets/images/png/podcast_thamnal_1.png",
      thamnailTitle: "S2  -  Ep: 145",
      title: "Leadership Lessons From Legendary… College Coaches",
      description: (
        <>
          In today's episode, ESPN storyteller & interviewer Marty Smith chats
          with Allan about his new book, SIDELINE CEO: LEADERSHIP PRINCIPLES
          FROM…
        </>
      ),
      publisDate: "Dec 4, 2023",
    },
  ];
  return (
    <div className="w-full px-3 pt-[154px]">
      <div className="container mx-auto max-w-[1140px]">
        <div className="flex justify-center">
          <H2
            className="inline-block mx-auto relative after:absolute pb-5 after:bottom-0 after:h-[5px] after:bg-[#EEE916] after:w-16 after:left-1/2 after:-translate-x-1/2"
            heading="Podcasts"
          />
        </div>
        <div className="grid grid-cols-1">
          {podcastsList.map((podcast, index) => (
            <div key={index} className="border border-[#686C6B] p-4">
              <div className="flex gap-5">
                <img src={podcast.thamnail} className="w-[331px] h-[198px]" />
                <div className="flex flex-col">
                  <div className="flex">
                    <button className="text-[#EEE916] bg-[#040707] py-[3px] px-[10px] rounded-full">{podcast.thamnailTitle}</button>
                  </div>
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
