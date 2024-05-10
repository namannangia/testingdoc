import { SelectBox } from "@/components/shared/SelectBox";
import { useState } from "react";
import Image from "next/image";
import Watch from "@/assets/svg/watch.svg"
export const AddAddress = ({

}: IAddressPOpupCard) => {
    const [select, setSelect] = useState<any>();
    const [select1, setSelect1] = useState<any>();
    const option = [{ name: "Surat" },{name: "Vapi"},{name:"Ahmedabad"}];
    const option1 = [{ name: "Home"},{name:"Apartment"} ,{name:"Flat"}]
    return (
        <div className="mt-[-2px] xl:w-[602px] xs:min-w-[100%] sm:min-w-[100%] md:w-[100%]">
            <form className="flex flex-col gap-5 p-6">
                <div className="grid grid-cols-1 gap-4 ">
                    <div className="">
                        <label
                            htmlFor="last_name"
                            className="block mb-2 text-base font-medium text-gray-900 ml-0"
                        >
                            Address
                        </label>
                        <input
                            type="text"
                            id="last_name"
                            className="bg-white border border-gray-300 text-gray-900 text-base rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  h-[52px]"
                            placeholder="Address"
                            required
                        />
                    </div>
                </div>
                <div className="grid grid-cols-2 gap-4 xs:grid-cols-1 sm:grid-cols-1">
                    <div className="mb-4">
                        <SelectBox
                            label="Select City"
                            palaceHolder="Surat"
                            option={option}
                            selected={select}
                            setSelected={setSelect}
                            className={' bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-black focus:border-black block w-full py-[14px] px-4 '}
                            classNamePHolder={'text-red'}
                        />
                    </div>
                    <div className="mb-4">
                        <SelectBox
                            label="Address Type"
                            palaceHolder="Home/Apartment"
                            option={option1}
                            selected={select1}
                            setSelected={setSelect1}
                            className={' bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-black focus:border-black block w-full py-[14px] px-4 '}
                            classNamePHolder={'text-red'}
                        />
                    </div>
                </div>
                <div className="grid grid-cols-2 gap-4 xs:grid-cols-1 sm:grid-cols-1">
                    <div className="">
                        <label
                            htmlFor="last_name"
                            className="block mb-2 text-base font-medium text-gray-900 ml-0"
                        >
                            Near by Locality
                        </label>
                        <input
                            type="text"
                            id="last_name"
                            className="bg-white border border-gray-300 text-gray-900 text-base rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  h-[52px]"
                            placeholder="Enter Address"

                        />
                    </div>
                    <div className="">
                        <label
                            htmlFor="last_name"
                            className="block mb-2 text-base font-medium text-gray-900 ml-0"
                        >
                            Pincode
                        </label>
                        <input
                            type="text"
                            id="last_name"
                            className="bg-white border border-gray-300 text-gray-900 text-base rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  h-[52px]"
                            placeholder="000000"
                        />
                    </div>
                </div>
                <div className="grid grid-cols-2 gap-4 xs:grid-cols-1 sm:grid-cols-1">
                    <div className="">
                        <label
                            htmlFor="last_name"
                            className="block mb-2 text-base font-medium text-gray-900 ml-0"
                        >
                            Date
                        </label>
                        <input
                            type="date"
                            id="last_name"
                            className="bg-white border border-gray-300 text-gray-900 text-base rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  h-[52px]"
                            placeholder="30/11/1995"
                            required
                        />
                    </div>
                    <div className="">
                        <label
                            htmlFor="first_name"
                            className="block mb-2 text-base font-medium text-gray-900 ml-0"
                        >
                            Time
                        </label>
                        <div className="relative">
                            <input
                                type=""
                                id="first_name"
                                className="bg-white border border-gray-300 text-gray-900 text-base rounded-lg focus:border-gray-300 block w-full p-2.5 h-[52px]"
                                placeholder="30/11/1995"
                                required
                            />
                        <Image src={Watch} alt="watch-icon" className="absolute top-3 right-2 " />
                        </div>
                    </div>
                </div>
            </form>
            <button
                type="submit"
                className="text-primary-800 bg-[#FCE5EE] hover:bg-primary-300 hover:text-white  font-medium rounded-full  w-full sm:w-auto px-5 py-2.5 text-center h-12 text-base mt-3"
            >
                Save
            </button>
        </div>
    );
};
