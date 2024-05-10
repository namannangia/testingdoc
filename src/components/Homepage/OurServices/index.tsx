import { Container } from "@/components/container";
import { ServiceCard } from "./ServiceCard";
import Service1 from "@/assets/images/service1.png";
import Service2 from "@/assets/images/service2.png";
import Service3 from "@/assets/images/service3.png";
import { useEffect, useState } from "react";
import axios from "axios";
import { allServices, baseURL } from "@/components/ApiData/ApiFunctions";
import { CustomSlickSlider } from "@/components/SlickSlider";

const OurServices = () => {
  
  const [ourServices, setOurServices] = useState<any[]>([]);
  useEffect(() => {
    axios.get(baseURL + allServices).then((res) => {
      setOurServices(res.data.data.categoryData);
    });
  }, []);

  return (
    <div className="bg-section-image">
      <Container>
        <div className="text-center pt-16 md:py-6 flex flex-col gap-10 xs:gap-6 sm:gap-6 pb-16 xs:pt-6 sm:pt-6 xs:pb-6 sm:pb-6">
          <div className="flex flex-col gap-2">
            <h2 className="text-5xl xs:text-2xl sm:text-2xl text-gray-950 font-bold">
              Our <span className="text-turnary-800 font-bold"> Services</span>
            </h2>
            <span className="text-based text-gray-500 font-normal xs:text-xs sm:text-xs">
              Reliable Diaganostic service center has been the diagnostic center
              for all your healthcare needs as we have been assisting medical
              professionals by providing <br className="sm:hidden xs:hidden" />{" "}
              Zero error reports.
            </span>
          </div>
          <CustomSlickSlider>
            {ourServices.map((item, key) => {
              return (
                <ServiceCard
                  image={item.home_image}
                  title={item.category_name}
                  discription={item.meta_desc}
                />
              );
            })}
            </CustomSlickSlider>
          {/* <div className="grid grid-cols-3 gap-6 sm:gap-5 xs:gap-5 sm:flex xs:flex sm:flex-col xs:flex-col">
            <ServiceCard
              image={Service1}
              title="Cardiology"
              discription="Medical diagnosis treatment of heart defects and coronary artery disease. Tests and diagnosis include cardiac imaging for further analysis."
            />
            <ServiceCard
              image={Service2}
              title="Ultrasonography"
              discription="Ultrasonography where we use sound waves to produce images on the screen. this diagnostic medical procedure can be divided into the lung and pleural."
            />
            <ServiceCard
              image={Service3}
              title="Neurology"
              discription="This branch deals with disorders in the nervous system. We can provide our customers with comprehensive physical tests in order to evaluate different."
            />
          </div> */}
        </div>
      </Container>
    </div>
  );
};
export default OurServices;
