import Image from "next/image";
import arrow from "@/assets/svg/right-arrow.svg";
export const FrequentlyCard = ({ icon, title, subTitle }: IFrequentlyCard) => {
  return (
    <>
      <div className="hidden lg:block FreqBoxMain">
        <div className="flex justify-between items-center  p-2 border-gray-200 border rounded-lg">
          <div className="flex gap-5 items-center">
            <div className="bg-secondory-400 p-6 rounded FreqBoxImg">
              <img src={icon} alt="heart-icon"/>
            </div>
            <div className="flex flex-col gap-4 text-left">
              <h4 className="text-gray-950 text-2xl font-bold FreqBoxTitel">{title}</h4>
              <p className="text-gray-500 text-base font-medium">{subTitle}</p>
            </div>
          </div>
          <div className="arrow-border w-8 h-8">
            <Image src={arrow} alt="arrow-icon" width={25} height={24} />
          </div>
        </div>
      </div>

      {/* Mobile  */}
      <div className="lg:hidden FreqBoxMainMob">
        <div className="flex flex-col justify-between items-center  p-2 border-gray-200 border rounded-lg">
          <div className="flex flex-col gap-2 items-center mb-2">
            <div className="bg-secondory-400 p-4 rounded FreqBoxImgMob">
              <img src={icon} alt="heart-icon"/>
            </div>
            <div className="flex flex-col text-center">
              <h4 className="text-gray-950 text-base font-bold">{title}</h4>
              <p className="text-gray-500 text-xs font-medium">{subTitle}</p>
            </div>
          </div>
          <div className="arrow-border w-8 h-8">
            <Image src={arrow} alt="arrow-icon" width={25} height={24} />
          </div>
        </div>
      </div>
    </>
  );
};
