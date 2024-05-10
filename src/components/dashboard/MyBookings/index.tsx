import { Tabs } from "@/components/shared/Tabs";
import TabsWithContent from "@/components/shared/TabsWithContent";
import { Text20 } from "@/components/shared/Text";
import { BorderBox } from "@/components/shared/card";
import React, { useState } from "react";
import { MyBookingCard } from "./MyBooking";
import { SelectBox } from "@/components/shared/SelectBox";

export const MyBookings = () => {
  const [select, setSelect] = useState<any>();
  const option = [{ name: "Completed" },
  { name: "Processing" },
  { name: "Pending" },
  { name: "Cancelled" }
  ];
  const ArrayData = [1, 2, 3];

  console.log("select",select)
  return (
    <div className="border-[1px] border-solid bottom-1 rounded-2xl mb-6 w-full md:w-full sm:mx-[30px] xs:mx-0 sm:w-auto">
      <div className="flex items-center justify-between bg-[#F9FAFB] w-full  border-b-[1px] border-solid text-left rounded-t-xl xs:px-4 p-6">
        <Text20 color="text-[#1F2937]" className="xs:text-xl font-[600]">
          My Bookings
        </Text20>
      </div>
      {/* Body */}
      <div className="p-6">
        <div className="rounded-xl w-fit sm:w-full">
          <div className="hidden sm:block xs:block">
            <span className="text-base text-gray-800 font-medium">Booking Status</span>
            <div className="mb-4 mt-3">
              <SelectBox
                label=""
                palaceHolder="Completed"
                option={option}
                selected={select}
                setSelected={(e)=>setSelect(e.target)}
                className={' bg-gray-50 border border-gray-300 text-gray-900 text-base rounded-lg focus:ring-black focus:border-black block w-full py-[14px] px-4 '}
                classNamePHolder={'text-primary-800 font-medium text-base'}
                classNameOption="text-base text-red"
                classNameLi={`border-b-[1px] border-solid px-4 py-[14px] `}
              />
            </div>
          </div>
          <Tabs
            activeClass="!bg-primary-300 text-white font-[700] lg:text-base focus:outline-none"
            defaultClass="text-grey-800 border-0 lg:text-base"
            className={"sm:hidden xs:hidden border border-gray-200 p-[6px] rounded-xl w-fit"}
            tabList={[
              {
                name: "Completed", content: <div className="grid grid-cols-2 gap-6 pt-6 xs:grid-cols-1 sm:grid-cols-1 md:grid-cols-2">
                  {ArrayData?.map((sl: any) => {
                    return (
                      <MyBookingCard
                        title="ASDA09230238"
                        name={"Jayesh Patel"}
                        date={"20-11-2023"}
                        test={"Complete Blood Count (CBC), Kidney Function Test (KFT), Thyroid Profile"}
                        className="xs:mr-0 sm:mr-0 md:mr-0"
                      />
                    );
                  })}
                </div>
              },
              {
                name: "Processing", content: <div className="grid grid-cols-2 gap-6 pt-6 xs:grid-cols-1 sm:grid-cols-1 md:grid-cols-2">
                  {ArrayData?.map((sl: any) => {
                    return (
                      <MyBookingCard
                        title="ASDA09230238"
                        name={"Jayesh Patel"}
                        date={"20-11-2023"}
                        test={"Complete Blood Count (CBC), Kidney Function Test (KFT), Thyroid Profile"}
                        className="xs:mr-0 sm:mr-0 md:mr-0"
                      />
                    );
                  })}
                </div>
              },
              {
                name: "Pending", content: <div className="grid grid-cols-2 gap-6 pt-6 xs:grid-cols-1 sm:grid-cols-1 md:grid-cols-2">
                  {ArrayData?.map((sl: any) => {
                    return (
                      <MyBookingCard
                        title="ASDA09230238"
                        name={"Jayesh Patel"}
                        date={"20-11-2023"}
                        test={"Complete Blood Count (CBC), Kidney Function Test (KFT), Thyroid Profile"}
                        className="xs:mr-0 sm:mr-0 md:mr-0"
                      />
                    );
                  })}
                </div>
              },
              {
                name: "Cancelled", content: <div className="grid grid-cols-2 gap-6 pt-6 xs:grid-cols-1 sm:grid-cols-1 md:grid-cols-2">
                  {ArrayData?.map((sl: any) => {
                    return (
                      <MyBookingCard
                        title="ASDA09230238"
                        name={"Jayesh Patel"}
                        date={"20-11-2023"}
                        test={"Complete Blood Count (CBC), Kidney Function Test (KFT), Thyroid Profile"}
                        className="xs:mr-0 sm:mr-0 md:mr-0"
                      />
                    );
                  })}
                </div>
              },
            ]}
          />
        </div>

      </div>
      {/* <div className="grid grid-cols-2 gap-6 xs:grid-cols-1 sm:grid-cols-1 md:grid-cols-2 p-6">
        {ArrayData?.map((sl: any) => {
          return (
            <MyBookingCard
              title="ASDA09230238"
              name={"Jayesh Patel"}
              date={"20-11-2023"}
              test={"Complete Blood Count (CBC), Kidney Function Test (KFT), Thyroid Profile"}
              className="xs:mr-0 sm:mr-0 md:mr-0"
            />
          );
        })}
      </div> */}
    </div>
  );
};

export default MyBookings;
