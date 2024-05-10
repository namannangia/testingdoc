import Dropdown from "@/assets/svg/dropdown.svg";
import Location from "@/assets/svg/location.svg";
import Call from "@/assets/svg/call.svg";
import Image from "next/image";
import { Container } from "../container";
import { SearchHeader } from "../shared/SearchInput";
import { Text12 } from "../shared/Text";
import Search from "@/assets/svg/search.svg";
import MyModal from "@/components/shared/MyModal";
import close from "@/assets/images/close-squre.svg"
import { useEffect, useState } from "react";
import { Text14, Text16, Text20, Text24, Text32 } from "@/components/shared/Text"
import axios from "axios";
import Link from "next/link";
import { allHealthPackages, baseURL } from "../ApiData/ApiFunctions";

export const FindHeader = ({ className, iconClassName }: ISearchInput) => {
  const [records, setRecords] = useState<any[]>([]);
  const [healthRisk, setHealthRisk] = useState<any[]>([]);

  useEffect(() => {
    axios.get(baseURL + allHealthPackages).then((res) => {
      setHealthRisk(res.data.data.testData);
      setRecords(res.data.data.testData);
    });
  }, []);

  const Filter = (e: any) => {
    setRecords(healthRisk.filter(f => f.meta_title.toLowerCase().includes(e.target.value)))
  }

  let [isOpen, setIsOpen] = useState(false)
  function openModal() {
    setIsOpen(true)
  }
  function closeModal() {
    setIsOpen(false)
  }
  return (
    <div className="bg-grey-deafult">
      {/* <div className="bg-secondory-400 lg:hidden">
        <Container>
          <div className="flex justify-end">
            <Text12>
              Call us:{" "}
              <a className="text-primary-300 " href="tel:9898740000">
                9898740000
              </a>
            </Text12>
          </div>
        </Container>
      </div> */}
      <Container>
        <div className="flex items-center justify-between w-full h-16 xs:flex-col-reverse sm:flex-col-reverse sm:px-0 xs:px-0 sm:py-2 xs:py-2 sm:gap-3 xs:gap-3 sm:h-full xs:h-full">
          {/* <SearchHeader /> */}
          <div className=" relative  text-gray-600 w-7/12 xs:w-full sm:w-full">
            <input
              onClick={openModal}
              className={`border border-primary-300 11border-gray-300 w-full bg-white h-10 px-5 pr-16 rounded-lg text-sm focus:outline-none ${className}`}
              name="search best health packeg"
              placeholder="search best health packege"
            />
            <Image src={Search} alt="" className={`absolute top-2 right-3 ${iconClassName}`} />
          </div>
          {/* <SearchHeader /> */}
          <div className="hidden lg:block">
            <div className="flex gap-5 xs:justify-end xs:w-full sm:justify-end sm:w-full">
              {/* <div className="text-base text-gray-500 font-medium">
                <a href="tel:9898740000">
                <Image
                    src={Call}
                    alt=""
                    width={16}
                    height={19}
                    className="mt-[-1.5px]"
                  />
                </a>
              </div> */}
              <div className="text-base text-primary-300 font-medium flex items-center gap-3">
                <div className="flex items-center gap-1">
                  <Image
                    src={Location}
                    alt=""
                    width={16}
                    height={19}
                    className="mt-[-1.5px]"
                  />
                  Surat
                </div>
                <Image src={Dropdown} alt="" width={14} height={7} />
              </div>
            </div>
          </div>
        </div>
        <MyModal isOpen={isOpen} closeModal={closeModal} className="py-6 px-5 max-w-2xl HomeModelPopup" >
          <>
            <div className="flex justify-between items-center mb-2">
              <div className=" relative  text-gray-600 w-11/12 xs:w-full sm:w-full">
                <input
                  onChange={Filter}
                  className={`border border-primary-300 11border-gray-300 w-full bg-white h-10 px-5 pr-16 rounded-lg text-sm focus:outline-none ${className}`}
                  name="search"
                  placeholder="search best health packege"
                />
                <Image src={Search} alt="" className={`absolute top-2 right-3 ${iconClassName}`} />
              </div>
              <Image src={close} onClick={closeModal} alt={""} className="cursor-pointer" />
            </div>
            <div className="HomeSearchResult">
              <ul>
                {records.map((item, id) => {
                  return (
                    <Link
                      href={{ pathname: "/test-details", query: { id: item._id } }}
                    >
                      <li key={id} className="HomeSearchResultList">
                        <strong>{item.meta_title}</strong>
                        <span>₹{item.mrp}</span>
                      </li>
                    </Link>
                  )
                })}
              </ul>
            </div>
          </>
        </MyModal>
      </Container>
    </div>
  );
};
