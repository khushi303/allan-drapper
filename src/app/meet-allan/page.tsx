import React from "react";
import Navbar from "../components/common/Navbar";
import Hero from "../components/meet-allan/Hero";

const page = () => {
  return (
    <div className="bg-heroBlack bg-cover bg-center">
      <Navbar />
      <Hero />
    </div>
  );
};

export default page;
