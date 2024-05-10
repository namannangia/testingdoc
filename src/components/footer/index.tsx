import React, { useEffect, useState } from "react";
import Logo from "@/assets/images/logo.png";
import Image from "next/image";
import { Container } from "../container";
import { Card64 } from "../shared/card";
import Link from "next/link";
import { Text14 } from "../shared/Text";
import CustomButton from "../CustomButton";
import { allServices, baseURL } from "../ApiData/ApiFunctions";
import axios from "axios";
export const Footer = () => {
  // const OurServices = [
  //   { title: "Radiology", link: "#" },
  //   { title: "Pathology", link: "#" },
  //   { title: "Cardiology", link: "#" },
  //   { title: "Gastroenterology", link: "#" },
  //   { title: "OPD", link: "#" },
  // ];


  const [ourServices, setOurServices] = useState<any[]>([]);
  useEffect(() => {
    axios.get(baseURL + allServices).then((res) => {
      setOurServices(res.data.data.categoryData);
    });
  }, []);

  const itemList = ourServices
    .map((item, index) => {
      if (index >= 0 && index < 5) {
        return <li key={index} className="mb-2">
          <Link className="hover:underline" href="javascript:void(0);">
            {item.category_name}
          </Link>
        </li>;
      }
      return null;
    })
    .slice(0, 4);

  return (
    <>
      <div className="footer-bg">
        <Card64 className="bg-[#fffdfede]">
          <Container>
            <div className="grid grid-cols-12 gap-6 xs:pb-6 pb-10 xs:text-center">
              {/* 1 */}
              <div className="xs:col-span-12 sm:col-span-6 col-span-4">
                <Link href="/" className="xs:flex xs:justify-center">
                  <Image
                    src={Logo}
                    className="w-[136px] mb-9"
                    alt="Flowbite Logo"
                  />
                </Link>
                <>
                  <Text14 color="text-[#212121]" className="mb-4 font-medium">
                    Have A Question?
                  </Text14>
                  <Text14 className="mb-4">
                    We understand that healthcare can be complex and
                    overwhelming, and we are committed to making the process as
                    easy and stress-free as possible.{" "}
                  </Text14>
                  <CustomButton className="px-[18px] py-3 w-fit xs:m-auto">
                    Contact me
                  </CustomButton>
                </>
              </div>
              <div className="col-span-2"></div>
              {/* Our Services */}
              <div className="xs:col-span-12 sm:col-span-6 col-span-3">
                <Text14 color="text-[#030712]" className="font-medium mb-4">
                  Our Services
                </Text14>
                <ul>
                  {/* {ourServices.map((item, key) => (
                    <li className="mb-2">
                      <Link className="hover:underline" href="javascript:void(0);">
                        <Text14 className="leading-6">{item.category_name}</Text14>
                      </Link>
                    </li>
                  ))} */}
                  {itemList}
                </ul>
              </div>
              <div className="xs:col-span-12 sm:col-span-6 col-span-3">
                <div>
                  <Text14 color="text-black" className="font-medium mb-4">
                    Operation Hours
                  </Text14>
                  <ul>
                    <li className="mb-4">
                      <Text14 className="leading-6">
                        Monday to Saturday : 7.00 am - 9.00 pm
                      </Text14>
                    </li>
                    <li className="mb-4">
                      <Text14 className="leading-6">
                        Sunday : 7.00 am - 3.00 pm
                      </Text14>
                    </li>
                  </ul>
                </div>
                <div>
                  <Text14 color="text-black" className="font-medium mb-4">
                    Reach Out To Us At
                  </Text14>
                  <ul>
                    <li className="mb-4">
                      <Text14 className="leading-6">(406) 123-456</Text14>
                    </li>
                    <li className="mb-4">
                      <Text14 className="leading-6">(406) 123-456</Text14>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </Container>
          <Container>
            <Text14 className="text-center">
              Copyright © 2022 Supreme Labs{" "}
            </Text14>
          </Container>
        </Card64>
      </div>
    </>
  );
};
