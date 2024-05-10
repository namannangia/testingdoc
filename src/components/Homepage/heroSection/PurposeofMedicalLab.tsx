import React from 'react'
import { FormHeroSection } from './form'
import CustomButton from '@/components/CustomButton'

const PurposeofMedicalLab = () => {
  return (
    <div className="flex justify-end  absolute top-0 z-10 xs:z-0 sm:z-0 left-0 right-3 items-center h-full sm:flex-col xs:flex-col xs:relative sm:relative xs:gap-5 sm:gap-5 sm:hidden">
    <div className="hidden w-[355px] bg-white rounded-xl p-6 xs:p-3 sm:p-3 xs:gap-3 sm:gap-3  flex-col gap-6 ">
      <div className="w-48 h-9 xs:h-7 sm:h-7 xs:w-[152px] sm:w-[152px] bg-secondory-400 sm:text-xs xs:text-xs text-base text-primary-300 font-medium border border-primary-300 rounded-lg flex items-center justify-center ">
        Purpose of Medical Lab
      </div>
      <div className="flex flex-col">
        <span className="text-4xl sm:text-2xl xs:text-2xl text-gray-800 font-semibold">
          Detailed{" "}
          <span className="lg:hidden xl:hidden text-4xl sm:text-2xl xs:text-2xl text-turnary-800 font-semibold">
            Diagnostic
          </span>
        </span>
        <span className=" sm:hidden xs:hidden md:hidden text-4xl sm:text-2xl xs:text-2xl text-turnary-800 font-semibold">
          Diagnostic
        </span>
        <span className="text-4xl text-gray-800 font-semibold sm:text-2xl xs:text-2xl">
          of your body
        </span>
      </div>
      <p className="text-base text-gray-800 font-normal sm:text-xs xs:text-xs">
        Experience a comprehensive and detailed diagnostic assessment of
        your body, to provide you with a thorough understanding of your
        overall health.
      </p>
    </div>
    <div className="w-[355px]  bg-white rounded-xl p-5  flex flex-col gap-2 ">
      <div className="flex flex-col gap-1">
        <div className="flex items-center">
          <span className="text-3xl xs:text-2xl sm:text-2xl text-gray-800 font-semibold">
            Looking for 
          </span>
          <span className="text-3xl xs:text-2xl sm:text-2xl text-turnary-800 font-semibold">
            &nbsp;a test ?
          </span>
        </div>
        <span className="text-base font-normal text-gray-500 xs:text-sm sm:text-sm">
          You can go for the test ahead of{" "}
        </span>
      </div>
      <div className="sm:hidden xs:hidden HomeInqFormMob">
        <FormHeroSection />
      </div>
      <>
        {/* <CustomButton className={""}  bg >Get a call</CustomButton> */}
      </>
    </div>
  </div>
  )
}

export default PurposeofMedicalLab
