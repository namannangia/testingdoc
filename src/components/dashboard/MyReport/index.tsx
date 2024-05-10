import Image from "next/image";
import Search from "@/assets/svg/search2.svg";
import { SelectBox } from "@/components/shared/SelectBox";
import { useState } from "react";
import ShareIcon from "@/assets/svg/share-icon.svg";
import UploadSquare from "@/assets/svg/upload-square.svg"

export const MyReport = () => {
    const [select, setSelect] = useState<any>();
    const option = [{ name: "Jenan Grey" },
    { name: "Jean Grey" }, { name: "Jean Grey" }];
    return (
        <div className="w-[932px] border border-gray-200 rounded-2xl h-full md:w-auto sm:w-auto xs:w-auto sm:mx-[30px]">
            <h3 className="text-gray-800 text-xl border-b border-gray-200 font-semibold p-6">My Reports</h3>
            <div className="">
                <div className="xs:h-full sm:h-full">
                    <div className="flex flex-col gap-6">
                        <div className="grid grid-cols-2 xs:flex sm:flex xs:flex-col sm:flex-col sm:gap-3 xs:gap-3 ">
                            <div className="sm:border sm:border-gray-200 sm:m-4 sm:rounded-2xl xs:border xs:border-gray-200 xs:m-4 xs:rounded-2xl">
                                <div className="flex flex-col gap-6 p-6">
                                    <div className="mb-4">
                                        <SelectBox
                                            label="Patient"
                                            palaceHolder="Patient"
                                            option={option}
                                            selected={select}
                                            setSelected={setSelect}
                                            className={' bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-black focus:border-black block w-full py-[14px] px-4 '}
                                            classNamePHolder={'text-red'}
                                        />
                                    </div>
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

                                </div>
                                <button className="border-[1px] border-solid border-grey-200  bg-[#DFF3FB] rounded-bl-2xl w-full flex gap-2 justify-center items-center p-4 text-base text-turnary-800 border-transparent font-medium cursor-pointer hover:opacity-80 sm:rounded-xl sm:rounded-t-none">
                                    Check report
                                </button>
                            </div>
                            <div className="flex flex-col items-center justify-center h-full w-full bg-white border-l border-gray-200 sm:border-[1px] sm:border-gray-200  xs:h-[450px] sm:h-[450px] sm:rounded-2xl sm:border-l-0 xs:rounded-2xl xs:border-l-0 sm:m-4 sm:w-auto xs:w-auto">
                                {/* <span>Enter Details to see your report</span> */}
                                <div className="flex flex-col items-center justify-between h-full w-full bg-white border-l border-gray-200  xs:h-[450px] sm:h-[450px] sm:rounded-2xl sm:border-l-0 xs:rounded-2xl xs:border-l-0">
                                    <div className="w-[100%] flex justify-end items-center p-3">
                                        <div className="border border-gray-200 p-3 rounded-[100%]">
                                            <Image src={ShareIcon} alt="share-icon" />
                                        </div>
                                    </div>

                                    <div className="w-[160px] h-[220px] flex justify-center items-center shadow-2xl">
                                        <div className="flex justify-center align-middle border border-transparent bg-[#E5E7EB] p-3 rounded-[100%]">
                                            <Image src={UploadSquare} alt="upload-icon" />
                                        </div>
                                    </div>
                                    <button className="border-[1px] bg-[#FCE5EE] rounded-br-2xl w-full flex gap-2 justify-center items-center p-4 text-base text-primary-800 border-transparent font-medium cursor-pointer hover:opacity-80 sm:rounded-2xl sm:rounded-t-none xs:rounded-2xl xs:rounded-t-none ">
                                        Download Report
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    )
}
