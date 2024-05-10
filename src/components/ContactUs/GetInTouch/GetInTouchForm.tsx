import React from "react";

export const GetInTouchForm = () => {
  return (
    <div className="getintouch-form mt-[-2px] p-8 border border-gray-200 rounded-3xl xs:min-w-[100%] sm:min-w-[100%]">
      <span className="block mb-2 text-2xl font-semibold text-gray-950 ">
        Fill the form below{" "}
      </span>
      <form className="flex flex-col gap-[14px]">
        <div className="relative flex flex-row justify-between sm:flex-col sm:flex-wrap sm:gap-[14px] xs:flex-col  ">
          <div className="w-[45%] sm:w-full xs:w-full">
            <label
              htmlFor="last_name"
              className="block mb-2 text-base font-medium text-gray-900 ml-0"
            ></label>
            <input
              type="text"
              id="last_name"
              className="bg-white border-b border-gray-300 text-gray-900 text-base  focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  h-14"
              placeholder="First name"
              required
            />
          </div>
          <div className="w-[45%] sm:w-full xs:w-full">
            <label
              htmlFor="last_name"
              className="block mb-2 text-base font-medium text-gray-900 ml-0"
            ></label>
            <input
              type="text"
              id="last_name"
              className="bg-white border-b border-gray-300 text-gray-900 text-base  focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  h-14"
              placeholder="Last name"
              required
            />
          </div>
        </div>
        <div>
          <label
            htmlFor="first_name"
            className="block mb-2 text-base font-medium text-gray-900 ml-0"
          ></label>
          <input
            type="text"
            id="first_name"
            className="bg-white border-b border-gray-300 text-gray-900 text-base  focus:border-gray-300 block w-full p-2.5 h-14"
            placeholder="Phone Number"
            required
          />
        </div>
        <div>
          <label
            htmlFor="company"
            className="block mb-2 text-base font-medium text-gray-900 ml-0 "
          ></label>
          <input
            type="text"
            id="company"
            className="bg-white border-b border-gray-300 text-gray-900 text-base  focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  h-14"
            placeholder="Enter your email (Optional)"
            required
          />
        </div>
        <div>
          <label
            htmlFor="phone"
            className="block mb-2 text-base font-medium text-gray-900 ml-0"
          ></label>
          <textarea
            id="company"
            className="bg-white border-b border-gray-300 text-gray-900 text-base  focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 h-36"
            placeholder="Message"
            required
          />
        </div>
        <button
          type="submit"
          className="text-white bg-primary-300 hover:bg-primary-300  font-medium rounded-full  w-full sm:w-auto px-5 py-2.5 text-center h-12 text-base mt-3"
        >
          Send message
        </button>
        <p className="text-gray-500 text-sm text-center font-normal">
          By contacting us, you agree to Supreme labs & diagnostic{" "}
          <span className="font-semibold"> Terms and Conditions.</span>
        </p>
      </form>
    </div>
  );
};
export default GetInTouchForm;
