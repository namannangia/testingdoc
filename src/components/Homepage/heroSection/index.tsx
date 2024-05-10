import { Container } from "@/components/container";
import HeroImage from "@/assets/images/desktop-banner.jpg";
import MobileHeroImage from "@/assets/images/mobile-banner.jpg";
import Image from "next/image";
import { FormHeroSection } from "./form";
import CustomButton from "@/components/CustomButton";
import PurposeofMedicalLab from "./PurposeofMedicalLab";
export const HeroSection = () => {
  return (
    <div className="h-full xs:h-full sm:h-full xs:bg-white sm:bg-white">
      <div className="flex items-center justify-center">
        <div className="relative w-full">
          <div className="w-full flex justify-center">
            <div className="desktop-banner  sm:hidden xs:hidden">
              {/* <div className="h-[600px]] w-[100%] sm:hidden xs:hidden"> */}
              {/* <Image
                src={HeroImage}
                alt="hero-image"
                className="w-full h-full object-cover"
              /> */}
              {/* </div> */}
            </div>
            <div className="hidden sm:block xs:block sm:w-full xs:w-full">
              <Image
                src={MobileHeroImage}
                alt="hero-image"
                className="w-full h-full"
              />
            </div>
          </div>
          <div className="xs:hidden sm:hidden ">
            <PurposeofMedicalLab />
          </div>

          {/* <div className="flex justify-between  absolute top-2 z-10 md:top-32 xs:z-0 sm:z-0 left-0 right-0 items-center h-full sm:flex-col xs:flex-col xs:relative sm:relative xs:gap-5 sm:gap-5 sm:hidden">
            <div className="w-[355px] bg-white rounded-xl p-6 xs:p-3 sm:p-3 xs:gap-3 sm:gap-3 flex flex-col gap-6 ">
              <div className="w-48 h-9 xs:h-7 sm:h-7 xs:w-[152px] sm:w-[152px] bg-secondory-400 sm:text-xs xs:text-xs text-base text-primary-300 font-medium border border-primary-300 rounded-lg flex items-center justify-center ">
                Purpose of Medical Lab
              </div>
              <div className="flex flex-col">
                <span className="text-4xl sm:text-2xl xs:text-2xl text-gray-800 font-semibold">
                  Detailed{" "}
                  <span className="lg:hidden xl:hidden text-4xl sm:text-2xl xs:text-2xl text-turnary-800 font-semibold">
                    Diagnostic
                  </span>
                </span>
                <span className=" sm:hidden xs:hidden md:hidden text-4xl sm:text-2xl xs:text-2xl text-turnary-800 font-semibold">
                  Diagnostic
                </span>
                <span className="text-4xl text-gray-800 font-semibold sm:text-2xl xs:text-2xl">
                  of your body
                </span>
              </div>
              <p className="text-base text-gray-800 font-normal sm:text-xs xs:text-xs">
                Experience a comprehensive and detailed diagnostic assessment of
                your body, to provide you with a thorough understanding of your
                overall health.
              </p>
            </div>
            <div className="w-[355px]  bg-white rounded-xl p-6  flex flex-col gap-7 ">
              <div className="flex flex-col gap-2">
                <div className="flex items-center gap-2">
                  <span className="text-3xl xs:text-2xl sm:text-2xl text-gray-800 font-semibold">
                    Looking for
                  </span>
                  <span className="text-3xl xs:text-2xl sm:text-2xl text-turnary-800 font-semibold">
                    a test ?
                  </span>
                </div>
                <span className="text-base font-normal text-gray-500 xs:text-sm sm:text-sm">
                  You can go for the test ahead of{" "}
                </span>
              </div>
              <div className="sm:hidden xs:hidden">
                <FormHeroSection />
              </div>
              <>
                <CustomButton className={""}  bg >Get a call</CustomButton>
              </>
            </div>
          </div> */}
        </div>
      </div>
    </div>
  );
};
