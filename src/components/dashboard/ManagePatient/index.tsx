import DialogBox from "@/components/dialogbox"
import { useState } from "react"
import { useRouter } from "next/router"
import Image from "next/image"
import addPlus from "@/assets/images/add-plus.svg"
import { AddPatient } from "./AddressPopup"
import { ManagePatientTable } from "./ManagePatient"

export const ManagePatien = () => {
    const [selected, setSelected] = useState("");
    console.log('select', setSelected)
    const [isDialogOpen, setIsDialogOpen] = useState(false);
    const [isOpen, setIsOpen] = useState(false);
    const location = useRouter();

    const toggleDrawer = () => {
        setIsOpen((prevState) => !prevState);
    };
    const openDialog = () => {
        setIsDialogOpen(true);
    };

    const closeDialog = () => {
        setIsDialogOpen(false);
    };
    return (
        <div className="xl:w-[932px] border border-gray-200 rounded-2xl h-full md:w-auto sm:w-auto sm:mx-[30px] xs:mx-0">
            <h3 className="text-gray-800 text-xl border-b border-gray-200 font-semibold p-6">Manage Patients</h3>
            <div className="flex gap-6 p-6 xs:flex-wrap sm:flex-wrap md:flex-wrap  ">
                <div className="xs:w-full sm:w-full md:w-[100%]">
                    <ManagePatientTable />
                </div>
                <div className="xs:w-full sm:w-full md:w-[100%]">
                    <ManagePatientTable />
                </div>
            </div>
            <button
                className="bg-[#DFF3FB] rounded-2xl w-full flex gap-2 justify-center items-center p-4 text-base text-turnary-800 border-transparent font-medium cursor-pointer hover:opacity-80"
                onClick={openDialog}
            >
                Add Patient
                <Image src={addPlus} alt={""} width={24} />
            </button>
            <DialogBox
                title={"Patient Details"}
                isOpen={isDialogOpen}
                onClose={closeDialog}
                className="modal-root"
            >
                <div>
                    <AddPatient title={""} name={""} date={undefined} test={""} />
                </div>
            </DialogBox>
        </div>
    )
}