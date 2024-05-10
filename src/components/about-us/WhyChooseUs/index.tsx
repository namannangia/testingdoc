import { Card } from "@/components/shared/card";
import { Container } from "@/components/container";
import TitleSection from "@/components/titleSection";
import Image from "next/image";
import CertifiedCentre from "@/assets/images/about/why-choose-us/CertifiedCentre.svg";
import affordable from "@/assets/images/about/why-choose-us/affordable.svg";
import collection from "@/assets/images/about/why-choose-us/collection.svg";
import excellence from "@/assets/images/about/why-choose-us/excellence.svg";
import patients from "@/assets/images/about/why-choose-us/patients.svg";
import team from "@/assets/images/about/why-choose-us/team.svg";
import Technology from "@/assets/images/about/why-choose-us/technology1.svg";
import Tests from "@/assets/images/about/why-choose-us/Tests.svg";
import { Text18 } from "@/components/shared/Text";

const WhyChooseUs = () => {
  const data = [
    { title: "Team of Experienced", image: team },
    { title: "30 Years of Excellence ", image: excellence },
    { title: "10M+ Happy Patients", image: patients },
    { title: "World Class Technology", image: Technology },
    { title: "Affordable", image: affordable },
    { title: "Free Home Sample Collection", image: collection },
    { title: "NABL & NABH Certified Centre", image: CertifiedCentre },
    { title: "Large Menu of Tests Available ", image: Tests },
  ];
  return (
    <Card className="bg-why-choose bg-grey-deafult">
      <Container>
        <div className="text-center mb-7 lg:mb-11">
          <TitleSection className="xs:text-4xl" black={"Why "} blue={"Choose Us"} />
          <Text18>
            Lorem ipsum dolor sit amet consectetur. Nisl in pre nisl mauris quis
            euismod congue. Augue elit id morbi semper sed in.
          </Text18>
        </div>
        <div className=" xs:grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 lg:gap-8 grid lg:grid-cols-4 ">
          {data.map((item, key) => (
            <div className="text-center flex items-center flex-col w-full">
              <div className="relative -bottom-10">
                <Image key={key} src={item.image} alt={""} />
              </div>
              <div className="h-28 bg-white w-full flex justify-center items-center border-2 border-solid border-[#E5E7EB] rounded-3xl">
                <h6 className="text-base text-grey-500 font-medium mt-6">{item.title}</h6>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </Card>
  );
};

export default WhyChooseUs;
