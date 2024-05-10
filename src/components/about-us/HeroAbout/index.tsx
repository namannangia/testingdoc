import CustomButton from "@/components/CustomButton";
import { Container } from "@/components/container";
import Image from "next/image";
import aboutImg from "@/assets/images/about/aboutus.png";
import TitleSection from "@/components/titleSection";
import { Card } from "@/components/shared/card";
import { Text1620, Text18 } from "@/components/shared/Text";

const HeroAbout = () => {
  return (
    <>
      <Card className="bg4">
        <Container>
          <div className="flex flex-col items-center justify-center lg:w-3/4 mx-auto text-center">
            <CustomButton className={"mb-6 w-36"} bg="secondory">
              About us
            </CustomButton>
            <h1 className="text-[32px] lg:text-[80px] font-semibold leading-10 lg:leading-[88px] mb-8">
              Humble beginnings, <br />
              <span className="text-turnary-800">An inspiring story.</span>
            </h1>
            <Text18 className="mb-12">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore Lorem ipsum dolor sit amet,
              consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
              labore
            </Text18>

            <CustomButton className="w-56" >
              Up to 20% off
            </CustomButton>
          </div>
        </Container>
      </Card>
      <Card >
        <Container>
          <div className="flex flex-wrap items-center">
            <div className="w-full lg:w-1/2">
              <Image src={aboutImg} alt="hero-image" className="w-full" />
            </div>
            <div className="lg:w-1/2 border-solid border-2 border-[#D1D5DB] bg-[#f9fafb] border-t-0 lg:border-t-2 lg:border-l-0 p-4 pt-8 lg:p-8  lg:py-20 rounded-b-3xl lg:rounded-l-none lg:rounded-r-3xl">
              <TitleSection black={'About '} blue={'us'} />
              <Text1620 className="mb-4">
                We started our journey in 2018 driven by a strong sense of
                purpose & very important question in our minds – How can we make
                quality healthcare accessible to each and every person across
                our diverse country.
              </Text1620>
              <CustomButton className="w-56 xs:w-full sm:w-full">
                Get in Touch
              </CustomButton>
            </div>
          </div>
        </Container>
      </Card>
    </>
  );
};

export default HeroAbout;
