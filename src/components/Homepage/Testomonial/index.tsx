import React from "react";
import { Container } from "@/components/container";
import Image from "next/image";
import leslie from "@/assets/svg/Leslie.svg";
import esther from "@/assets/svg/Esther.svg";
import jenny from "@/assets/svg/Jenny.svg";
import { TestimonialCard } from "./TestimonialCard";
import { CustomSlickSlider } from "@/components/SlickSlider";

export const Testimonials = () => {
  const sliderArr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
  return (
    <div className="bg-test-image">
      <Container>
        <div className="text-center md:py-6 pt-16 flex flex-col gap-10 pb-16 sm:py-6 xs:py-6 sm:gap-6 xs:gap-6">
          <div className="flex flex-col gap-2">
            <h2 className="text-5xl text-gray-950 font-bold xs:text-2xl sm:text-2xl">
              Our{" "}
              <span className="text-turnary-800 font-bold"> Testimonials </span>
            </h2>
            <span className="text-based text-gray-500 font-normal xs:text-xs sm:text-xs">
              Reliable Diaganostic service center has been the diagnostic center
              for all your healthcare needs as we have been assisting medical
              professionals by providing
              <br className="sm:hidden xs:hidden"/> Zero error reports.
            </span>
          </div>
          <CustomSlickSlider>
            {sliderArr?.map((sa) => {
              return (
                <TestimonialCard
                  icon={leslie}
                  title="Leslie Alexander"
                  text="Morem ipsum dolor sit amet consectetur. Augue dignissim placerat vel egestas malesuada. Varius sodales vehicula non mollis nulla vulputate nibh etiam."
                  date="05 Nov 2022"
                />
              );
            })}
          </CustomSlickSlider>
        </div>
      </Container>
    </div>
  );
};
export default Testimonials;
