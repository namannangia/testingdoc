import { Accordion } from "@/components/shared/Accordion";
import Radio from "@/components/shared/Radio";
import Image from "next/image";
import NoteText from "@/assets/svg/edit.svg";
import CustomButton from "@/components/CustomButton";
import { Text16 } from "@/components/shared/Text";
import documenttext from "@/assets/images/document-text.png";

const SelectAddress = () => {
  const accordionData = [
    {
      accordion: "Select method",
      data: [
        { title: "Sample Type", desc: "Lourem ipsum" },
        { title: "Sample Description", desc: "Lourem ipsum" },
        { title: "Method", desc: "Lourem ipsum" },
      ],
    },
  ];

  return (
    <>
      {/* 1. Select Address */}
      <div className="border-[1px] border-solid bottom-1 rounded-2xl mb-6">
        <Accordion
          className="w-full  "
          classNameHead="flex w-full items-center justify-between bg-[#F9FAFB]  px-4 lg:px-6 py-2 border-b-[1px] border-solid text-left rounded-t-xl font-[600] text-xl lg:text-2xl"
          classNameBody="text-sm"
          title={"Add Address / Select Address"}
        >
          <div className="flex flex-col w-full justify-between me-4 p-4 lg:p-6 gap-6">
            <div className="flex justify-between border border-gray-200 rounded-lg p-4">
              <Radio
                id={"select-method1"}
                name={"select-Address"}
                label={"32, Lokesh recidency, Ring road, Surat"}
              />
              <Image src={NoteText} alt="note-icon" />
            </div>
            <div className="flex justify-between border border-gray-200 rounded-lg p-4">
              <Radio
                id={"select-method2"}
                name={"select-Address"}
                label={"32, Lokesh recidency, Ring road, Surat"}
              />
              <Image src={NoteText} alt="note-icon" />
            </div>
            <div className="flex justify-between border border-gray-200 rounded-lg p-4">
              <Radio
                id={"select-method3"}
                name={"select-Address"}
                label={"32, Lokesh recidency, Ring road, Surat"}
              />
              <Image src={NoteText} alt="note-icon" />
            </div>
          </div>
          <div>
            <CustomButton btn="skylight" className="rounded-t-none">
              Add Address
            </CustomButton>
          </div>
        </Accordion>
      </div>
      {/* 2. Select Patient */}
      <div className="border-[1px] border-solid bottom-1 rounded-2xl mb-6">
        <Accordion
          className="w-full "
          classNameHead="flex w-full items-center justify-between bg-[#F9FAFB] px-4 lg:px-6 py-2 border-b-[1px] border-solid text-left rounded-t-xl font-[600] text-2xl"
          classNameBody="text-sm"
          title={"Add Patient / Select Patient"}
        >
          <div className="flex flex-col w-full justify-between me-4 px-4 lg:p-6 gap-6 py-6">
            <div className="flex ">
              <Radio id={"select-method4"} name={"select-Patient"} label={""} />
              <div className="flex items-start justify-between border border-gray-200 rounded-lg p-4 w-full">
                <div className="flex flex-wrap gap-4">
                  <Text16>
                    <h5 className="text-[#374151] font-medium">
                      Name :{" "}
                      <span className="text-[#4B5563] font-normal">
                        Ajay Patel{" "}
                      </span>
                    </h5>
                    <h5 className="text-[#374151] font-medium">
                      Gender :{" "}
                      <span className="text-[#4B5563] font-normal">Male</span>
                    </h5>
                    <h5 className="text-[#374151] font-medium">
                      D.O.B :{" "}
                      <span className="text-[#4B5563] font-normal">
                        28-09-1995
                      </span>
                    </h5>
                    <h5 className="text-[#374151] font-medium">
                      Phone no :{" "}
                      <span className="text-[#4B5563] font-normal">
                        99922 23330
                      </span>
                    </h5>
                  </Text16>
                  <Image src={documenttext} alt="document-img" />
                </div>
                <Image src={NoteText} alt="note-img" />
              </div>
            </div>
            <div className="flex">
              <Radio id={"select-method5"} name={"select-Patient"} label={""} />
              <div className="flex justify-between border border-gray-200 rounded-lg p-4 w-full">
                <div>
                  <Text16>
                    <h5 className="text-[#374151] font-medium">
                      Name :{" "}
                      <span className="text-[#4B5563] font-normal">
                        Ajay Patel{" "}
                      </span>
                    </h5>
                  </Text16>
                </div>
                <div className="flex gap-4">
                  <div>
                    <Image src={NoteText} alt="note-img" />
                  </div>
                </div>
              </div>
              
            </div>
            <div className="flex">
              <Radio id={"select-method6"} name={"select-Patient"} label={""} />
              <div className="flex justify-between border border-gray-200 rounded-lg p-4 w-full">
                <div>
                  <Text16>
                    <h5 className="text-[#374151] font-medium">
                      Name :{" "}
                      <span className="text-[#4B5563] font-normal">
                        Ajay Patel{" "}
                      </span>
                    </h5>
                  </Text16>
                </div>
                <div className="flex gap-4">
                  <div>
                    <Image src={NoteText} alt="note-img" />
                  </div>
                </div>
              </div>             
            </div>
          </div>
          <div>
            <CustomButton btn="skylight" className="rounded-t-none">
              Add Patient
            </CustomButton>
          </div>
        </Accordion>
      </div>
    </>
  );
};

export default SelectAddress;
