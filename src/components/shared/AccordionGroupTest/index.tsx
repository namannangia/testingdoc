import { BgAccordion } from "../Accordion/BgAccordion";

export const AccordionGroupTest = ({
  title,
  subTitle,
  accordionData,
}: IAccordionGroup) => {
  return (
    <div className="flex flex-col gap-6">
      <div className="flex flex-col gap-1">
        <span className="text-3xl text-gray-950 font-bold xs:text-2xl sm:text-2xl">
          {title}
        </span>
        <span className="text-gray-500 text-2xl font-normal sm:text-base xs:text-base">
          {subTitle}
        </span>
      </div>
      <div>
        {accordionData?.map((fq, index) => {
          return (
            <BgAccordion
              title={"Q." + fq.faq_title}
              children={"Ans." + fq.faq_description}
              className={`${index == 0 ? "rounded-tl-2xl rounded-tr-2xl" : null
                } ${accordionData.length - 1 === index
                  ? "rounded-bl-2xl rounded-br-2xl"
                  : null
                }`}
              open={index == 0 ? true : false}
            />
          );
        })}
      </div>
    </div>
  );
};
