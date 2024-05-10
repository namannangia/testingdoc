import CustomButton from "@/components/CustomButton";
import { Accordion } from "@/components/shared/Accordion";
import HrLine from "@/components/shared/HrLine";
import Input from "@/components/shared/Input";
import { Tabs } from "@/components/shared/Tabs";
import { Text16, Text24 } from "@/components/shared/Text";
import card from "@/assets/svg/card.svg";
import bank from "@/assets/svg/bank.svg";
import upi from "@/assets/svg/upi.svg";
import edit from "@/assets/svg/edit.svg";
import visa from "@/assets/svg/visa.svg";
import visaBlue from "@/assets/svg/visa-blue.svg";
import stripe from "@/assets/svg/stripe.svg";
import mastercard from "@/assets/svg/mastercard.svg";
import { BorderBox } from "@/components/shared/card";
import Radio from "@/components/shared/Radio";
import Image from "next/image";

const Payment = () => {
  const paymentMethod = [
    { name: "Card", image: card },
    { name: "UPI", image: upi },
    { name: "Bank", image: bank },
  ];

  const SavedCard = [];
  return (
    <div>
      <div className="border-[1px] border-solid bottom-1 rounded-2xl mb-6">
        <Accordion
          className="w-full  "
          classNameHead="flex w-full items-center justify-between bg-[#F9FAFB] px-6 py-2 border-b-[1px] border-solid text-left rounded-t-xl font-[600] text-2xl"
          classNameBody="text-sm"
          title={"Select Payment Method"}
        >
          <div className="p-6">
            <div className="flex justify-between items-center mb-3">
              <Text24 color="text-grey-800" className=" font-bold">
                Coupon
              </Text24>
              <Text16
                color="text-pink-800"
                className="underline cursor-pointer"
              >
                View All Coupons
              </Text16>
            </div>
            <div className="flex flex-wrap gap-2 lg:gap-6 w-full">
              <Input placeholder="Enter Promo Code" className="w-full h-11" classNameParent="w-full" />
              <CustomButton className="bg-turnary-800 text-white border-turnary-800 rounded-lg w-[120px] h-11">
                Apply
              </CustomButton>
            </div>
          </div>
          <HrLine />
          <div className="p-6">
            <Text24 color="text-grey-800" className="mb-6 font-bold">
              Payment method
            </Text24>
            <Tabs
              className="grid-cols-2 sm:grid-cols-3 md:grid-cols-3 grid lg:grid-cols-3 gap-4 "
              classNameBody="p-6 flex flex-col gap-3 justify-center items-center"
              tabListArray={paymentMethod}
              tabList={[]}
            />
          </div>
          <HrLine />
          <div className="p-6">
            <Text24 color="text-grey-800" className="mb-6 font-bold">
              Saved card
            </Text24>
            <div className="flex flex-wrap lg:grid lg:grid-cols-2 gap-6 w-full">
              <BorderBox className="h-[72px] py-3 px-4 rounded-xl flex gap-5 w-full">
                <Radio
                  id={"saved-card1"}
                  name={"saved-card"}
                  label={
                    <div className="flex items-center gap-3 cursor-pointer">
                      <Text16>*** 8304</Text16> <Image src={visa} alt="" />
                    </div>
                  }
                />
                <Image src={edit} alt="" className="ml-auto cursor-pointer" />
              </BorderBox>
              <BorderBox className="h-[72px] py-3 px-4 rounded-xl flex gap-5 w-full">
                <Radio
                  classNameLabel="w-full"
                  id={"saved-card2"}
                  name={"saved-card"}
                  label={
                    <div className="flex items-center gap-3 cursor-pointer ">
                      <Text16>*** 9089</Text16>{" "}
                      <Image src={mastercard} alt="" />
                    </div>
                  }
                />
                <Image src={edit} alt="" className="ml-auto cursor-pointer" />
              </BorderBox>
            </div>
          </div>
          <HrLine />
          <div className="p-6">
            <Text24 color="text-grey-800" className="mb-6 font-bold">
              Add card
            </Text24>

            <div className="mb-3">
              <Text16
                color="text-[#374151]"
                className="font-medium leading-6 mb-[6px]"
              >
                Card Number
              </Text16>
              <div className="bg-white border border-gray-300 text-grey-500 text-base rounded-lg focus:ring-blue-500 focus:border-blue-500 w-full focus:ring-0 grid grid-cols-12 gap-2">
                <Input
                  placeholder="1234 1234 1234 1234"
                  classNameParent="mb-0 col-span-9"
                  className="border-0 "
                />
                <div className="flex justify-end pr-4 gap-2 col-span-3 xs:hidden block">
                  {[mastercard, stripe, visaBlue].map((d, key) => (
                    <Image src={d} alt={d} key={key} width={32} />
                  ))}
                </div>
              </div>
            </div>

            <div className="mb-3">
              <div className=" grid grid-cols-12 xs:gap-3 gap-6">
                <Input
                  placeholder="MM/YY"
                  classNameParent="mb-0 col-span-6"
                  classNameLabel="lg:text-base text-[#374151]"
                  label="Expiry"
                />
               <Input
                  placeholder="CVC"
                  classNameParent="col-span-6"
                  classNameLabel="lg:text-base text-[#374151]"
                  label="CVC"
                />
              </div>
            </div>
          </div>
        </Accordion>
      </div>
    </div>
  );
};

export default Payment;
