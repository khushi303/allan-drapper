"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { CommonBtn } from "./CommonBtn";
import { MenuIcon } from "./Icons";

const Navbar = () => {
  const [navBarVisible, setNavBarVisible] = useState(false);
  useEffect(() => {
    if (navBarVisible) {
      document.body.classList.add("max-lg:overflow-hidden");
    } else {
      document.body.classList.remove("max-lg:overflow-hidden");
    }
  }, [navBarVisible]);
  return (
    <nav className="sm:py-3.5 py-2 relative z-50">
      <div className="container xl:max-w-[1272px]">
        <div className="flex items-center justify-between">
          <Link href={"/"} className="relative z-50">
            <Image
              src={"/assets/images/png/logo.png"}
              alt="logo"
              width={215}
              height={40}
            />
          </Link>
          <div
            className={`flex items-center xl:gap-12 gap-8 lg:flex-row flex-col max-lg:fixed max-lg:top-0 max-lg:h-full transition-all ease-linear duration-300 max-lg:w-full max-lg:bg-black max-lg:pt-20 ${
              navBarVisible === true ? "left-0" : "left-[-100%]"
            }`}
          >
            <ul className="flex items-center xl:gap-10 gap-6 lg:flex-row flex-col">
              <li>
                <a
                  href="/meet-allan"
                  className="text-xl text-white font-normal  text-nowrap"
                >
                  Meet Allan
                </a>
              </li>
              <li>
                <a
                  href="#mybrands"
                  className="text-xl text-white font-normal  text-nowrap"
                >
                  My Brands
                </a>
              </li>
              <li>
                <a
                  href="#podcast"
                  className="text-xl text-white font-normal  text-nowrap"
                >
                  Podcast
                </a>
              </li>
              <li>
                <a
                  href="#coaching"
                  className="text-xl text-white font-normal  text-nowrap"
                >
                  Coaching
                </a>
              </li>
              <li>
                <a
                  href="#speaking"
                  className="text-xl text-white font-normal  text-nowrap"
                >
                  Speaking
                </a>
              </li>
              <li>
                <a
                  href="#connect"
                  className="text-xl text-white font-normal  text-nowrap"
                >
                  Connect
                </a>
              </li>
            </ul>
            <CommonBtn className="text-lg leading-7 bg-transparent !text-chileanFire">
              Newsletter
            </CommonBtn>
          </div>
          <div
            onClick={() => setNavBarVisible(!navBarVisible)}
            className="relative z-50 lg:hidden"
          >
            {navBarVisible ? <MenuIcon /> : <MenuIcon />}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
