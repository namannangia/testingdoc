import Image from "next/image";

export const OutlineButton = ({ title, icon, onClick }: IOutlineBtn) => {
  return (
    <button
      onClick={onClick}
      className="py-2 px-4 flex gap-2 items-center text-base font-medium text-primary-300 border border-primary-300 rounded-full"
    >
      {title}
      <Image src={icon} alt="icon" width={24} height={24} />
    </button>
  );
};
