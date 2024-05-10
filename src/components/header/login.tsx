import { useState } from "react";
import google from "@/assets/images/google.png";
import Image from "next/image";
import Link from "next/link";
export const LoginForm = () => {
  const [selected, setSelected] = useState("");
  return (
    <div className="mt-[-2px] min-w-[550px] xs:min-w-[100%] sm:min-w-[100%]">
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
            className="bg-gray-50 border border-gray-300 text-gray-900 text-base rounded-lg focus:border-gray-300 block w-full p-2.5 h-14  "
            placeholder="Phone Number"
            required
          />
          <div className="w-28"></div>
        </div>
        <div className="flex flex-col gap-2">
          <button
            type="submit"
            className="text-white bg-primary-300 hover:bg-primary-300  font-medium rounded-full  w-full sm:w-auto px-5 py-2.5 text-center h-12 text-base"
          >
            Login with OTP
          </button>
          {/* <button
            type="submit"
            className="text-primary-300 bg-transparent border border-primary-300 hover:bg-transparent  font-medium rounded-full  w-full sm:w-auto px-5 py-2.5 text-center h-12 text-base"
          >
            Login with User Id and Password
          </button> */}
        </div>
      </form>
      <div className="flex items-center justify-center mt-4 flex-col gap-5">
        <button
          type="submit"
          className="flex items-center  gap-2 text-grey-950 bg-grey-deafult hover:bg-grey border border-grey-border  font-normal rounded-xl  w-48  px-5 py-2.5 text-center h-12 text-sm"
        >
          <Image src={google} alt="" width={24} height={24} />
          Log in with Google
        </button>
        <span className="text-grey-500 text-base font-normal">Don’t have an account? <Link href="#" className="text-base text-primary-300" >Sign up</Link></span>
      </div>
    </div>
  );
};
