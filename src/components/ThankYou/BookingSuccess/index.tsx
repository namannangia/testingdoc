import React from "react";
import Image from "next/image";
import { Container } from "@/components/container";
import ThankYouImage from '@/assets/images/thankyou-img.png'
import CustomButton from "@/components/CustomButton";
import { Text32 } from "@/components/shared/Text";
import { Card } from "@/components/shared/card";


export const BookingSuccess = () => {
    return (
        <Container>
            <Card>
                <div className="flex flex-col justify-center text-center gap-6 border border-gray-200 rounded-3xl py-16 sm:py-7 xs:py-7 ">
                    <div className="flex justify-center text-center">
                        <Image src={ThankYouImage} alt="thankyou-img" />
                    </div>
                    <div className="flex flex-col gap-2">
                        <Text32>Booking Successful! </Text32>
                        <span className="text-lg text-primary-800 font-semibold ">Check Your Mail</span>
                        <p className="text-[12px] text-gray-500 font-normal">If you didn’t, receive any mail contact - info@company.com</p>
                        <div className="flex gap-3 justify-center xs:flex-wrap">
                            <CustomButton className="w-[163px] xl:text-base max-w-full h-12 sm:w-full xs:w-full" bg={""}>
                                Home
                            </CustomButton>
                            <CustomButton
                                className="w-[213px] max-w-full h-12 border border-primary-700 bg-white hover:bg-white xl:text-primary-700 md:text-primary-700 sm:text-primary-700 xs:text-primary-700 sm:w-full xs:w-full"
                                bg={""}
                            >
                                My Bookings
                            </CustomButton>
                        </div>
                    </div>
                </div>
            </Card>
        </Container>

    )
}

export default BookingSuccess