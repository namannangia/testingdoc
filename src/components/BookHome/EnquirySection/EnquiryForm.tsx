import React, { useState } from "react";
import Image from "next/image";
import TextFile from "@/assets/svg/file-text.svg";
import OTPInput from "@/components/shared/OtpInput";

export const EnquiryFormBookHome = () => {
  const [otp, setOtp] = useState<number>();
  return (
    <div className="getintouch-form mt-[-2px] bg-gray-50 p-8 xs:p-4 sm:p-4 border border-gray-200 rounded-3xl xs:min-w-[100%] sm:min-w-[100%]">
      <div className=" bg-white flex justify-center align-middle mb-4 gap-3 border border-gray-200 py-8 px-6 rounded-2xl">
        <Image src={TextFile} alt="" />
        <span className="text-2xl font-bold text-gray-950 ">Enquiry Form </span>
      </div>
      <form className="flex flex-col gap-5">
        <div className="grid grid-cols-2 gap-4 xs:grid-cols-1 sm:grid-cols-1">
          <div className="">
            <label
              htmlFor="last_name"
              className="block mb-2 text-base font-medium text-gray-900 ml-0"
            >
              Patient Name
            </label>
            <input
              type="text"
              id="last_name"
              className="bg-white border border-gray-300 text-gray-900 text-base rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  h-[52px]"
              placeholder="Enter Patient Name"
              required
            />
          </div>
          <div className="">
            <label
              htmlFor="first_name"
              className="block mb-2 text-base font-medium text-gray-900 ml-0"
            >
              Mobile Number
            </label>
            <input
              type=""
              id="first_name"
              className="bg-white border border-gray-300 text-gray-900 text-base rounded-lg focus:border-gray-300 block w-full p-2.5 h-[52px]"
              placeholder="Enter Mobile Number"
              required
            />
          </div>
        </div>
        <div className="grid grid-cols-2 gap-4 xs:grid-cols-1 sm:grid-cols-1">
          <div className="">
            <label
              htmlFor="last_name"
              className="block mb-2 text-base font-medium text-gray-900 ml-0"
            >
              Gender
            </label>
            <input
              type="text"
              id="last_name"
              className="bg-white border border-gray-300 text-gray-900 text-base rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  h-[52px]"
              placeholder="Male"
              required
            />
          </div>
          <div className="">
            <label
              htmlFor="first_name"
              className="block mb-2 text-base font-medium text-gray-900 ml-0"
            >
              Age
            </label>
            <input
              type=""
              id="first_name"
              className="bg-white border border-gray-300 text-gray-900 text-base rounded-lg focus:border-gray-300 block w-full p-2.5 h-[52px]"
              placeholder="22 Years"
              required
            />
          </div>
        </div>
        <div className="grid grid-cols-1 gap-4 ">
          <div className="">
            <label
              htmlFor="last_name"
              className="block mb-2 text-base font-medium text-gray-900 ml-0"
            >
              Address
            </label>
            <input
              type="text"
              id="last_name"
              className="bg-white border border-gray-300 text-gray-900 text-base rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  h-[52px]"
              placeholder="Address"
              required
            />
          </div>
        </div>
        <div className="grid grid-cols-2 gap-4 xs:grid-cols-1 sm:grid-cols-1">
          <div className="">
            <label
              htmlFor="last_name"
              className="block mb-2 text-base font-medium text-gray-900 ml-0"
            >
              Pincode
            </label>
            <input
              type="text"
              id="last_name"
              className="bg-white border border-gray-300 text-gray-900 text-base rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  h-[52px]"
              placeholder="363110"
              required
            />
          </div>
          <div className="">
            <label
              htmlFor="first_name"
              className="block mb-2 text-base font-medium text-gray-900 ml-0"
            >
              Location
            </label>
            <div className="relative">
              <input
                type=""
                id="first_name"
                className="bg-white border border-gray-300 pl-10 text-gray-900 text-base rounded-lg focus:border-gray-300 block w-full p-2.5 h-[52px]"
                placeholder="Current location"
                required
              />
              <div className="absolute top-3 left-2 border-[7px] border-secondory-400 rounded-full w-2 h-2 flex p-[7px] bg-primary-300  items-center"></div>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-1 gap-4">
          <div className="">
            <label
              htmlFor="last_name"
              className="block mb-2 text-base font-medium text-gray-900 ml-0"
            >
              Date
            </label>
            <input
              type="date"
              id="last_name"
              className="bg-white border border-gray-300 text-gray-900 text-base rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  h-[52px]"
              placeholder="Address"
              required
            />
          </div>
        </div>
        <div className="grid grid-cols-1 gap-4">
          <div className="">
            <label
              htmlFor="last_name"
              className="block mb-2 text-base font-medium text-gray-900 ml-0"
            >
              Enter OTP
            </label>
            <OTPInput numInputs={4} setOtp={setOtp} />
          </div>
          <div className="text-xs text-gray-800 font-normal">
            The OTP is sent to your registered mobile number
          </div>
        </div>
        <button
          type="submit"
          className="text-white bg-primary-300 hover:bg-primary-300  font-medium rounded-full  w-full sm:w-auto px-5 py-2.5 text-center h-12 text-base mt-3"
        >
          Submit
        </button>
      </form>
    </div>
  );
};
export default EnquiryFormBookHome;
