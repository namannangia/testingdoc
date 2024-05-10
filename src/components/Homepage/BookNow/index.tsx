import { Container } from "@/components/container";
import { BookForm } from "./BookForm";
import BookImage from "@/assets/images/bookImage.png";
import Image from "next/image";
const BookNow = () => {
  return (
    <div className="bg-book-image sm:hidden xs:hidden">
      <Container>
        <div className="pt-16 md:py-6 flex flex-col gap-10 sm:gap-6 xs:gap-6 pb-16 xs:pt-6 sm:pt-6 xs:pb-6 sm:pb-6 ">
          <div className="grid grid-cols-2 gap-10 xs:flex sm:flex xs:flex-col-reverse sm:flex-col-reverse md:flex md:flex-col-reverse">
            <div className="flex flex-col gap-[30px] sm:hidden xs:hidden">
              <div className="flex flex-col gap-4 sm:gap-2 xs:gap-2">
                <span className="text-5xl sm:text-[40px] xs:text-[40px] font-bold">
                  Book <span className="text-turnary-800">Now</span>
                </span>
                <span className="text-xl font-normal">
                  Are you Ready? Book Appointment Now!
                </span>
              </div>
              <BookForm />
            </div>
            <div className="sm:hidden xs:hidden">
              <div className="w-full">
                <Image
                  src={BookImage}
                  alt="bookimage"
                  height={508}
                  width={600}
                  className="!w-full"
                />
              </div>
            </div>
          </div>
        </div>
        
      </Container>
    </div>
  );
};
export default BookNow;
