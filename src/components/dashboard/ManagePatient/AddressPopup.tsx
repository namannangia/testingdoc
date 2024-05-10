import { SelectBox } from "@/components/shared/SelectBox";
import { useState } from "react";
import Image from "next/image";
import Watch from "@/assets/svg/watch.svg"
import Radio from "@/components/shared/Radio";
export const AddPatient = ({

}: IAddPetientCard) => {
    const [select, setSelect] = useState<any>();
    const [select1, setSelect1] = useState<any>();
    const option = [{ name: "Hindu" }, { name: "Critian" }, { name: "Muslim" }];
    return (
        <div className="mt-[-2px] xl:w-[602px] xs:min-w-[100%] sm:min-w-[100%] md:w-[100%]">
            <form className="flex flex-col gap-5 p-6">
                <div className="grid grid-cols-2 gap-4 xs:grid-cols-1 sm:grid-cols-1">
                    <div className="">
                        <label
                            htmlFor="last_name"
                            className="block mb-2 text-base font-medium text-gray-900 ml-0"
                        >
                            First Name
                        </label>
                        <input
                            type="text"
                            id="last_name"
                            className="bg-white border border-gray-300 text-gray-900 text-base rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  h-[52px]"
                            placeholder="Enter First Name"
                            required
                        />
                    </div>
                    <div className="">
                        <label
                            htmlFor="first_name"
                            className="block mb-2 text-base font-medium text-gray-900 ml-0"
                        >
                            Last Name
                        </label>
                        <input
                            type=""
                            id="first_name"
                            className="bg-white border border-gray-300 text-gray-900 text-base rounded-lg focus:border-gray-300 block w-full p-2.5 h-[52px]"
                            placeholder="Enter Last Name"
                            required
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
                            htmlFor="last_name"
                            className="block mb-2 text-base font-medium text-gray-900 ml-0"
                        >
                            Age*
                        </label>
                        <input
                            type="text"
                            id="last_name"
                            className="bg-white border border-gray-300 text-gray-900 text-base rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  h-[52px]"
                            placeholder="27"
                        />
                    </div>
                </div>
                <div className="grid grid-cols-1 gap-4 xs:grid-cols-1 sm:grid-cols-1">
                    <div className="mb-4">
                        <SelectBox
                            label="Relation"
                            palaceHolder="Select Relation"
                            option={option}
                            selected={select}
                            setSelected={setSelect}
                            className={' bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-black focus:border-black block w-full py-[14px] px-4 '}
                            classNamePHolder={'text-red'}
                        />
                    </div>
                </div>
                <div className="grid grid-cols-1 gap-4 xs:grid-cols-1 sm:grid-cols-1">
                    <div className="">
                        <label
                            htmlFor="first_name"
                            className="block mb-2 text-base font-medium text-gray-900 ml-0"
                        >
                            Gender<span className="text-pink-800">*</span>
                        </label>
                        <div className="flex flex-row border border-gray-300 rounded-lg focus:border-gray-300 w-[430px] p-2.5 h-[52px] md:w-fit sm:w-[100%] xs:w-[100%]">
                            <Radio
                                id={"select-method1"}
                                name={"select-method"}
                                label={"Male"}
                                className="text-gray-900 text-base"
                            />
                            <Radio
                                id={"select-method2"}
                                name={"select-method"}
                                label={"Female"}
                                className="text-gray-900 text-base"
                            />
                            <Radio
                                id={"select-method3"}
                                name={"select-method"}
                                label={"Other"}
                                className="text-gray-900 text-base"
                            />
                        </div>
                    </div>
                </div>
            </form >
            <button
                type="submit"
                className="text-white bg-primary-300 hover:bg-primary-300  font-medium rounded-full  w-full sm:w-auto px-5 py-2.5 text-center h-12 text-base mt-3"
            >
                Save
            </button>
        </div >
    );
};
