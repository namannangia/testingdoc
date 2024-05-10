import { Container } from "@/components/container";
import React from "react";
import Image from "next/image";
import Benefit from "@/assets/images/benefit.png";
import Benefit1 from "@/assets/images/benefit1.png";
import Benefit2 from "@/assets/images/benefit2.png";
import { BorderBox, Card64 } from "@/components/shared/card";
import { Text20 } from "@/components/shared/Text";
import TitleSection from "@/components/titleSection";

export const HealthBenefit = () => {
  const cardData = [
    { title: "Safe and sanitized home sample collection", image: Benefit },
    { title: "Hassle-free booking & timely reports", image: Benefit1 },
    { title: "Save tax up to Rs 5000 under Section 80D", image: Benefit2 },
  ];
  return (
    <Card64 className="bg-grey-200">
      <Container>
        <TitleSection black="Health with " blue="Benefits" className="mb-6" />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {cardData.map((db, key) => (
            <BorderBox className="rounded-2xl p-6 bg-white shadow-sm">
              <Image
                src={db.image}
                alt="benefit-img"
                className="w-full"
              />
              <Text20 color={"text-[#1F2937]"} className="font-semibold mt-[10px]">
                {db.title}
              </Text20>
            </BorderBox>
          ))}
        
        </div>
      </Container>
    </Card64>
  );
};
export default HealthBenefit;
