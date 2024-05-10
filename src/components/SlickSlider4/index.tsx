import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import LeftArrow from "@/assets/svg/leftArrow.svg";
import RightArrow from "@/assets/svg/rightArrow2.svg";
import Image from "next/image";
import { useRef, useState } from "react";
export const CustomSlickSlider4 = ({ children }: ISlider) => {
  const [active1, setActive1] = useState(true);
  const [active2, setActive2] = useState(false);
  const sliderRef = useRef<any>(null);
  const NextArrow = () => {
    setActive1(true);
    setActive2(false);
    sliderRef.current.slickNext();
  };
  const PrevArrow = () => {
    setActive1(false);
    setActive2(true);
    sliderRef.current.slickPrev();
  };
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    arrows: false,
    responsive: [
      {
        breakpoint: 430,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
          arrows: false,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
          arrows: false,
        },
      },
      {
        breakpoint: 900,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
          arrows: false,
        },
      }
    ],
  };
  return (
    <>
      <Slider {...settings} ref={sliderRef}>
        {children}
      </Slider>
      <div className="flex justify-center gap-4">
        <button
          className={`w-10 h-10 rounded ${
            active2 ? `bg-secondory-400` : `bg-gray-100`
          } flex items-center justify-center`}
          onClick={PrevArrow}
        >
          <Image src={LeftArrow} alt="" width={24} height={24} />
        </button>
        <button
          className={`w-10 h-10 rounded ${
            active1 ? `bg-secondory-400` : `bg-gray-100`
          } flex items-center justify-center`}
          onClick={NextArrow}
        >
          <Image src={RightArrow} alt="" width={24} height={24} />{" "}
        </button>
      </div>
    </>
  );
};
