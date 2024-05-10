import Image from "next/image";
import Search from "@/assets/svg/search.svg";
export const SearchHeader = ({ className, iconClassName }: ISearchInput) => {
  return (
    <div className=" relative  text-gray-600 w-7/12 xs:w-full sm:w-full">
      <input
        className={`border border-primary-300 11border-gray-300 w-full bg-white h-10 px-5 pr-16 rounded-lg text-sm focus:outline-none ${className}`}
        name="search"
        placeholder="Search"
      />
      <Image src={Search} alt="" className={`absolute top-2 right-3 ${iconClassName}`} />
    </div>
  );
};
