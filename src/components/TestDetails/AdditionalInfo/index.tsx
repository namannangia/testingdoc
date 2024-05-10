import { Card } from "@/components/shared/card";
import { Container } from "@/components/container";
import { Accordion } from "@/components/shared/Accordion";
import EnquiryForm from "./EnquiryForm";
import { Text14, Text18 } from "@/components/shared/Text";
import { baseURL, testDetailsById } from "@/components/ApiData/ApiFunctions";
import { useEffect, useState } from "react";
import axios from "axios";

const AdditionalInfo = ({
  SampleType,
  Method,
  ReportTime,
  TestComponents,
  NoOfParameters,
  Availability,
  Speciality,
}: IAdditionalInfocard) => {


  const accordionData = [
    {
      accordion: "Additional information",
      // AddInfoData: [
      //   { title: "Sample Type", desc: { SampleType } },
      // ],
    },
  ];

  const AddInfoData = [
    { title: "Sample Type", desc: SampleType },
    { title: "Method", desc: Method },
    { title: "Report Timing ", desc: ReportTime },
    { title: "Number of Parameters ", desc: NoOfParameters },
    { title: "Availability", desc: Availability },
    { title: "Speciality", desc: Speciality },
    { title: "Test Component", desc: TestComponents }
  ]


  return (
    <Card className="xs:pb-0">
      <Container>
        <div className="grid grid-cols-12 gap-6">
          {/* - */}
          <div className="col-span-12 lg:col-span-7 w-full">
            <>
              {/* 1. Additional information */}
              {accordionData.map((item, key) => {
                return (
                  <Accordion
                    key={key}
                    className="w-full mb-6"
                    classNameHead="flex w-full items-center justify-between bg-[#F9FAFB] px-6 py-2 border-[1px] border-solid border-b-0 text-left rounded-t-xl font-[600]"
                    classNameBody="text-sm"
                    title={item.accordion}
                  >
                    <div className="relative overflow-x-auto">
                      <table className=" border-[1px] border-solid w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                        <tbody>
                          {AddInfoData.map((item, id) => {
                            return (
                              <tr className="bg-white border-b AddInfoDataTableBox">
                                <th
                                  scope="row"
                                  className="font-medium text-[#1F2937] whitespace-nowrap w-1/2 lg:w-56 border-r-[0.5px] border-solid px-3 py-2 lg:px-6 lg:py-3 text-wrap"
                                >
                                  {item.title}
                                </th>
                                <td className="px-3 py-2 lg:px-6 lg:py-3">
                                  <Text14 color={'text-[#6B7280]'}> {item.desc}</Text14>
                                </td>
                              </tr>
                            )
                          })}
                        </tbody>
                      </table>
                    </div>
                  </Accordion>
                );
              })}

              {/* 2. Tests parameter list*/}
              {/* <div className="border-b-[1px] border-solid bottom-1">
                    <div className="flex items-center justify-between bg-[#F9FAFB] w-full px-6 py-2 border-[1px] border-solid border-b-0 text-left rounded-t-xl ">
                      <Text18 color="text-[#1F2937]" className="font-[600]">Tests parameter list</Text18>
                    </div>
                    <div>
                      {TestsParameterlist.map((item, key) => {
                        return (
                          <Accordion
                            key={key}
                            className="w-full"
                            classNameHead="flex w-full items-center justify-between px-6 py-2 border-[1px] border-solid border-b-0 text-base text-left"
                            classNameBody="text-sm"
                            title={item.accordion}
                            defaultOpen={item.defaultOpen}
                          >
                            {item.data.map((d, key) => (
                              <div key={key} className="relative overflow-x-auto">
                                <table className=" border-[1px] border-solid w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                                  <tbody>
                                    <tr className="bg-white border-b ">
                                      <td className="px-6 py-3 ">
                                        <Text14 color={'text-[#6B7280]'}>{d.desc}</Text14>
                                      </td>
                                    </tr>
                                  </tbody>
                                </table>
                              </div>
                            ))}
                          </Accordion>
                        );
                      })}

                    </div>
                  </div> */}
            </>
          </div>
          {/* + */}
          <div className="col-span-12 lg:col-span-5 w-full">
            <EnquiryForm />
          </div>
        </div>
      </Container>
    </Card>
  );
};

export default AdditionalInfo;
