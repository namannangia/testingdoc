import { Container } from "@/components/container";
import Image from "next/image";
import Search from "@/assets/svg/search2.svg";
export const ReportSearch = () => {
  return (
    <div className="pt-6 pb-6">
      <Container>
        <div className="h-[408px] bg-gray-50 border border-gray-200 rounded-3xl p-6 xs:h-full sm:h-full">
          <div className="flex flex-col gap-6">
            <span className="text-xl font-extrabold text-gray-800">
              Search your report
            </span>
            <div className="grid grid-cols-2 gap-6 xs:flex sm:flex xs:flex-col sm:flex-col">
              <div className="flex flex-col gap-6">
                <div>
                  <label
                    htmlFor="Mobile_No"
                    className="block mb-1 text-base font-medium text-gray-800 ml-0"
                  >
                    UHID/Lab ID<span className="text-pink-800">*</span>
                  </label>
                  <div className="relative  text-gray-600 ">
                    <input
                      type="text"
                      id="Password"
                      className="bg-white border border-gray-200 text-gray-900 text-base rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  h-12"
                      placeholder="UHID/Lab ID"
                      required
                    />
                    <Image
                      src={Search}
                      alt=""
                      className="absolute top-3 right-3"
                    />
                  </div>
                </div>
                <div>
                  <label
                    htmlFor="Password"
                    className="block mb-1 text-base font-medium text-gray-800 ml-0"
                  >
                    Password<span className="text-pink-800">*</span>
                  </label>
                  <input
                    type="text"
                    id="Password"
                    className="bg-white border border-gray-200 text-gray-900 text-base rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  h-12"
                    placeholder="Password"
                    required
                  />
                </div>
                <div className="text-sm font-normal text-gray-700">
                  *Please enter UHID and Password as printed on the receipt
                </div>
                <button className="text-white mr-0 bg-primary-700 sm:hidden xs:hidden hover:bg-primary-800  font-medium rounded-full text-sm px-4 lg:px-5 py-2 lg:py-2.5  focus:outline-none w-full">
                  Check report
                </button>
              </div>
              <div className="flex items-center justify-center h-full w-full bg-white border border-gray-200 rounded-2xl xs:h-[356px] sm:h-[356px]">
                <span className="text-lg text-gray-500 font-normal">Enter Details to see your report</span>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};
