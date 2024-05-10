import React from "react"
import Image from "next/image"
import Edit from "@/assets/svg/edit.svg"

export const ManageAddressTable = () => {
    return (
        <div className="border border-gray-200 rounded-2xl" >
             <div className="w-[430px] flex justify-between py-[18px] px-6 md:w-full sm:w-full xs:w-full">
                    <h3 className="text-lg text-gray-800 font-semibold">Address 1</h3>
                    <Image src={Edit} alt="edit-icon" />
                </div>
            <table className="md:w-full sm:w-full xs:w-full">
                <tbody>
                    <tr className="w-[430px] h-[56px] border-t">
                        <th className="text-[#374151] text-base font-semibold py-4 px-6 text-start w-[215px] border-b border-r xs:p-4">Pincode</th>
                        <td className="text-gray-500 text-base font-normal py-2 px-4 w-[215px] border-b xs:p-4">395007</td>
                    </tr>
                    <tr className="w-[430px] h-[56px]">
                        <th className="text-[#374151] text-base font-semibold py-4 px-6 text-start w-[215px] border-b border-r xs:p-4">Nearby Locality</th>
                        <td className="text-gray-500 text-base font-normal py-2 px-4 w-[215px] border-b xs:p-4">Citylight</td>
                    </tr>
                    <tr className="w-[430px] h-[56px]">
                        <th className="text-[#374151] text-base font-semibold py-4 px-6 text-start w-[215px] border-b border-r xs:p-4">State</th>
                        <td className="text-gray-500 text-base font-normal py-2 px-4 w-[215px] border-b xs:p-4">Gujarat</td>
                    </tr>
                    <tr className="w-[430px] h-[80px]">
                        <th className="text-[#374151] text-base font-semibold py-4 px-6 text-start w-[215px] border-b border-r xs:p-4">Address</th>
                        <td className="text-gray-500 text-base font-normal py-2 px-4 w-[215px] border-b xs:p-4">23, Rudra Bungalows, Rander road</td>
                    </tr>
                    <tr className="w-[430px] h-[56px]">
                        <th className="text-[#374151] text-base font-semibold py-4 px-6 text-start w-[215px] border-b border-r xs:p-4">City</th>
                        <td className="text-gray-500 text-base font-normal py-2 px-4 w-[215px] border-b xs:p-4">Surat</td>
                    </tr>
                    <tr className="w-[430px] h-[56px]">
                        <th className="text-[#374151] text-base font-semibold py-4 px-6 text-start w-[215px] border-r xs:p-4">Address Type</th>
                        <td className="text-gray-500 text-base font-normal py-4 px-6 w-[215px] xs:p-4">Home</td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}