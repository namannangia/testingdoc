import { Card } from "@/components/shared/card";
import { Container } from "@/components/container";
import TitleSection from "@/components/titleSection";
import Image from "next/image";
import vision from "@/assets/images/about/vision.png";
import mission from "@/assets/images/about/mission.png";
import { Text1620 } from "@/components/shared/Text";

const VisionMission = () => {
  return (
    <Card className="">
      <Container>
        <div className="flex flex-wrap items-center">
          <div className="w-full lg:w-1/2">
            <Image src={vision} alt="hero-image" className="w-full" />
          </div>
          <div className="lg:w-1/2 border-solid border-2 border-[#D1D5DB] bg-[#f9fafb] border-t-0 lg:border-t-2 lg:border-l-0 p-4 pt-8 lg:p-8  lg:py-20 rounded-b-3xl lg:rounded-l-none lg:rounded-r-3xl">
            <TitleSection black={"Our "} blue={"Vision"} />
            <Text1620 className="mb-4">
              Our vision is to become a premier healthcare diagnostic service
              provider in our community, continuously striving to deliver the
              best in patient care, service excellence and world-class
              technology. We envision being a trusted medical diagnostic
              partner, impacting lives and empowering health.
            </Text1620>
          </div>
        </div>
      </Container>
      <Container>
        <div className="flex flex-wrap-reverse items-center pt-[50px] lg:pt-[100px]">
        <div className="lg:w-1/2 border-solid border-2 border-[#D1D5DB] bg-[#f9fafb] border-t-0 lg:border-t-2 lg:border-r-0 p-4 pt-8 lg:p-8  lg:py-20 rounded-b-3xl lg:rounded-r-none lg:rounded-l-3xl">
            <TitleSection black={"Our "} blue={"Mission"} />
            <Text1620 className="mb-4">
              To provide high-quality, timely and innovative healthcare
              diagnostic services with the utmost expertise, compassion and
              transparency. By providing quality and affordable diagnostic
              services, we strive to earn the trust of our patrons and ensure
              the advice and care they need.
            </Text1620>
          </div>
          <div className="w-full lg:w-1/2">
            <Image src={mission} alt="hero-image" className="w-full" />
          </div>
        </div>
      </Container>
    </Card>
  );
};

export default VisionMission;
