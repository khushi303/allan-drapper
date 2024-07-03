import React from "react";
import Navbar from "../components/common/Navbar";
import Hero from "../components/meet-allan/Hero";
import TopAchievements from "../components/meet-allan/TopAchievements";
import AllanPrinciples from "../components/meet-allan/AllanPrinciples";
import NeverSacrifice from "../components/meet-allan/NeverSacrifice";
import Glimpse from "../components/meet-allan/Glimpse";
import WhoIsAllan from "../components/meet-allan/WhoIsAllan";

const page = () => {
  return (
    <>
      <div className="bg-heroBlack bg-cover bg-center">
        <Navbar />
        <Hero />
      </div>
      <TopAchievements />
      <WhoIsAllan />
      <AllanPrinciples />
      <NeverSacrifice />
      <Glimpse />
    </>
  );
};

export default page;
