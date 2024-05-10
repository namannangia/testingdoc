import Image from "next/image";
export const ServiceCard = ({ image, title, discription }: Iservicecard) => {
  return (
    <div className="grediant-border  p-[1.5px] mr-3">
      <div className="h-full bg-white w-full p-6 inner-div flex flex-col gap-[30px]">
        <div className="flex justify-center">
          <img src={image} alt="" width={350} height={225} />
        </div>
        <div className="flex flex-col text-left gap-2">
          <span className="text-2xl font-bold">{title}</span>
          <span className="text-base font-normal text-gray-500 HomeServiceDis">
            {discription}
          </span>
        </div>
        <div className="flex justify-start">
          <button
            type="submit"
            className="servicesBtn text-white bg-primary-300 hover:bg-primary-300 font-medium rounded-full w-32 sm:w-auto text-center h-12 text-base"
          >
            Read More
          </button>
        </div>
      </div>
    </div>
  );
};
