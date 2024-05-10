import { SelectBox } from "@/components/shared/SelectBox";
import { SearchHeader } from "@/components/shared/SearchInput";
import { useState } from "react";
import { Tabs } from "@/components/shared/Tabs";
import { OutlineButton } from "@/components/shared/Buttons/OutlineButton";
import UploadIcon from "@/assets/svg/upload.svg";
import { PopoverComponent } from "@/components/shared/popover";
import { TestFilter, TestMobileFilter } from "./Filter";
import MyModal from "@/components/shared/MyModal";
import PrescriptionContent from "../PrescriptionContent";
export const FilterHeader = () => {
  const [select, setSelect] = useState<any>();
  const [select1, setSelect1] = useState<any>();
  const option = [{ name: "A" }];
  const option2 = [{ name: "High to Low" }, { name: "Low to High" }];

  let [isOpen, setIsOpen] = useState(false)



  function openModal() {
    setIsOpen(true)
  }
  function closeModal() {
    setIsOpen(false)
  }
  return (
    <div className="flex flex-col gap-6">
      <div className="flex justify-between items-center xs:flex-col sm:flex-col sm:gap-6 xs:gap-6">
        <SearchHeader
          className="!rounded-2xl !h-[46px] "
          iconClassName="!top-[12px]"
        />
        <div className="lg:hidden xl:hidden 2xl:hidden md:hidden 3xl:hidden sm:w-full xs:w-full">
          <Tabs
            tabList={[{ name: "All" }, { name: "Test" }, { name: "Packages" }]}
          />
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
          <Tabs
            tabList={[{ name: "All" }, { name: "Test" }, { name: "Packages" }]}
          />
        </div>
        <div className="sm:flex xs:flex sm:items-center xs:items-center sm:justify-between xs:justify-between xs:w-full sm:w-full">
          <OutlineButton onClick={openModal} title="Upload Prescription" icon={UploadIcon} />
          <MyModal isOpen={isOpen} closeModal={closeModal} className="py-6 px-5 max-w-5xl" >
            <PrescriptionContent closeModal={closeModal}  />
          </MyModal>
          <PopoverComponent buttonTitle="Filters" popoverClass="as">
            <TestMobileFilter />
          </PopoverComponent>
        </div>
      </div>
    </div>
  );
};
