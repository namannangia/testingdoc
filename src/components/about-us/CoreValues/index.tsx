import { Card } from "@/components/shared/card";
import { Container } from "@/components/container";
import TitleSection from "@/components/titleSection";
import Image from "next/image";
import React from "react";
import Customerfirst from "@/assets/images/about/corevalue/Customerfirst.svg";
import Efficiency from "@/assets/images/about/corevalue/Efficiency.svg";
import Integrity from "@/assets/images/about/corevalue/Integrity.svg";
import Respect from "@/assets/images/about/corevalue/Respect.svg";
import Safety from "@/assets/images/about/corevalue/Safety.svg";
import { Text16 } from "@/components/shared/Text";

const CoreValues = () => {
  const data = [
    { title: "Customer first", image: Customerfirst },
    { title: "Efficiency", image: Efficiency },
    { title: "Integrity", image: Integrity },
    { title: "Respect", image: Respect },
    { title: "Safety", image: Safety },
  ];
  return (
    <Card className="bg4">
      <Container>
        <div className="text-center mb-8 ">
          <TitleSection black={"Our core "} blue={"values"} />
          <Text16>
            Lorem ipsum dolor sit amet consectetur. Nisl in pre nisl mauris quis
            euismod congue. Augue elit id morbi semper sed in. Lorem ipsum dolor
            sit amet consectetur. Nisl in pre nisl mauris quis euismod congue.
            Augue elit id morbi semper sed in.
          </Text16>
        </div>
        <div className=" gap-5 grid-cols-1 sm:grid-cols-1 md:grid-cols-3 grid lg:grid-cols-5 ">
          {data.map((item, key) => (
            <div className=" bg-white w-full flex flex-col gap-4 justify-center items-center border-2 border-solid border-[#E5E7EB] rounded-3xl p-8">
              <Image key={key} src={item.image} alt={""} />
              <h6 className="text-base text-grey-950 font-medium">
                {item.title}
              </h6>
            </div>
          ))}
        </div>
      </Container>
    </Card>
  );
};

export default CoreValues;
