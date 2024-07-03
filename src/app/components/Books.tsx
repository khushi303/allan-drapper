"use client";
import BooksCardLayout from "./BooksCardLayout";
import { booksList } from "./common/Helper";
import "swiper/css";
import { Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { SwiperArrow } from "./common/Icons";

const Books = () => {
  const settings = {
    slidesPerView: 1,
    spaceBetween: 10,
    loop: true,
    breakpoints: {
      640: {
        slidesPerView: 2,
      },
    },
    Navigation: {
      nextEl: ".swiper_next",
      prevEl: ".swiper_prev",
    },
  };
  return (
    <div className="px-4">
      <div className="container mx-auto px-0 max-w-[1140px]">
        {booksList.map((obj, index) => (
          <div key={index} className="mt-7 sm:mt-12 md:mt-14 lg:mt-[60px]">
            <div className="flex items-center justify-between gap-10">
              <p className="font-bold text-bunker text-2xl sm:text-custom-xl md:text-custom-2xl !leading-105">
                {obj.title}
              </p>
              <div className="flex gap-1 md:hidden">
                <button className="swiper_prev px-1 border border-bunker rounded-full">
                  <SwiperArrow />
                </button>
                <button className="swiper_next rotate-180 px-1 border border-bunker rounded-full">
                  <SwiperArrow />
                </button>
              </div>
            </div>
            <div className="hidden md:grid grid-cols-3 gap-6 md:my-6 lg:mt-[30px]">
              {obj.books.map((value, index) => (
                <BooksCardLayout
                  key={index}
                  title={value.title}
                  author={value.author}
                  image={value.image}
                />
              ))}
            </div>
            <Swiper {...settings} className="md:!hidden my-3 sm:my-6">
              {obj.books.map((value, index) => (
                <SwiperSlide key={index} className="!h-auto">
                  <div className="h-full">
                    <BooksCardLayout
                      key={index}
                      title={value.title}
                      author={value.author}
                      image={value.image}
                    />
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        ))}
      </div>
    </div>
  );
};
export default Books;
