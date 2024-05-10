import React from "react";
import Image from "next/image";
import { Container } from "@/components/container";
import CallIcon from "@/assets/svg/call.svg";
import LocationIcon from "@/assets/svg/location1.svg";
import MailIcon from "@/assets/svg/mail-open-fill.svg";

export const ContactSection = () => {
  return (
    <Container>
      <div className="pb-10">
        <div className="grid grid-cols-3 xs:grid-cols-1 sm:grid-cols-1 md:grid-cols-2 text-center gap-5">
          <div className="flex flex-col gap-3 justify-center items-center border border-gray-200  p-8 rounded-xl">
            <div className="flex justify-center bg-secondory-400 w-[72px] h-[72px] rounded-full">
              <Image src={CallIcon} alt="call-icon" />
            </div>
            <a
              href="tel:9898740000"
              className="text-xl font-medium text-gray-500"
            >
              9898740000
            </a>
          </div>
          <div className="flex flex-col gap-3 justify-center items-center border border-gray-200  p-8 rounded-xl">
            <div className="flex justify-center bg-secondory-400 w-[72px] h-[72px] rounded-full">
              <Image src={LocationIcon} alt="location-icon" />
            </div>
            <a href="" className="text-xl font-medium text-gray-500">
              395007 Surat, India{" "}
            </a>
          </div>
          <div className="flex flex-col gap-3 justify-center items-center border border-gray-200  p-8 rounded-xl">
            <div className="flex justify-center bg-secondory-400 w-[72px] h-[72px] rounded-full">
              <Image src={MailIcon} alt="mail-icon" />
            </div>
            <a
              href="mailto:Info@Example.com"
              className="text-xl font-medium text-gray-500"
            >
              Info@Example.COm
            </a>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default ContactSection;
