import Link from "next/link"
import close from "@/assets/images/close-squre.svg"
import upload from "@/assets/svg/upload.svg"
import Image from "next/image"
import { BorderBox } from "@/components/shared/card"
import Input from "@/components/shared/Input"
import CustomButton from "@/components/CustomButton"
import { SelectBox } from "@/components/shared/SelectBox"
import { useState } from "react"
import { Text14, Text16, Text20, Text24, Text32 } from "@/components/shared/Text"

interface isPrescription {
    closeModal?: any
}

const PrescriptionContent = ({ closeModal }: isPrescription) => {

    const [select, setSelect] = useState<any>();
    const option1 = [{ name: "Male" }, { name: "Female" }]

    return (
        <>
            {/* 1 */}
            <div className="flex justify-between items-center mb-2">
                <Text20 >Add Prescription</Text20>
                <Image src={close} onClick={closeModal} alt={""} className="cursor-pointer" />
            </div>
            {/* 2 */}
            <div className="grid grid-cols-12 gap-4 mb-7">
                <div className="col-span-12 lg:col-span-6 ">
                    <BorderBox className="p-5 rounded-xl h-full">
                        <Input label="Patient Name" placeholder="Patient Name" />
                        <div className="grid grid-cols-12 gap-4 ">
                            <div className="col-span-6 ">
                                <Input type="date" label="Date of birth" placeholder="dd/mm/yyyy" />
                            </div>
                            <div className="col-span-6 ">
                                <Input label="Age" placeholder="Enter Age" />
                            </div>
                        </div>
                        <SelectBox
                            label="Gender"
                            palaceHolder="Gender"
                            option={option1}
                            selected={select}
                            setSelected={setSelect}
                            className={' bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-black focus:border-black block w-full py-[14px] px-4 '}
                            classNamePHolder={'text-red'}
                        />
                    </BorderBox>
                </div>
                <div className="col-span-12 lg:col-span-6 ">
                    <BorderBox className="p-5 rounded-xl h-full">
                        <Text20 className="mb-2">Add Prescription</Text20>
                        <BorderBox className="p-5 rounded-md border-dashed border-2 h-36 mb-7 flex justify-center items-center bg-slate-100 cursor-pointer">
                            <div className="flex gap-2 flex-col justify-center items-center">
                                <Image src={upload} onClick={closeModal} alt={""} className="cursor-pointer" />
                                <Text14>.SVG, .PNG, .JPG, .WEBP</Text14>
                            </div>
                        </BorderBox>
                        <CustomButton className="w-ful text-base h-11">Submit</CustomButton>
                    </BorderBox>
                </div>
            </div>
            {/* 3 */}
            <div className=" ">
                <Text24 color="text-black" className="font-medium mb-2">PRESCRIPTION GUIDE</Text24>
                <Text16>Our reports will be available online for a period of 7 days from the date given on your report collection slip. After that you can collect the report from your nearest City Center Online reports cannot be accessed in following cases:</Text16>
            </div>
        </>
    )
}

export default PrescriptionContent