import HrLine from "@/components/shared/HrLine";
import Image from "next/image";
import DocImage from "@/assets/images/document-text.png"
import CheckUp from "@/assets/images/Checkup.png"

export const BookingDetailContent = ({
  purchasePrice,
  sellingPrice,
  discount,
}: IBookingDetail) => {

  return (
    <div className="mt-[-2px] xs:min-w-[100%] sm:min-w-[100%] md:w-[100%]">
      <div>
        <HrLine />
        <div className="py-6 px-8 sm:px-0 xs:px-0 xs:py-3">
          <div className="flex flex-col gap-3 xs:gap-[6px]">
            <h3 className="text-[#374151] text-lg font-semibold">Patient Name :<span className="text-lg font-normal text-gray-500"> Jayesh Patel</span></h3>
            <h3 className="text-[#374151] text-lg font-semibold">Phone No:<span className="text-lg font-normal text-gray-500"> 98980 00009</span></h3>
            <h3 className="text-[#374151] text-lg font-semibold">Email:<span className="text-lg font-normal text-gray-500"> 98980 00009</span></h3>
            <h3 className="text-[#374151] text-lg font-semibold">Date :<span className="text-lg font-normal text-gray-500"> 20-11-2023</span></h3>
            <h3 className="text-[#374151] text-lg font-semibold">Address: <span className="text-lg font-normal text-gray-500"> 24, Clitylight bunglows, New ring road, Surat-395007</span></h3>
          </div>
        </div>
        <div className="p-4 pb-6 xs:p-0 xs:pb-3 sm:p-0 sm:pb-3">
          <div className="flex gap-6 justify-between items-center w-full md:flex-wrap">
            <div className="flex gap-4 border border-gray-200 p-4 rounded-xl w-[475px] sm:w-fit sm:gap-2 xs:w-full">
              <div>
                <Image src={CheckUp} alt="ckeckbox-img" />
              </div>
              <div className="flex flex-col gap-1">
                <h3 className="text-gray-800 text-xl font-bold">Full Body Checkup</h3>
                <span className="text-lg text-[#374151] font-normal">Includes 67 parameters</span>
                <div className="flex gap-3 items-center">
                  <div className="flex gap-2 items-center flex-wrap">
                    <span className="text-xl text-gray-400 font-semibold line-through">
                      ₹{12000}
                    </span>
                    <span className="text-xl text-gray-950 font-semibold">
                      {5999}/-
                    </span>
                    <div className="text-lg font-semibold text-primary-800">
                      {50}% off
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="sm:w-full">
              <Image src={DocImage} alt="document-img" width={215} height={135} />
            </div>
          </div>
        </div>
        <HrLine />
        <div>
          <h3 className="text-gray-800 text-2xl font-semibold py-4 px-8 xs:px-0 sm:px-0">Price Summery</h3>
          <HrLine />
          <div className="flex flex-col gap-[10px] py-6 px-8 xs:px-0 sm:px-0">
            <div className="flex justify-between">
              <h5 className="text-[#374151] text-base font-normal">Total MRP</h5>
              <span className="text-[#374151] text-base font-medium">₹12000</span>
            </div>
            <div className="flex justify-between">
              <h5 className="text-[#374151] text-base font-normal">Discount</h5>
              <span className="text-primary-800 text-base font-medium">₹5999</span>
            </div>
            <div className="flex justify-between">
              <h5 className="text-[#374151] text-base font-normal">Collection Charges</h5>
              <span className="text-[#374151] text-base font-medium">₹100</span>
            </div>
          </div>
          <HrLine className={"w-full"} />
          <div className="flex justify-between items-center py-6 px-8 xs:px-0 xs:pb-0 sm:px-0">
            <h4 className="text-[#374151] text-xl font-medium ">Grand Total</h4>
            <span className="text-primary-800 text-xl font-semibold">₹6100</span>
          </div>
        </div>
      </div>
    </div>
  );
};
