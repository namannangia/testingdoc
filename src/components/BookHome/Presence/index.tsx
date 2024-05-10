import { Container } from "@/components/container";
import { Chip, ChipWithBg } from "@/components/shared/Chip";
import { TitleChip } from "@/components/shared/TitleChip";
import TitleSection from "@/components/titleSection";

export const Presence = () => {
  const chipArraw = [
    "Surat",
    "Ahmedabad",
    "Vadodara",
    "Anand",
    "Surat",
    "Ahmedabad",
    "Vadodara",
    "Anand",
    "Surat",
    "Ahmedabad",
    "Vadodara",
    "Anand",
    "Surat",
    "Ahmedabad",
    "Vadodara",
    "Anand",
    "Surat",
    "Ahmedabad",
    "Vadodara",
    "Anand",
    "Surat",
    "Ahmedabad",
    "Vadodara",
    "Anand",
    "Surat",
    "Ahmedabad",
    "Vadodara",
    "Anand",
    "Surat",
    "Ahmedabad",
    "Vadodara",
    "Anand",
    "Surat",
    "Ahmedabad",
    "Vadodara",
    "Anand",
  ];
  return (
    <div className="bg-gray-50 sm:px-[30px]">
      <Container>
        <div className=" pt-16 md:py-6 flex flex-col gap-10 xs:gap-6 sm:gap-6 pb-16 xs:pt-6 sm:pt-6 xs:pb-6 sm:pb-6">
          <TitleChip
            titleBlack="Our "
            titleBlue="Presence"
            subTitle="Lorem ipsum dolor sit amet consectetur. Nisl in pre nisl mauris quis euismod congue. Augue elit id morbi semper sed in. "
            chipArray={chipArraw}
          />
        </div>
      </Container>
    </div>
  );
};
