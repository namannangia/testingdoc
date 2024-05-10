import Image from "next/image"
import UserImg from '@/assets/svg/jean-grey.svg'
import UploadIcon from '@/assets/svg/upload.svg'
import Radio from "@/components/shared/Radio"

export const PersonalInformation = () => {
    return (
        <div className="xl:w-[932px] border border-gray-200 rounded-2xl h-full md:w-auto sm:w-auto sm:mx-[30px] xs:mx-0">
            <h3 className="text-gray-800 text-xl border-b border-gray-200 font-semibold p-6">Personal Information</h3>
            <form className="flex flex-col gap-6 p-6">
                <div className="">
                    <span className="block mb-2 text-base font-medium text-gray-900 ml-0">Avatar</span>
                    <div className="flex gap-3 items-center w-[195px] border border-gray-200 rounded-xl font-semibold p-3">
                        <Image src={UserImg} alt="" />
                        <div className="flex items-center gap-2 border border-gray-200 rounded-lg py-2 px-4">
                            <Image src={UploadIcon} alt="upload-icon" width={18} height={18} />
                            <span className="text-primary-300 font-medium text-xs">Change</span>
                        </div>
                    </div>
                </div>
                <div className="grid grid-cols-2 gap-6 xs:grid-cols-1 sm:grid-cols-1">
                    <div className="">
                        <label
                            htmlFor="last_name"
                            className="block mb-2 text-base font-medium text-gray-900 ml-0"
                        >
                            First Name <span className="text-pink-800">*</span>
                        </label>
                        <input
                            type="text"
                            id="last_name"
                            className="bg-white border border-gray-300 text-gray-900 text-base rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  h-[52px]"
                            placeholder="Jerome"
                            required
                        />
                    </div>
                    <div className="">
                        <label
                            htmlFor="first_name"
                            className="block mb-2 text-base font-medium text-gray-900 ml-0"
                        >
                            Last Name<span className="text-pink-800">*</span>
                        </label>
                        <input
                            type=""
                            id="first_name"
                            className="bg-white border border-gray-300 text-gray-900 text-base rounded-lg focus:border-gray-300 block w-full p-2.5 h-[52px]"
                            placeholder="Jordan"
                            required
                        />
                    </div>
                </div>
                <div className="grid grid-cols-2 gap-6 xs:grid-cols-1 sm:grid-cols-1">
                    <div className="">
                        <label
                            htmlFor="last_name"
                            className="block mb-2 text-base font-medium text-gray-900 ml-0"
                        >
                            Email<span className="text-pink-800">*</span>
                        </label>
                        <input
                            type="string"
                            id="last_name"
                            className="bg-white border border-gray-300 text-gray-900 text-base rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  h-[52px]"
                            placeholder="xyz@gmail.com"
                            required
                        />
                    </div>
                    <div className="">
                        <label
                            htmlFor="first_name"
                            className="block mb-2 text-base font-medium text-gray-900 ml-0"
                        >
                            Mobile No.
                        </label>
                        <input
                            type=""
                            id="first_name"
                            className="bg-white border border-gray-300 text-gray-900 text-base rounded-lg focus:border-gray-300 block w-full p-2.5 h-[52px]"
                            placeholder="8349349344"
                            required
                        />
                    </div>
                </div>
                <div className="grid grid-cols-[repeat(3,_auto)] gap-6 md:grid-cols-[repeat(2,auto)] sm:grid-cols-[repeat(1,auto)] xs:grid-cols-[repeat(1,auto)]">
                    <div className="w-[305px] md:w-1/2 sm:w-auto xs:w-auto">
                        <label
                            htmlFor="last_name"
                            className="block mb-2 text-base font-medium text-gray-900 ml-0"
                        >
                            Date
                        </label>
                        <input
                            type="date"
                            id="last_name"
                            className="bg-white border border-gray-300 text-gray-900 text-base rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  h-[52px] xs:w-[100%]"
                            placeholder="Address"
                            required
                        />
                    </div>
                    <div className="w-[100px] md:w-1/2 xs:w-full">
                        <label
                            htmlFor="first_name"
                            className="block mb-2 text-base font-medium text-gray-900 ml-0"
                        >
                            Age<span className="text-pink-800">*</span>
                        </label>
                        <input
                            type=""
                            id="first_name"
                            className="bg-white border border-gray-300 text-gray-900 text-base rounded-lg focus:border-gray-300 block w-[100px] p-2.5 h-[52px] xs:w-[100%]"
                            placeholder="27"
                            required
                        />
                    </div>
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

            </form>
            <button
                type="submit"
                className="border-[1px] border-solid border-grey-200  bg-[#DFF3FB] rounded-2xl w-full flex gap-2 justify-center items-center p-4 text-base text-turnary-800 border-transparent font-medium cursor-pointer hover:opacity-80  rounded-t-none"
            >
                Save
            </button>
        </div>
    )
}