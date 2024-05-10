export const Chip = ({ title }: IChip) => {
  return (
    <div className="py-2 px-6 rounded-xl border border-grey-200 bg-white w-auto">
      <span className="text-base">{title}</span>
    </div>
  );
};
export const ChipWithBg = ({ title }: IChip) => {
  return (
    <div className="py-2 px-6 rounded-xl border border-grey-200 bg-blue-Secondary-Shades-Blue-50 w-auto">
      <span className="text-base">{title}</span>
    </div>
  );
};
