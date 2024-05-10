import { Container } from "@/components/container";
import { HelthCard } from "./HelthCard";
import { CustomSlickSlider } from "@/components/SlickSlider";
import { allPackage, baseURL } from "../../ApiData/ApiFunctions";
import React, { useEffect, useState } from "react";
import axios from "axios";

const HelthPackage = () => {
  const [allPackages, setAllPackage] = useState<any[]>([]);
  useEffect(() => {
    axios.get(baseURL + allPackage).then((res) => {
      setAllPackage(res.data.data.categoryData);
    });
  }, []);
  //const disc = Math.round(((500 - 400) / 500) * 100)

  return (
    <div className="bg-gray-50">
      <Container>
        <div className="pt-16 flex flex-col gap-10 md:py-6 sm:gap-6 xs:gap-6 pb-16  xs:pt-6 sm:pt-6 xs:pb-6 sm:pb-6">
          <div className="flex flex-col gap-2 text-center">
            <h2 className="text-5xl sm:text-2xl xs:text-2xl text-gray-950 font-bold">
              Top Health <span className="text-turnary-800 font-bold"> Packages</span>
            </h2>
            <span className="text-based text-gray-500 font-normal sm:text-xs xs:text-xs">
              The best-in-class laboratories from across India Reliable Diagnostics to bring the
              latest technology and techniques
              <br />
              within the reach of every individuals.
            </span>
          </div>
          <CustomSlickSlider>
            {allPackages.map((item) => {
              return (
                <HelthCard
                  productId={item._id}
                  CatrgoryId={item.cat_id}
                  title={item.meta_title}
                  description="It assesses your risks for potential health diseases and helps in health monitoring."
                  reportTime={item.report}
                  totalTest={item.number_of_star}
                  discount={Math.round(((item.mrp - item.offer_price) / item.mrp) * 100).toString()}
                  sellingPrice={item.offer_price}
                  purchasePrice={item.mrp}
                  className=""
                />
              );
            })}
          </CustomSlickSlider>
        </div>
      </Container>
    </div>
  );
};
export default HelthPackage;
