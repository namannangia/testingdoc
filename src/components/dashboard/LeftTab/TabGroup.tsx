import React, { useState } from "react";
import RightArrow from "@/assets/svg/rightArrow2.svg";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
const LeftTabGroup = () => {
  const [activeTab, setActiveTab] = useState(1);

  const handleTabClick = (tabNumber: any) => {
    setActiveTab(tabNumber);
    // Perform any other actions when a tab is clicked
  };
  const router = useRouter();
  console.log("router", router?.query?.tab);
  const TabData = [
    {
      name: "Personal Information",
      url: "personal-information",
    },
    {
      name: "My Bookings",
      url: "my-bookings",
    },
    {
      name: "My Report",
      url: "my-report",
    },
    {
      name: "Manage Address",
      url: "manage-address",
    },
    {
      name: "Manage Patients",
      url: "manage-patients",
    },
  ];

  return (
    <div className="flex w-full">
      <div className=" w-full">
        <div className="">
          <div>
            {TabData?.map((tb, index) => {
              return (
                <Link href={`dashboard?tab=${tb?.url}`}>
                  <button
                    className={`w-full py-[18px] px-6 bg-white border border-b-0 border-l-0 border-r-0 flex justify-between border-gray-200 font-medium ${
                      tb?.url === router?.query?.tab
                        ? "!bg-secondory-400 text-gray-800"
                        : "text-gray-800"
                    }  ${
                      index === TabData.length - 1 &&
                      "rounded-bl-2xl rounded-br-2xl"
                    }`}
                    onClick={() => handleTabClick(1)}
                  >
                    {tb?.name}
                    <Image src={RightArrow} alt="" width={24} height={24} />
                  </button>
                </Link>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default LeftTabGroup;
