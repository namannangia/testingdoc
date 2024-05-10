import { Container } from "@/components/container";
import FacilitiesEnquiryForm from "./EnquiryForm";
import Search from "@/assets/svg/search.svg";
import Image from "next/image";
import TitleSection from "@/components/titleSection";
import { Card64 } from "@/components/shared/card";

export const AboutClinic = ({ className, iconClassName }: ISearchInput) => {
  return (
    <Card64>
      <Container>
        <div className="grid grid-cols-12 gap-10">
          <div className="col-span-12 lg:col-span-7">

         
          <div className="11flex flex-col w-full">
            <TitleSection black="About Our " blue="Clinic" />
            <p className="text-gray-500 text-lg font-normal pb-3">
              When it comes to excellence in diagnostics, City X-Ray & Scan
              Clinic is a name that people count upon for high-quality, safe,
              and efficient diagnostic services in Delhi. We are a NABL and NABH
              certified center, reckoned for our excellent team of doctors &
              technicians along with state-of-the-art equipment.{" "}
            </p>
            <p className="text-gray-500 text-lg font-normal pb-3">
              Book a blood test or expert health check-up packages online with
              Metropolis Healthcare - one of the leading diagnostic service
              provider in India. Get quality reports trusted by leading doctors
              and hospitals from our NABL and CAP certified labs of City X-ray
              Clinic.
            </p>
            <p className="text-gray-500 text-lg font-normal pb-3 mb-2">
              One can either visit our nearest City X-ray Clinic lab to give
              your blood sample or opt for blood collection at home service, so
              that you can get all the benefits of diagnostic centre and
              pathology labs in the comfort of your home.
            </p>
            <div className=" relative  text-gray-500 w-full xs:w-full sm:w-full">
              <input
                className={`border border-gray-300 w-full bg-white h-[58px] py-4 px-5 pr-16 rounded-lg text-lg focus:outline-none ${className}`}
                name="search"
                placeholder="Search here Test Category/Subcategory"
              />
              <Image
                src={Search}
                alt=""
                className={`absolute top-2 right-3 ${iconClassName}`}
              />
            </div>{" "}
          </div>
          </div>
          <div className="col-span-12 lg:col-span-5">
          <div className="w-full">
            <FacilitiesEnquiryForm></FacilitiesEnquiryForm>
          </div>
          </div>
        </div>
      </Container>
    </Card64>
  );
};
export default AboutClinic;
