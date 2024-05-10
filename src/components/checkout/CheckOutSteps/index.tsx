import CustomButton from "@/components/CustomButton";
import { Container } from "@/components/container";
import { Stepper } from "@/components/shared/Stepper";
import { useState } from "react";
import TestOverview from "../TestOverview";
import SelectAddress from "../SelectAddress";
import Payment from "../Payment";
import { Card64 } from "@/components/shared/card";
import { Text16, Text18, Text20, Text24 } from "@/components/shared/Text";
import HrLine from "@/components/shared/HrLine";
import Link from "next/link";

export const CheckoutSteps = () => {
  const [step, setStep] = useState<number>(0);

  const orderData = [
    { title: "Total MRP", amount: 12000 },
    { title: "Discount", amount: 5999 },
    { title: "Collection Charges", amount: 100 },
  ];

  console.log("step", step);
  const NextClick = () => {
    setStep(step + 1);
  };
  const MobileClick = () => {
    setStep(step + 1);
    window.scrollTo({
      top: 70,
      behavior: "smooth",
    });
  };
  return (
    <Card64>
      <Container className="mb-16 hidden md:block lg:block">
        <div className="w-full ">
          <Stepper activeStep={step + 1} completeStep={step} />
        </div>
      </Container>

      <Container>
        <div className="grid grid-cols-12 gap-6">
          {/* - */}
          <div className="col-span-12 lg:col-span-7 w-full">
            {step == 0 ? (
              <TestOverview />
            ) : step == 1 ? (
              <SelectAddress />
            ) : (
              <Payment />
            )}
          </div>
          {/* + */}
          {/* Order Summery */}
          <div className="col-span-12 lg:col-span-5 w-full">
            <div className="border-[1px] border-solid bottom-1 rounded-2xl mb-6">
              <div className="flex items-center justify-between bg-[#F9FAFB] w-full  border-b-[1px] border-solid text-left rounded-t-xl xs:px-4 p-6">
                <Text24
                  color="text-[#1F2937]"
                  className="xs:text-xl font-[600]"
                >
                  Order Summery
                </Text24>
              </div>
              {/* Body */}
              <div>
                <div className="p-4 lg:p-6">
                  {orderData.map((d, key) => (
                    <div className="flex justify-between items-center w-full mb-3 last:mb-0">
                      <Text16>{d.title}</Text16>
                      <Text18
                        color={
                          d.title == "Discount"
                            ? "text-primary-800"
                            : "text-[#374151]"
                        }
                        className="font-semibold"
                      >
                        ₹{d.amount}
                      </Text18>
                    </div>
                  ))}
                </div>
                <HrLine />
                <div className="xs:px-4 p-6 flex justify-between items-center w-full">
                  <Text20 color="text-[#374151]">Grand Total</Text20>
                  <Text20 color="text-[#374151]" className="font-semibold">
                    ₹6100
                  </Text20>
                </div>
              </div>
            </div>
            {step == 2 ? (
              <CustomButton href="/thankyou" className="w-full py-3 px-4 h-12 mb-3">
                Confirm
              </CustomButton>
            ) : (
              <>
                <CustomButton
                  className="w-full py-3 px-4 h-12 mb-3 sm:hidden md:hidden xs:hidden"
                  onClick={NextClick}
                >
                  Next
                </CustomButton>
                <CustomButton
                  className="w-full py-3 px-4 h-12 mb-3 xl:hidden lg:hidden 2xl:hidden 3xl:hidden"
                  onClick={MobileClick}
                >
                  Next
                </CustomButton>

                <CustomButton
                  href={"/book-test"}
                  bg="white"
                  className="w-full py-3 px-4 h-12  hover:bg-white hover:text-primary-300"
                >
                  Continue Shopping
                </CustomButton>
              </>
            )}
          </div>
        </div>
      </Container>
    </Card64>
  );
};
