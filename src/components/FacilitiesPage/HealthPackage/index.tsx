import { Container } from "@/components/container";
import { Chip, ChipWithBg } from "@/components/shared/Chip";
import { TitleChip } from "@/components/shared/TitleChip";
import { Card64 } from "@/components/shared/card";
import TitleSection from "@/components/titleSection";

export const HealthPackage = () => {
  const chipArraw = [
    "Vitamin B12 in Ahmedabad",
    "Vitamin B12 in Surat",
    "Vitamin B12 in Vadodara",
    "Vitamin B12 in Gandhinagar",
    "Lipid Profile in Anand",
    "Lipid Profile in Ahmedabad",
    "Lipid Profile in Surat",
    "Lipid Profile in Gandhinagar",
    "Renal Function Test in AhmedabSuratad",
    "Renal Function Test in Vadodara",
    "Renal Function Test in Ahmedabad",
    "Renal Function Test in Ahmedabad",
    "Fasting Blood Sugar (FBS) in Ahmedabad",
    "Fasting Blood Sugar (FBS) in Surat",
    "Fasting Blood Sugar (FBS) in Gandhinagar",
    "Fasting Blood Sugar (FBS) in Vadodara",
    "Calcium, Serum in Surat",
    "Calcium, Serum in Gandhinagar",
    "Calcium, Serum in Surat",
    "Calcium, Serum in Ahmedabad",
   
  ];
  return (
    <Card64 className="bg-white">
      <Container>
        <div className=" flex flex-wrap gap-6">
          <TitleChip
            titleBlack="Our Popular Tests & "
            titleBlue="Health Packages"
            subTitle="Lorem ipsum dolor sit amet consectetur. Nisl in pre nisl mauris quis euismod congue. Augue elit id morbi semper sed in. "
            chipArray={chipArraw}
            isChipBg
            />
        </div>
      </Container>
            </Card64>
  );
};
