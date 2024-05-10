import React from "react";
import WhyChooseUs from "@/components/about-us/WhyChooseUs/";
import { Header } from "@/components/header";
import VisionMission from "@/components/about-us/VisionMission";
import CoreValues from "@/components/about-us/CoreValues";
import Founders from "@/components/about-us/Founders";
import HeroAbout from "@/components/about-us/HeroAbout";
import { Footer } from "@/components/footer";

const index = () => {
  return (
    <>
      <Header />
      <HeroAbout />
      <WhyChooseUs />
      <VisionMission />
      <CoreValues />
      <Founders />
      <Footer/>
    </>
  );
};

export default index;
