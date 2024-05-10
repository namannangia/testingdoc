import { baseURL, inquiryHome } from "@/components/ApiData/ApiFunctions";
import axios from "axios";
import { useState } from "react";

export const FormHeroSection = () => {
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
            placeholder="Message"
            required
            rows={1}
          />
        </div>
        <div>
          <button type="submit" className="HomeSubmitBtn">Get a Call</button>
        </div>
      </div>
    </form>

  );
};
