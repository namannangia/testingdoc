import { Card } from "@/components/shared/card";
import { Container } from "@/components/container";
import Image from "next/image";
import bodyCheckup from "@/assets/images/body-checkup.png";
import discount from "@/assets/svg/discount.svg";
import check from "@/assets/images/check-green.svg";
import {
  Text16,
  Text20,
  Text24,
  Text32,
  TextSky,
} from "@/components/shared/Text";
import TitleSection from "@/components/titleSection";
import CustomButton from "@/components/CustomButton";
export const HeroFacilities = () => {
  return (
    <Card className="about-hero-sec bg4">
      <Container>
        <div className="grid grid-cols-2 xs:grid-cols-1 xs:gap-8 md:grid-cols-1 md:gap-8 sm:grid-cols-1 sm:gap-4">
          {/* Left */}
          <div className="flex justify-center items-center">
            <Image
              src={bodyCheckup}
              alt={""}
              width={290}
              height={290}
              className="11w-[500px]"
            />
          </div>
          {/* Right */}
          <div className="sm:px-[30px]">
            <div className="flex gap-2 xs:gap-1 sm:gap-1 sm:flex-col xs:flex-col">
              <div className="flex gap-2 items-center border-2 bg-[#EBFAF2] border-solid border-[#1A8952] p-2 rounded-xl w-fit mb-[18px] sm:mb-[10px] ">
                <Image src={check} alt={""} />
                <Text16 className="font-medium !text-[#1A8952]">
                  Government approved provider
                </Text16>
              </div>
              <div className="flex gap-2 items-center border-2 bg-[#EBFAF2] border-solid border-[#1A8952] p-2 rounded-xl w-fit mb-[18px]">
                <Image src={discount} alt={""} />
                <Text16 className="font-medium !text-[#1A8952]">
                  Limited time offer
                </Text16>
              </div>
            </div>
            <TitleSection
              className="lg:text-[40px]"
              pink={"Full Body "}
              black={""}
              blue={"Checkup"}
            />
            {/* Amount */}
            <div className="flex items-center gap-2 mb-6">
              <Text32>5999</Text32>
              <Text24 className="line-through">12000</Text24>
              <Text20>
                <TextSky>(15% OFF)</TextSky>
              </Text20>
            </div>
            <Text16 className="mb-6">
              Full body checkup tests tell your healthcare provider how well
              your thyroid gland works. These tests can help diagnose conditions
              like hyperthyroidism, hypothyroidism, Graves’ disease, Hashimoto’s
              disease and thyroid cancer. Types of thyroid tests include blood
              tests, imaging tests and nuclear medicine tests.
            </Text16>
            <div className="flex gap-3">
              <CustomButton
                href={"/checkout"}
                className="w-[314px] max-w-full h-14" bg={""}>
                Add to cart
              </CustomButton>
              <CustomButton
                href={"/checkout"}
                className="w-full lg:w-[314px] h-14 bg-turnary-800 border-turnary-800">
                Buy it now
              </CustomButton>
            </div>
          </div>
        </div>
      </Container>
    </Card>
  );
};

export default HeroFacilities;
