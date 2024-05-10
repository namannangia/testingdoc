import { BgAccordion } from "../Accordion/BgAccordion";
import { Container } from "@/components/container"
import { Card } from "@/components/shared/card"

export const AccordionGroup = ({
  title,
  subTitle,
  accordionData,
}: IAccordionGroup) => {
  return (
    <>
      {
        accordionData.length === 0 ? null
          : <Card><Container>
            <div className="pt-0 md:py-6 flex flex-col gap-10 xs:gap-6 sm:gap-6 xs:pt-6 sm:pt-6 xs:pb-6 sm:pb-6">
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
                  {accordionData?.map((item, index) => {
                    return (
                      <BgAccordion
                        title={"Q." + item.faq_title}
                        children={"Ans." + item.faq_description}
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
            </div>
          </Container>
          </Card>
      }
    </>
  );
};
