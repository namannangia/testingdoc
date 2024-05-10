import React from "react";
import { Container } from "@/components/container";

const HeroSecContact = () => {
  return (
    <div className="contact-hero-sec ">
      <Container>
        <div className="pt-16 md:py-6 flex flex-col gap-10 xs:gap-6 sm:gap-6 pb-16 xs:pt-6 sm:pt-6 xs:pb-6 sm:pb-6">
          <div className="contact-now flex flex-col justify-center text-center ">
            <span className="text-gray-600 text-2xl font-normal mb-5 sm:mb-2 xs:mb-2 xs:text-base sm:text-base">
              CONTACT US
            </span>
            <h1 className="text-gray-950 font-bold text-7xl xs:text-3xl sm:text-3xl xs:font-bold sm:font-bold">
              Need Help? <br />
              <span className="text-turnary-800">Contact Now!</span>
            </h1>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default HeroSecContact;
