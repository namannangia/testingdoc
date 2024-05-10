import Image from "next/image";
import { Container } from "@/components/container";
import getImg from "@/assets/images/contactus/getintouch-img.png";
import { GetInTouchForm } from "@/components/ContactUs/GetInTouch/GetInTouchForm";
import FaceBook from "@/assets/svg/facebook.svg";
import Instagram from "@/assets/svg/instagram.svg";
import Twitter from "@/assets/svg/twitter.svg";

export const GetInTouch = () => {
  return (
    <Container>
      <div className="grid grid-cols-2 py-16 md:grid-cols-1 xs:grid-cols-1 sm:grid-cols-1 xs:gap-16 sm:gap-16">
        <div className="grid grid-cols-1 gap-10 xs:gap-7 sm:gap-7">
          <div>
            <Image
              src={getImg}
              alt="getintouch-image"
              className="w-[495px] h-[250px] md:w-full md:h-full"
            />
          </div>
          <div className="grid grid-cols-1 xl:w-[495px]">
            <span className="text-primary-300 font-normal">Get In Touch</span>
            <h2 className="text-gray-950 text-[40px] font-semibold sm:text-2xl xs:text-2xl">
              We Provide Best Services! Let’s Work Together
            </h2>
            <p className="text-gray-500 sm:text-sm xs:text-sm">
              Lorem ipsum dolor sit amet consectetur. Nisl in pre nisl mauris
              quis euismod congue. Augue elit id morbi semper sed in.{" "}
            </p>
          </div>
          <div className="w-[495px] h-[1px] bg-gray-200 sm:w-full"></div>
          <div className="flex gap-4">
            <div className="flex justify-center border border-gray-200 bg-gray-50  rounded-full w-8 h-8">
              <Image src={FaceBook} alt="facebook-image" />
            </div>
            <div className="flex justify-center border border-gray-200 bg-gray-50 rounded-full w-8 h-8">
              <Image src={Instagram} alt="instgram-image" />
            </div>
            <div className="flex justify-center border border-gray-200 bg-gray-50 rounded-full w-8 h-8">
              <Image src={Twitter} alt="twitter-image" />
            </div>
          </div>
        </div>
        <GetInTouchForm></GetInTouchForm>
      </div>
    </Container>
  );
};
export default GetInTouch;
