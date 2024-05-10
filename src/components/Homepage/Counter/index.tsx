import { Container } from "@/components/container";
import React, { useState, useEffect } from "react";

export const Counter = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCount((prevCount) => prevCount + 1);
    }, 100);

    return () => {
      clearInterval(intervalId);
    };
  }, []);

  return (
    <div className="bg-counter-image">
      <Container>
        <div className="pt-16  pb-16 md:py-6 xs:pt-6 sm:pt-6 xs:pb-6 sm:pb-6">
          <div className="grid grid-cols-4 md:grid-cols-2 md:gap-10 sm:flex sm:flex-col xs:flex xs:flex-col xs:gap-5 sm:gap-5">
            <div className=" flex flex-col gap-2 items-center">
              <div className="text-4xl font-semibold text-white">20+</div>
              <p className="text-lg font-semibold text-white">
                Global Innovation Partners
              </p>
            </div>
            <div className="flex flex-col gap-2 items-center">
              <div className="text-4xl font-semibold text-white">20+</div>
              <p className="text-lg font-semibold text-white">
                Global Innovation Partners
              </p>
            </div>
            <div className="flex flex-col gap-2 items-center">
              <div className="text-4xl font-semibold text-white">
                2,500,000+
              </div>
              <p className="text-lg font-semibold text-white">
                Pharma Relationship
              </p>
            </div>
            <div className="flex flex-col gap-2 items-center">
              <div className="text-4xl font-semibold text-white">6,500+</div>
              <p className="text-lg font-semibold text-white">
                Doctors who trust us
              </p>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Counter;
