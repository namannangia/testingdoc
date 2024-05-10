import LeftTabGroup from "./TabGroup";
import Image from "next/image";
import userImg from '@/assets/svg/jean-grey.svg'

export const LeftTab = () => {
  return (
    <div className="sm:mx-[30px] xs:mx-0">
      <div className="w-64 border border-gray-200 rounded-2xl h-[24.40rem] md:w-full sm:w-full xs:w-full">
        <div className="flex gap-3 py-4 px-6">
          <div>
            <Image src={userImg} alt="user-img" />
          </div>
          <div>
            <h3 className="text-gray-800 text-xl font-semibold">Jean Grey</h3>
            <span className="text-gray-500 text-xs font-normal">View profile</span>
          </div>
        </div>
        <div>
          <LeftTabGroup />
        </div>
      </div>
    </div>
  );
};
