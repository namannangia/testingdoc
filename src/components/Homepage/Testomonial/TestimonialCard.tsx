import Image from "next/image";
export const TestimonialCard = ({
  icon,
  title,
  text,
  date,
}: ITestimonialCard) => {
  return (
    <div className="testimonial-box flex justify-between items-center mr-3  py-4 px-6 border-gray-200 border rounded-lg group-hover:bg-blue-50">
      <div className="block">
        <div className="rounded">
          <Image src={icon} alt="person-icon" width={70} height={70} />
        </div>
        <div className="flex flex-col gap-4 text-left pt-4">
          <h4 className="text-gray-950 text-2xl font-bold">{title}</h4>
          <p className="text-gray-500 text-base font-medium">{text}</p>
          <span className="text-gray-500 text-base font-medium">{date}</span>
        </div>
      </div>
    </div>
  );
};
