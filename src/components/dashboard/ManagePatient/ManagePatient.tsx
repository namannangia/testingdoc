import React from "react"
import Image from "next/image"
import Edit from "@/assets/svg/edit.svg"

export const ManagePatientTable = () => {
    return (
        <div className="border border-gray-200 rounded-2xl" >
             <div className="w-[430px] flex justify-between py-[18px] px-6 md:w-full sm:w-full xs:w-full">
                    <h3 className="text-lg text-gray-800 font-semibold">Ramesh Patel</h3>
                    <Image src={Edit} alt="edit-icon" />
                </div>
            <table className="md:w-full sm:w-full xs:w-full">
                <tbody>
                    <tr className="w-[430px] h-[56px] border-t">
                        <th className="text-[#374151] text-base font-semibold py-4 px-6 text-start w-[215px] border-b border-r xs:p-4">Phone No.</th>
                        <td className="text-gray-500 text-base font-normal py-2 px-4 w-[215px] border-b xs:p-4">90909 00009</td>
                    </tr>
                    <tr className="w-[430px] h-[56px]">
                        <th className="text-[#374151] text-base font-semibold py-4 px-6 text-start w-[215px] border-b border-r xs:p-4">Relation</th>
                        <td className="text-gray-500 text-base font-normal py-2 px-4 w-[215px] border-b xs:p-4">Self</td>
                    </tr>
                    <tr className="w-[430px] h-[56px]">
                        <th className="text-[#374151] text-base font-semibold py-4 px-6 text-start w-[215px] border-b border-r xs:p-4">Gender</th>
                        <td className="text-gray-500 text-base font-normal py-2 px-4 w-[215px] border-b xs:p-4">Male</td>
                    </tr>
                    <tr className="w-[430px] h-[56px]">
                        <th className="text-[#374151] text-base font-semibold py-4 px-6 text-start w-[215px] border-b border-r xs:p-4">DOB</th>
                        <td className="text-gray-500 text-base font-normal py-2 px-4 w-[215px] border-b xs:p-4">23-11-1995</td>
                    </tr>
                    <tr className="w-[430px] h-[56px]">
                        <th className="text-[#374151] text-base font-semibold py-4 px-6 text-start w-[215px] border-b border-r xs:p-4">Age</th>
                        <td className="text-gray-500 text-base font-normal py-2 px-4 w-[215px] border-b xs:p-4">28</td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}