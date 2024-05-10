import { Container } from "@/components/container";

export const HeroSectionThankYou = () => {
  return (
    <div>
      <div className="book-test-hero sm:px-[30px]">
        <Container>
          <div className="pt-16 md:py-6 flex flex-col gap-10 xs:gap-6 sm:gap-6 pb-16 xs:pt-6 sm:pt-6 xs:pb-6 sm:pb-6">
            <div className="flex flex-col gap-2">
              <h2 className="text-5xl xs:text-2xl sm:text-2xl text-gray-950 font-bold">
              Thank you for <span className="text-turnary-800 font-bold">Booking </span>
              </h2>
              <span className="text-based text-gray-500 font-normal xs:text-xs sm:text-xs">
              Your test has been booked successfully. You will get call from our executive soon.
              </span>
            </div>
          </div>
        </Container>
      </div>     
    </div>
  );
};
export default HeroSectionThankYou
