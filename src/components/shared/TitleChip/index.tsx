import TitleSection from "@/components/titleSection";
import { Chip, ChipWithBg } from "../Chip";

export const TitleChip = ({
  chipArray,
  subTitle,
  titleBlack,
  titleBlue,
  isChipBg,
}: ITitlechip) => {
  return (
    <div className="grid grid-cols-1 gap-8">
      <div>
        <TitleSection black={titleBlack} blue={titleBlue} pink="" className="text-[32px] xs:text-2xl sm:text-2xl"/>
        <span className="text-base font-normal text-gray-500">{subTitle}</span>
      </div>
      <div className="flex gap-6 flex-wrap sm:gap-3 xs:gap-3">
        {isChipBg ? (
          <>
            {chipArray?.map((arr) => {
              return <ChipWithBg title={arr} />;
            })}
          </>
        ) : (
          <>
            {" "}
            {chipArray?.map((arr) => {
              return <Chip title={arr} />;
            })}
          </>
        )}
      </div>
    </div>
  );
};
