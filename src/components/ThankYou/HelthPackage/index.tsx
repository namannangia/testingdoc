import React, { useState } from "react";
import { Container } from "@/components/container";
import TitleSection from "@/components/titleSection";
import CustomButton from "@/components/CustomButton";
import { HelthCard } from "@/components/Homepage/HelthPackage/HelthCard";

export const PopularHealthPackage = () => {
    const ArrayData = [1, 2, 3, 4];
    const [currentPage, setCurrentPage] = useState(1);
    const handlePageChange = (pageNumber: any) => {
        setCurrentPage(pageNumber);
    };
    return (
        <Container>
            <div className="flex flex-col gap-6 pb-16 md:pb-8 sm:pb-7 xs:pb-7 sm:mx-[30px] ">
                <div>
                    <TitleSection
                        black={"Popular Health "}
                        blue={"Packages"}
                        pink=""
                        className="xs:text-2xl sm:text-2xl"
                    />
                    <p className="text-base text-gray-500 font-normal">Don’t let your health take a back seat in today’s fast-paced world. Leave all your health worries to us. Book our health checkups and experience the most hassle-free testing!</p>
                </div>
                <div className="grid grid-cols-4 gap-6 xs:grid-cols-1 sm:grid-cols-1 md:grid-cols-2">
                    {ArrayData?.map((sl: any) => {
                        return (
                            <HelthCard
                                productId={5}
                                CatrgoryId=""
                                title="Test of the Lipid Profile"
                                description={""}
                                reportTime="16 hrs"
                                totalTest={5}
                                discount="15% off"
                                sellingPrice={299}
                                purchasePrice={349}
                                className="xs:mr-0 sm:mr-0 md:mr-0"
                            />
                        );
                    })}
                </div>
                <div className="flex justify-center">
                    <CustomButton className="w-[197px] xl:text-base max-w-full h-12 sm:w-full xs:w-full" bg={""}>
                        VIew more
                    </CustomButton>
                </div>
            </div>

        </Container>
    )
}

export default PopularHealthPackage