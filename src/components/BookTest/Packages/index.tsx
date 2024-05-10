import { Container } from "@/components/container";
import { FilterHeader } from "./FilterHeader";
import { HelthCard } from "@/components/Homepage/HelthPackage/HelthCard";
import { useEffect, useState } from "react";
import { Pagination } from "@/components/shared/Pagination";
import { allHealthPackages, baseURL } from "@/components/ApiData/ApiFunctions";
import axios from "axios";
import { SelectBox } from "@/components/shared/SelectBox";
import { SearchHeader } from "@/components/shared/SearchInput";
import { Tabs } from "@/components/shared/Tabs";
import { OutlineButton } from "@/components/shared/Buttons/OutlineButton";
import UploadIcon from "@/assets/svg/upload.svg";
import { PopoverComponent } from "@/components/shared/popover";
import { TestFilter, TestMobileFilter } from "./Filter";
import MyModal from "@/components/shared/MyModal";
import PrescriptionContent from "../PrescriptionContent";
import Image from "next/image";
import Search from "@/assets/svg/search.svg";

export const Packages = ({ className, iconClassName }: ISearchInput) => {
  const [currentPage, setCurrentPage] = useState<any[number]>([]);
  const [records, setRecords] = useState<any[]>([]);
  const [healthRisk, setHealthRisk] = useState<any[]>([]);

  const handlePageChange = (pageNumber: any) => {
    setCurrentPage(pageNumber);
  };

  useEffect(() => {
    axios.get(baseURL + allHealthPackages).then((res) => {
      setHealthRisk(res.data.data.testData);
      setCurrentPage(res.data.data.pagination);
      setRecords(res.data.data.testData);
    });
  }, []);

  const Filter = (e: any) => {
    setRecords(healthRisk.filter((f) => f.meta_title.toLowerCase().includes(e.target.value)));
  };

  //category filter

  const [selectedFilters, setSelectedFilters] = useState<any[]>([]);
  const [filteredItems, setFilteredItems] = useState(healthRisk);

  let filters = ["65290e7851ed320900850604", "652912b951ed3209008516cb"];

  const handleFilterButtonClick = (selectedCategory: any) => {
    if (selectedFilters.includes(selectedCategory)) {
      let filters = selectedFilters.filter((el) => el !== selectedCategory);
      setSelectedFilters(filters);
    } else {
      setSelectedFilters([...selectedFilters, selectedCategory]);
    }
  };

  useEffect(() => {
    filterItems();
  }, [selectedFilters]);

  const filterItems = () => {
    if (selectedFilters.length > 0) {
      let tempItems = selectedFilters.map((selectedCategory) => {
        let temp = healthRisk.filter((healthRisk) => healthRisk.cat_id === selectedCategory);
        return temp;
      });
      setFilteredItems(tempItems.flat());
    } else {
      setFilteredItems([...records]);
    }
  };

  //category filter

  // const [currentPage, setCurrentPage] = useState(1);
  // const recordPerPage = 21;

  // const lastIndex = currentPage * recordPerPage;
  // const firstIndex = lastIndex - recordPerPage;
  // const records = healthRisk.slice(firstIndex, lastIndex);
  // const npage = Math.ceil(healthRisk.length / recordPerPage);
  // const numbers = [...Array(npage + 1).keys()].slice(1);

  const [select, setSelect] = useState<any>();
  const [select1, setSelect1] = useState<any>();
  const option = [{ name: "A" }];
  const option2 = [{ name: "High to Low" }, { name: "Low to High" }];

  let [isOpen, setIsOpen] = useState(false);

  function openModal() {
    setIsOpen(true);
  }
  function closeModal() {
    setIsOpen(false);
  }

  return (
    <Container>
      <div className="pt-16 md:py-6 flex flex-col gap-10 xs:gap-6 sm:gap-6 pb-16 xs:pt-6 sm:pt-6 xs:pb-6 sm:pb-6">
        <div className="flex gap-12 sm:gap-5 xs:gap-5 sm:flex xs:flex sm:flex-col xs:flex-col">
          <TestFilter />
          <div className="min-h-[1120px] rounded-2xl  w-[77%] sm:w-full xs:w-full flex flex-col gap-12">
            {/* <div>
              <FilterHeader />
            </div> */}
            {/* HeaderComponent */}
            <div className="flex flex-col gap-6">
              <div className="flex justify-between items-center xs:flex-col sm:flex-col sm:gap-6 xs:gap-6">
                <div className=" relative  text-gray-600 w-7/12 xs:w-full sm:w-full">
                  <input
                    className={`border border-primary-300 11border-gray-300 w-full bg-white h-10 px-5 pr-16 rounded-lg text-sm focus:outline-none ${className}`}
                    name="search"
                    placeholder="Search Best Health Packages"
                    onChange={Filter}
                    //style={{textTransform:'inherit'}}
                  />
                  <Image
                    src={Search}
                    alt=""
                    className={`absolute top-2 right-3 ${iconClassName}`}
                  />
                </div>
                <div className="lg:hidden xl:hidden 2xl:hidden md:hidden 3xl:hidden sm:w-full xs:w-full">
                  <Tabs tabList={[{ name: "All" }, { name: "Test" }, { name: "Packages" }]} />
                </div>
                <div className="flex items-center  gap-3 xs:hidden sm:hidden">
                  <span className="text-black text-base font-normal">Sort:</span>
                  <div className="flex gap-3">
                    <div className="w-28">
                      <SelectBox
                        palaceHolder="A-Z"
                        option={option}
                        selected={select}
                        setSelected={setSelect}
                      />
                    </div>
                    <div className="w-40">
                      <SelectBox
                        palaceHolder="High to Low"
                        option={option2}
                        selected={select1}
                        setSelected={setSelect1}
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex items-center justify-between sm:flex-col xs:flex-col sm:w-full xs:w-full sm:gap-6 xs:gap-6">
                <div className="flex items-center  gap-3 lg:hidden xl:hidden 2xl:hidden 3xl:hidden md:hidden">
                  <span className="text-black text-base font-normal">Sort:</span>
                  <div className="flex gap-3">
                    <div className="w-28">
                      <SelectBox
                        palaceHolder="A-Z"
                        option={option}
                        selected={select}
                        setSelected={setSelect}
                      />
                    </div>
                    <div className="w-40">
                      <SelectBox
                        palaceHolder="High to Low"
                        option={option2}
                        selected={select}
                        setSelected={setSelect}
                      />
                    </div>
                  </div>
                </div>
                <div className="xs:hidden sm:hidden ">
                  <Tabs tabList={[{ name: "All" }, { name: "Test" }, { name: "Packages" }]} />
                </div>
                <div className="sm:flex xs:flex sm:items-center xs:items-center sm:justify-between xs:justify-between xs:w-full sm:w-full">
                  <OutlineButton
                    onClick={openModal}
                    title="Upload Prescription"
                    icon={UploadIcon}
                  />
                  <MyModal isOpen={isOpen} closeModal={closeModal} className="py-6 px-5 max-w-5xl">
                    <PrescriptionContent closeModal={closeModal} />
                  </MyModal>
                  <PopoverComponent buttonTitle="Filters" popoverClass="as">
                    <TestMobileFilter />
                  </PopoverComponent>
                </div>
              </div>
            </div>
            {/* HeaderComponent */}
            <div className="flex flex-col gap-2">
              <span className="text-2xl font-semibold text-black">Health Packages</span>
              <div className="buttons-container">
                {filters.map((cat_id, idx) => (
                  <button
                    style={{ padding: 10, borderColor: "#ccc", borderWidth: 1 }}
                    onClick={() => handleFilterButtonClick(cat_id)}
                    className={`button ${selectedFilters?.includes(cat_id) ? "active" : ""}`}
                    key={`filters-${idx}`}
                  >
                    {cat_id}
                  </button>
                ))}
              </div>
              <span className="text-base font-normal text-gray-500">
                Don’t let your health take a back seat in today’s fast-paced world. Leave all your
                health worries to us. Book our health checkups and experience the most hassle-free
                testing!
              </span>
              {/* <input type="text" onChange={Filter} placeholder="Enter Text Here" style={{ background: '#ccc' }} /> */}
              {/* {records.map((item, id) => {
                return (
                  <p key={id}>{item.meta_title}</p>
                )
              })} */}
            </div>
            <div>
              <div className="grid grid-cols-3 gap-6 xs:grid-cols-1 sm:grid-cols-1 md:grid-cols-2">
                {filteredItems?.map((item: any) => {
                  return (
                    <HelthCard
                      productId={item._id}
                      CatrgoryId={item.cat_id}
                      title={item.meta_title}
                      description="It assesses your risks for potential health diseases and helps in health monitoring."
                      reportTime={item.report}
                      totalTest={item.number_of_star}
                      discount={Math.round(
                        ((item.mrp - item.offer_price) / item.mrp) * 100
                      ).toString()}
                      sellingPrice={item.offer_price}
                      purchasePrice={item.mrp}
                      className="xs:mr-0 sm:mr-0 md:mr-0"
                    />
                  );
                })}
              </div>
            </div>
            <Pagination
              count={440}
              currentPage={1}
              totalPages={4400}
              onPageChange={handlePageChange}
            />
            {/* <div>
              <nav className="paginationNav">
                <li>
                  <a href="javascript:void(0)" onClick={prePage}>
                    Back
                  </a>
                </li>
                <div className="NavControl">
                {numbers.map((n, i) => (
                
                  <li key={i}>
                   
                   <a href="javascript:void(0)" onClick={() => changeCPage(n)}>
                      {n}
                    </a>
                   
                  </li>
                  
                ))}
                </div>
                <li>
                  <a href="javascript:void(0)" onClick={nextPage}>
                    Next
                  </a>
                </li>
              </nav>
            </div> */}
          </div>
        </div>
      </div>
    </Container>
  );

  // function prePage() {
  //   if (currentPage !== 1) {
  //     setCurrentPage(currentPage - 1);
  //   }
  // }
  // function changeCPage(id) {
  //   setCurrentPage(id);
  // }
  // function nextPage() {
  //   if (currentPage !== npage) {
  //     setCurrentPage(currentPage + 1);
  //   }
  // }
};
