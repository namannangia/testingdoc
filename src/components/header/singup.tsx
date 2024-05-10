import { useState } from "react";
import ReactFlagsSelect from "react-flags-select";
export const SingupForm = () => {
  const [selected, setSelected] = useState("");
  console.log('select', setSelected)
  return (
    <div className="mt-[-2px] xs:min-w-[100%] sm:min-w-[100%]">
      <span className="block mb-2 text-base font-normal text-gray-400 ">
        Please enter your Mobile Number to proceed
      </span>
      <form className="flex flex-col gap-[14px]">
        <div className="relative">
          <label
            htmlFor="first_name"
            className="block mb-2 text-base font-medium text-gray-900 ml-0"
          >
            Phone Number
          </label>
          <input
            type="text"
            id="first_name"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-base rounded-lg focus:border-gray-300 block w-full p-2.5 h-14"
            placeholder="Phone Number"
            required
          />
          {/* <div className="w-28">
         <ReactFlagsSelect
            countries={["IN", "FR", "DE", "IT"]}
            selected={selected}
            onSelect={(code) => setSelected(code)}
            showOptionLabel={false}
            showSelectedLabel={false}
            placeholder="country"
            className="flg-select"
          />
         </div> */}
        </div>
        <div>
          <label
            htmlFor="last_name"
            className="block mb-2 text-base font-medium text-gray-900 ml-0"
          >
            Name
          </label>
          <input
            type="text"
            id="last_name"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-base rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  h-14"
            placeholder="Enter your Name"
            required
          />
        </div>
        <div>
          <label
            htmlFor="company"
            className="block mb-2 text-base font-medium text-gray-900 ml-0 "
          >
            Enter your Email
          </label>
          <input
            type="text"
            id="company"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-base rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  h-14"
            placeholder="Enter your Email"
            required
          />
        </div>
        <div>
          {/* <label
            htmlFor="phone"
            className="block mb-2 text-base font-medium text-gray-900 ml-0"
          >
            When are you planning to invest?
          </label>
          <input
            type="tel"
            id="phone"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-base rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  h-14"
            placeholder="Choose an option "
            required
          /> */}
          <div className="flex items-center me-4 mt-2">
            <input type="checkbox" id="myCheckbox" />
            <span className="text-base font-normal text-black">
              I accept the Terms
            </span>
          </div>
        </div>
        <div className="text-sm text-[#000000CC] flex flex-col gap-1">
          {/* <div>
            By Signing up, you confirm that you are above 18 years of age and
            that you are a citizen of India
          </div>
          <div>
            By Signing up, you agree to receive a call from Jiraaf on fixed
            income investment products
          </div> */}
          <div>
            By Signing up, you agree to the{" "}
            <b className="text-[#00ADE5]">Terms & Conditions</b> and{" "}
            <b className="text-[#00ADE5]">Privacy Policy</b>
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
