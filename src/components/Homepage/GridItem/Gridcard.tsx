import React from "react";
import { MdCollections } from "react-icons/md";

const Gridcard = ({ title, subTitle }: IGridCard) => {
  return (
    <div className="flex justify-center items-start   rounded-lg w-full">
      <div className="flex flex-col xs:gap-2 sm:gap-2 gap-5 items-center w-full">
        <div className="relative bg-secondory-400 p-6 rounded-[12px] h-[120px] w-full flex items-center justify-center w">
          <MdCollections className="h-[48px] w-[48px]" />
          <p className="text-[#00a0a8] w-[80%] text-center py-1 px-4 sm:px-1 xs:px-1 bg-[#EBFCFD] rounded-[30px] xs:text-xs text-sm font-medium absolute bottom-0">
            {subTitle}
          </p>
        </div>
        <div className="flex flex-col gap-4 text-left ">
          <h4 className="text-gray-950 xs:text-xs  text-lg text-center">{title}</h4>
        </div>
      </div>
    </div>
  );
};

export default Gridcard;
