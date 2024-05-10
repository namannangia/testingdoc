import { Accordion } from "@/components/shared/Accordion"
import HrLine from "@/components/shared/HrLine";
import Radio from "@/components/shared/Radio"
import { Tabs } from "@/components/shared/Tabs";
import { Text20, Text24, TextOldPrice } from "@/components/shared/Text";
import { BorderBox } from "@/components/shared/card";
import persent from "@/assets/images/persent-green.svg"
import close from "@/assets/images/close-squre.svg"
import addPlus from "@/assets/images/add-plus.svg"
import Image from "next/image";
import CustomButton from "@/components/CustomButton";
import Link from "next/link";

const TestOverview = () => {


  const accordionData = [
    {
      accordion: "Select method",
      data: [
        { title: "Sample Type", desc: "Lourem ipsum" },
        { title: "Sample Description", desc: "Lourem ipsum" },
        { title: "Method", desc: "Lourem ipsum" },
        { title: "Report Timing", desc: "2 Houres" },
        { title: "Number of Parameters", desc: "7" },
        { title: "Availability", desc: "Centre Name, Days,Time" },
        { title: "Speciality", desc: "Lourem ipsum" },
        { title: "Condition/Disease", desc: "Lourem ipsum" },
        { title: "Organ", desc: "Lourem ipsum" },
        { title: "Habit", desc: "Lourem ipsum" },
        { title: "Lifestyle", desc: "Lourem ipsum" },
        { title: "Available For", desc: "Gender + Age group" },
        { title: "Sample Report", desc: "Lourem ipsum" },
      ],
    },
  ];

  return (
    <>
      {/* 1. Select method */}
      <div className="border-[1px] border-solid bottom-1 rounded-2xl mb-6">
        <Accordion
          className="w-full  "
          classNameHead="flex w-full items-center justify-between bg-[#F9FAFB] px-6 py-2 border-b-[1px] border-solid text-left rounded-t-xl font-[600] text-2xl"
          classNameBody="text-sm"
          title={'Select method'}
        >
          <div className="flex items-center me-4 p-6">
            <Radio id={"CentreVisit"} name={"select-method"} label={"Centre Visit"} />
            <Radio id={"HomeCollection"} name={"select-method"} label={"Home Collection"} />
          </div>
        </Accordion>
      </div>
      {/* 2. Select Date & Time */}
      <div className="border-[1px] border-solid bottom-1 rounded-2xl mb-6">
        <Accordion
          className="w-full  "
          classNameHead="flex w-full items-center justify-between bg-[#F9FAFB] px-6 py-2 border-b-[1px] border-solid text-left rounded-t-xl font-[600] text-xl lg:text-2xl"
          classNameBody="text-sm "
          title={'Select Date & Time'}
        >
          <div className="p-4 lg:p-6">
            <Text20 color="text-grey-800" className="mb-6 font-bold">Date :</Text20>
            <div >
              <Tabs
                className="grid-cols-2 sm:grid-cols-3 md:grid-cols-4 grid lg:grid-cols-4 xl:grid-cols-5 gap-4 "
                tabList={[{ name: "29-11-23" }, { name: "30-11-23" }, { name: "1-12-23" }, { name: "2-12-23" }, { name: "3-12-23" }]}
              />
            </div>
          </div>
          <HrLine />
          <div className="p-4 lg:p-6">
            <Text20 color="text-grey-800" className="mb-6 font-bold">Time (Optional) :</Text20>
            <div >
              <Tabs
                className="grid-cols-2 sm:grid-cols-3 md:grid-cols-4 grid lg:grid-cols-4 xl:grid-cols-5 gap-4 "
                tabList={[{ name: "9:00 AM" }, { name: "10:00 AM" }, { name: "11:00 AM" }, { name: "12:00 PM" }, { name: "1:00 PM" }, { name: "2:00 PM" }, { name: "3:00 PM" }, { name: "4:00 PM" }, { name: "5:00 PM" },]}
              />
            </div>
          </div>
        </Accordion>
      </div>

      {/* 3. Full Body Checkup */}
      <BorderBox className="p-4 lg:p-6 rounded-2xl mb-6">
        <div className="flex items-start  justify-between mb-3">
          <BorderBox className="p-[6px] px-3 rounded-2xl text-base text-[#1A8952] border-[#1A8952] bg-[#EBFAF2] w-fit flex gap-2 ">
            <Image src={persent} alt={""} className="w-6" /> Limited time offer
          </BorderBox>
          <Image src={close} alt={""} className="w-6" />
        </div>
        <Text24 color="text-grey-800" className="mb-4 font-bold">Full Body Checkup</Text24>
        <Text20 color="text-[#374151]" className="mb-6">Includes 67 parameters</Text20>
        <div className="flex items-center gap-4">
          <TextOldPrice>12000</TextOldPrice>
          <Text24 color="text-grey-800" className="font-bold">5999/-</Text24>
          <Text20 color="text-pink-800" className="font-bold">50% off</Text20>
        </div>
      </BorderBox>

      <Link href={'/book-test'}><CustomButton btn={"skylight"}>Add More Test / Packages</CustomButton></Link>
    </>
  )
}

export default TestOverview