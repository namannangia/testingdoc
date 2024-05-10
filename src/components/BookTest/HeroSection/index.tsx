import { Container } from "@/components/container";

export const HeroSectionBookTest = () => {
  return (
    <div>
      <div className="book-test-hero">
        <Container>
          <div className="pt-16 md:py-6 flex flex-col gap-10 xs:gap-6 sm:gap-6 pb-16 xs:pt-6 sm:pt-6 xs:pb-6 sm:pb-6">
            <div className="flex flex-col gap-2">
              <h2 className="text-5xl xs:text-2xl sm:text-2xl text-gray-950 font-bold">
                Book a <span className="text-turnary-800 font-bold"> Test</span>
              </h2>
              <span className="text-based text-gray-500 font-normal xs:text-xs sm:text-xs">
                Lorem ipsum dolor sit amet consectetur. Nisl in pre nisl mauris
                quis euismod congue. Augue elit id morbi semper sed in.
              </span>
            </div>
          </div>
        </Container>
      </div>

     
    </div>
  );
};
