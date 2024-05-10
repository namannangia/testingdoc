import DialogBox from "@/components/dialogbox";
import { Text14 } from "@/components/shared/Text";
import Image from "next/image";
import Link from "next/link";
import { BookingDetailContent } from "./BookingDetail";
import { useState } from "react";
import { useRouter } from "next/router";
export const MyBookingCard = ({
  title,
  name,
  date,
  test,
  className
}: IMyBookingCard) => {
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
    <div
      className={`border border-gray-200 rounded-2xl bg-white flex flex-col gap-4 mr-3 ${className}`}
    >
      <div className="flex flex-col gap-3">
        <div className="flex flex-col gap-2 p-4">
          <div className="flex justify-end">
            <span className="text-sm font-normal leading-6 text-turnary-800 bg-[#DFF3FB] border border-turnary-800 px-2 rounded-[69px]">{title}</span>
          </div>
          <div className="flex gap-2">
          <Text14 color={"text-[#374151] font-semibold"} >
              Patient Name :
            </Text14>
            <Text14>{name}</Text14>
          </div>
          <div className="flex gap-2">
          <Text14 color={"text-[#374151] font-semibold"} >
              Date :</Text14>
            <Text14>{date}</Text14>
          </div>
          <div className="flex gap-2">
          <Text14 color={"text-[#374151]"} className="font-semibold min-w-[45px] xs:min-w-[35px]" >
              Test :</Text14>
            <Text14>{test}</Text14>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-2 border-t border-gray-200">
        <button
          className="p-3 bg-secondory-400 text-primary-300 text-center text-base font-medium rounded-bl-2xl"
        >
          Book Again
        </button>
        <button
          className="p-3 bg-gray-50 text-gray-800 font-medium text-center rounded-br-2xl"
          onClick={openDialog}
        >
          View Details
        </button>
      </div>
      <DialogBox
        title={<div className="flex gap-6 py-6 px-8 sm:flex-col sm:gap-3 sm:p-0 xs:p-0 xs:flex-col xs:gap-2">
          <h3>Booking Details</h3>
          <div className="flex flex-wrap gap-1">
            <span className="flex items-center text-sm font-normal leading-6 text-turnary-800 bg-[#DFF3FB] border border-turnary-800 px-2 rounded-[69px]">ASDA09230238</span>
            <span className="flex items-center text-sm font-normal leading-6 text-primary-800 bg-[#FCE5EE] border border-primary-800 px-2 rounded-[69px]">Completed</span>
          </div>
        </div>}
        isOpen={isDialogOpen}
        onClose={closeDialog}
        className="modal-root"
      >
        <div className="booking-popup">
          <BookingDetailContent sellingPrice={0} purchasePrice={0} discount={""} />
        </div>
      </DialogBox>
    </div>

  );
};
