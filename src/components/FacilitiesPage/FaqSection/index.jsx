import React from "react";
import { Container } from "@/components/container";
import { BgAccordion } from "@/components/shared/Accordion/BgAccordion";
import { AccordionGroup } from "@/components/shared/AccordionGroup";
import { Card64 } from "@/components/shared/card";

export const FacilitiesFaq = () => {
  const FaqArray = [
    {
      title: "Q. How can I book my test?",
      content:
        "A. If you are planning to book diagnostic tests with Redcliffe Labs, then it is quite a simple and smooth process. All you have to do is just call us and our well trained and patient-friendly representatives will book an appointment for you. Also, you can book the test online by visiting our website and as soon as we get your query within no time we will make sure to book the appointment for you.",
    },
    {
      title: "Q. In how much time will I get my test report?",
      content:
        "A. If you are planning to book diagnostic tests with Redcliffe Labs, then it is quite a simple and smooth process. All you have to do is just call us and our well trained and patient-friendly representatives will book an appointment for you. Also, you can book the test online by visiting our website and as soon as we get your query within no time we will make sure to book the appointment for you.",
    },
    {
      title: "Q. Where can I see or get my test results?",
      content:
        "A. If you are planning to book diagnostic tests with Redcliffe Labs, then it is quite a simple and smooth process. All you have to do is just call us and our well trained and patient-friendly representatives will book an appointment for you. Also, you can book the test online by visiting our website and as soon as we get your query within no time we will make sure to book the appointment for you.",
    },
    {
      title: "Q. Is home sample collection available for Thyroid test?",
      content:
        "A. If you are planning to book diagnostic tests with Redcliffe Labs, then it is quite a simple and smooth process. All you have to do is just call us and our well trained and patient-friendly representatives will book an appointment for you. Also, you can book the test online by visiting our website and as soon as we get your query within no time we will make sure to book the appointment for you.",
    },
  ];
  return (
    <Card64>
      <Container>
        {/* <div className="pt-0 md:py-6 flex flex-col gap-10 xs:gap-6 sm:gap-6 pb-16 xs:pt-1 sm:pt-1 xs:pb-6 sm:pb-6 sm:px-[30px]"> */}
        <AccordionGroup
          title="FAQ"
          subTitle="Helps you know your test better"
          accordionData={FaqArray}
        />
        {/* </div> */}
      </Container>
    </Card64>
  );
};
export default FacilitiesFaq;
