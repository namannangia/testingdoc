import { Container } from "@/components/container";
import { EnquiryFormBookHome } from "@/components/BookHome/EnquirySection/EnquiryForm";
import { BgAccordion } from "@/components/shared/Accordion/BgAccordion";
import { Text24 } from "@/components/shared/Text";
import TitleSection from "@/components/titleSection";

export const EnquiryBookHome = () => {
  return (
    <div>
      <Container>
        <div className="grid grid-cols-2 py-16 gap-7 sm:grid-cols-1 xs:grid-cols-1 xs:py-8 sm:py-8">
          <div className="flex flex-col">
            <TitleSection
              black={"About Home "}
              blue={"Collection"}
              pink=""
              className="xs:text-2xl sm:text-2xl"
            />

            <p className="text-gray-500 text-lg font-normal pb-3 sm:pb-2 xs:pb-2 sm:text-base xs:text-base">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore. Lorem ipsum dolor sit amet,
              consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
              labore.
            </p>
            <p className="text-gray-500 text-lg font-normal pb-3 sm:pb-2 xs:pb-2">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore. Lorem ipsum dolor sit amet,
              consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
              labore.Lorem ipsum dolor sit amet, consectetur adipiscing elit,{" "}
            </p>
            <p className="text-gray-500 text-lg font-normal pb-3 sm:pb-2 xs:pb-2">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore. Lorem ipsum dolor sit amet,
              consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
              labore.Lorem ipsum dolor sit amet, consectetur adipiscing elit,{" "}
            </p>
          </div>
          <div>
            <EnquiryFormBookHome></EnquiryFormBookHome>
          </div>
        </div>
      </Container>
    </div>
  );
};
export default EnquiryBookHome;
