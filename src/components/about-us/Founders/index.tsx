import { Card } from "@/components/shared/card";
import { Container } from "@/components/container";
import TitleSection from "@/components/titleSection";
import Image from "next/image";
import React from "react";
import Jacob from "@/assets/images/about/founder/Jacob.png";
import John from "@/assets/images/about/founder/John.png";
import jean from "@/assets/images/about/founder/jean.png";
import linkedin from "@/assets/images/social/linkedin.svg";
import insta from "@/assets/images/social/insta.svg";
import twitter from "@/assets/images/social/twitter.svg";
import { Text14, Text16 } from "@/components/shared/Text";

const Founders = () => {
  const data = [
    {
      name: "Jacob Alexander",
      image: Jacob,
      position: "Founder Chairman",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor ",
      social: [insta, twitter, linkedin],
    },
    {
      name: "Jean Grey",
      image: jean,
      position: "Founder Chairman",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor ",
      social: [insta, twitter, linkedin],
    },
    {
      name: "John Fisher",
      image: John,
      position: "Founder Chairman",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor ",
      social: [insta, twitter, linkedin],
    },
  ];
  return (
    <Card className="">
      <Container>
        <div className="lg:mx-20">
          <div className="text-center mb-8">
            <TitleSection black={"Our "} blue={"Founders"} />
            <Text16>
              Lorem ipsum dolor sit amet consectetur. Nisl in pre nisl mauris
              quis euismod congue. Augue elit id morbi semper sed in. Lorem
              ipsum dolor sit amet consectetur. Nisl in pre nisl mauris quis
              euismod congue. Augue elit id morbi semper sed in.
            </Text16>
          </div>
          <div className="sm:gap-3 gap-7 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 ">
            {data.map((item, key) => (
              <div className=" bg-[#e5e7eb41] w-full flex flex-col justify-center items-center border-2 border-solid border-[#E5E7EB] rounded-3xl ">
                <div className="p-[6px] pb-0">
                  <Image key={key} src={item.image} alt={""} />
                </div>
                <div className="p-7">
                  <p className="text-sm leading-6 font-normal text-grey-600">
                    {item.position}
                  </p>
                  <h6 className="text-[32px] font-bold leading-10 text-grey-950 mb-5">
                    {item.name}
                  </h6>
                  <Text14 className="mb-5">{item.desc}</Text14>

                  <div className="flex gap-3">
                    {item.social.map((s, key) => (
                      <Image key={key} src={s} alt={s} />
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </Card>
  );
};

export default Founders;
