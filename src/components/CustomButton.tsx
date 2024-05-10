import React from "react";
import { BorderBox } from "./shared/card";
import Image from "next/image";
import addPlus from "@/assets/images/add-plus.svg"
import Link from "next/link";


const CustomButton = ({ className, children, onClick, bg, btn, href }: isCustomButton) => {

  console.log("href", href)
  return (
    <>
      {btn == "skylight" ?
        <BorderBox className={`bg-[#DFF3FB] rounded-2xl w-full flex gap-2 justify-center items-center p-4 text-base text-turnary-800 border-transparent font-medium cursor-pointer hover:bg-[#d7f0fa]  ` + className}>
          {children} <Image src={addPlus} alt={""} width={24} />
        </BorderBox>
        :
        btn == "skylight-auto" ?
          <BorderBox className={`bg-[#DFF3FB] rounded-full flex gap-2 justify-center items-center p-4 text-base text-black border-transparent font-medium cursor-pointer hover:bg-[#d7f0fa]  ` + className}>
            {children}
          </BorderBox>
          : 
            <Link
              className={`mr-0 ${bg == "secondory"
                ? "bg-secondory-400 text-primary-700 font-semibold xs:text-xl flex justify-center items-center"
                : bg == "white" ? "border-2 border-solid border-primary-700 text-primary-700 hover:bg-primary-800 hover:text-white xs:text-base flex justify-center items-center"
                  : "bg-primary-700 text-white hover:opacity-80 border-2 border-solid border-primary-700 xs:text-base flex justify-center items-center"
                } font-medium rounded-full text-sm px-4 lg:px-5 py-2 lg:py-2.5 focus:outline-none "
                  } ${className}`}
              href={href ? href : '#'}
              onClick={onClick}
            >
              {children}
            </Link>
      //       :

      //       <button
      //         className={`mr-0 ${bg == "secondory"
      //           ? "bg-secondory-400 text-primary-700 font-semibold xs:text-xl"
      //           : bg == "white" ? "border-2 border-solid border-primary-700 text-primary-700 hover:bg-primary-800 hover:text-white xs:text-base"
      //             : "bg-primary-700 text-white hover:opacity-80 border-2 border-solid border-primary-700 xs:text-base "
      //           } font-medium rounded-full text-sm px-4 lg:px-5 py-2 lg:py-2.5 focus:outline-none "
      // } ${className}`}
      //         onClick={onClick}
      //       >
      //         {children}
      //       </button>

      }
    </>
  );
};

export default CustomButton;
