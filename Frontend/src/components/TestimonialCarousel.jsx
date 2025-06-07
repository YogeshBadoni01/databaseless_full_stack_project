import React from "react";
import Slider from "react-slick";
import Customer from "../assets/Mern assignment/customerTe.jpg";
import CustInfo from "../assets/Mern assignment/testimon.png";
import { NavigateBefore, NavigateNext } from '@mui/icons-material';

function SimpleSlider() {
  const NextArrow = ({ onClick }) => (
    <button className="z-10 absolute lg:bottom-[117px] bottom-[5%] left-28 border border-themeBtnSecondary rounded-full p-[7px] hover:bg-themeBtnSecondary hover:text-white" onClick={onClick}>
      <NavigateNext />
    </button>
  );

  const PrevArrow = ({ onClick }) => (
    <button className="z-10 absolute lg:bottom-[117px] bottom-[5%] left-16 border border-themeBtnSecondary rounded-full p-[7px] hover:bg-themeBtnSecondary hover:text-white" onClick={onClick}>
      <NavigateBefore />
    </button>
  );

  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
  };

  return (
    <div className="font-[Roboto] pt-10 flex justify-center mt-10 ">
      <div className="max-w-[1440px] w-full px-14 md:px-[133px] flex justify-start items-baseline gap-4 flex-col ">
        <div className="flex flex-col justify-start w-full">
          <h2 className="font-bold text-4xl md:text-5xl  leading-[120%]"> Customer Testimonials </h2>
          <p className="font-normal text-base md:text-[18px] leading-[150%] mt-6 pb-16 "> This tool has transformed my productivity and organization! </p>
        </div>
        <div className="h-[590px] md:w-[471px]  w-[350px]  flex justify-start border-themeBtnSecondary border-[16px] ">
          <div className="relative bg-white">
            <div className="slider-container text-black absolute top-[50px] left-0 lg:w-[1085px]  lg:h-[490px] md:w-[545px] md:h-[490px] w-[350px] h-[400px] bg-white"> 
              <Slider {...settings}>
                {[1, 2, 3].map(item => (
                  <div className="p-8 md:p-[60px] " key={item}>
                    <div className="flex justify-between gap-[60px] items-center">
                      <div className="flex flex-col gap-[30px]">
                        <h3 className="text-2xl md:text-[36px] font-bold leading-[48px] text-themeh3 whitespace-pre-line"> Using this website has made my tasks so much easier! I can't imagine my day without it." </h3>
                        <div className="flex items-center gap-2.5 ">
                          <div className="lg:hidden block">
                                <div className="border-themeBtnSecondary border-[1px] border-l-0 p-1 pl-0">
                              <img src={Customer} alt="" className="max-w-[30px] max-h-[30px] " />
                            </div>
                          </div>
                          <div className="">
                            <img src={CustInfo} alt="" />
                          </div>
                          <div className="">
                            <h5 className="font-extrabold text-[18px] leading-[100%]">Sherri Cronin</h5>
                            <p className="text-base font-normal leading-[150%]">This is a testimonial.</p>
                          </div>
                        </div>
                        <div className=" h-[40px] "></div>
                      </div>
                      <div className="hidden lg:block">

                      <div className="border-themeBtnSecondary border-[16px] border-l-0 p-5 pl-0">
                        <img src={Customer} alt="" className="min-w-[330px] min-h-[330px] aspect-square" />
                      </div>
                      </div>
                    </div>
                  </div>
                ))}
              </Slider>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SimpleSlider;
