import { Text14, Text16, Text18, Text24 } from "@/components/shared/Text";
import React, { useState } from "react";
import fileImg from "@/assets/images/icon/file-text.svg";
import Image from "next/image";
import { BorderBox } from "@/components/shared/card";
import CustomButton from "@/components/CustomButton";
import Input from "@/components/shared/Input";
import { SelectBox } from "@/components/shared/SelectBox";
import OTPInput from "@/components/shared/OtpInput";
import { CheckBox } from "@/components/shared/CheckBox";
import { baseURL, inquiryHome } from "@/components/ApiData/ApiFunctions";
import axios from "axios";

const EnquiryForm = () => {
  const [select, setSelect] = useState<any>();
  const option = [{ name: "A" }];
  const [otp, setOtp] = useState<number>();

  const submitHandler = (event: any) => {
    event.preventDefault();
    const patient_name = event.target.patient_name.value;
    const patient_email = event.target.patient_email.value;
    const mobile_number = event.target.mobile_number.value;
    const message = event.target.message.value;

    const data = {
      patient_name,
      patient_email,
      mobile_number,
      message,
    };

    //const [resData, setResData] = useState();

    axios.post(baseURL + inquiryHome, data).then((response: any) => {
      console.log(response);
      event.target.reset();
      //setResData(response);
      alert(response.data.msg);
    }).catch((error: any) => {
      console.log(error);
    })

  }

  return (
    <div className="border-[1px] border-solid p-4 lg:p-6 bg-grey-deafult rounded-3xl w-full">
      <BorderBox className="p-5 flex items-center gap-3 bg-white rounded-2xl justify-center mb-6">
        <Image src={fileImg} alt={""} />
        <Text24 color="text-[#030712] font-bold">Enquiry Form</Text24>
      </BorderBox>

      <form name="sendMessage" onSubmit={submitHandler}>
        <div className="flex flex-col gap-[10px]">
          <div>
            <label
              htmlFor="patient_name"
              className="block mb-1 text-base font-medium text-gray-800 ml-0"
            >
              Name
            </label>
            <input
              type="text"
              id="patient_name"
              name="patient_name"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-base rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  h-12"
              placeholder="Enter your name"
              required
            />
          </div>
          <div>
            <label
              htmlFor="mobile_number"
              className="block mb-1 text-base font-medium text-gray-800 ml-0"
            >
              Mobile No.
            </label>
            <input
              type="number"
              id="mobile_number"
              name="mobile_number"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-base rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  h-12"
              placeholder="Enter mobile number"
              required
            />
          </div>
          <div>
            <label
              htmlFor="patient_email"
              className="block mb-1 text-base font-medium text-gray-800 ml-0"
            >
              Email.
            </label>
            <input
              type="email"
              id="patient_email"
              name="patient_email"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-base rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  h-12"
              placeholder="Enter email id"
              required
            />
          </div>
          <div>
            <label
              htmlFor="message"
              className="block mb-1 text-base font-medium text-gray-800 ml-0"
            >
              Querry
            </label>
            <textarea
              id="message"
              name="message"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-base rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
              placeholder="Type a message..."
              required
              rows={2}
            />
          </div>
          <div>
            <button type="submit" className="TestDetailsSubmitBtn">Get a Call</button>
          </div>
        </div>
        {/* <div className="flex justify-between items-center mb-4">
          <Text18 className="font-[600]" color="text-[#1F2937]">Enter OTP</Text18>
          <div className="flex gap-2 items-center">
            <CheckBox />
            <Text14 color="text-[#1F2937]" className=" font-medium">Verified Number</Text14>
          </div>
        </div>
        <div className="mb-4">
          <OTPInput className="bg-transparent" numInputs={4} setOtp={setOtp} />
        </div> */}
      </form>

      {/* <Text18 className="font-semibold mb-6" color="text-[#4B5563]">Time Remainning :- 03 : 20s</Text18> */}


    </div>
  );
};

export default EnquiryForm;
