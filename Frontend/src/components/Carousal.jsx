import React from "react";
  import Slider from "react-slick";
  import { NavigateBefore, NavigateNext } from '@mui/icons-material';
  import Hero from "../assets/Mern assignment/hero.png";
  import logohero from "../assets/Mern assignment/logohero.png";
  import PlayCircleIcon from '@mui/icons-material/PlayCircle';

function SimpleSlider() {
  const NextArrow = ({ onClick }) => (
    <button className="absolute top-1/2 right-0 transform -translate-y-1/2 z-10 text-white" onClick={onClick}>
      <NavigateNext />
    </button>
  );

  const PrevArrow = ({ onClick }) => (
    <button className="absolute top-1/2 left-0 transform -translate-y-1/2 z-10 text-white" onClick={onClick}>
      <NavigateBefore />
    </button>
  );

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    appendDots: dots => (
      <div className="absolute top-2 right-2.5 w-full flex justify-end" >
        <ul className="absolute -top-20 md:top-[-800px] w-full flex justify-end text-white"> {dots} </ul>
      </div>
    ),
    dotsClass: "slick-dots custom-dots",
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
  };

  return (
    <div className="slider-container relative h-full">
      <Slider {...settings}>
        {[1, 2, 3].map(i => (
          <div className="h-full " >
<div className="relative">
  <img src={Hero} alt="" className="object-cover h-full lg:h-[779px] rounded-4xl w-full" />
  <div className="absolute inset-0 bg-gradient-to-b from-red-900 to-white opacity-40 rounded-4xl"></div>
</div>
                <div className="absolute top-0  z-10">
                <h3 className="ml-9 mt-9 font-bold text-[40px] leading-[100%] text-white flex flex-col capitalize">
                <span className="opacity-50">Your Task</span> 
                 <span>Our tools</span>  </h3>
            </div>
            <div className="absolute bottom-0 z-10">
                <div className="p-9 flex justify-between items-baseline gap-5 ">
                  <div className="">

                  <div className=" ">
                    <img src={logohero} alt="" className="grayscale" />
                  </div>
                  <div className="mt-5 flex flex-col text-white">
                    <h5 className="font-normal text-xl leading-[120%]">Freddie Halvorson</h5>
                    <p className="font-normal text-[13px] leading-[120%] opacity-60">Chief Productivity Enthusiast</p>

                  </div>
                  </div>
                  <div className=" ">
                      < PlayCircleIcon className="" sx={{fontSize:"60px"}}/>
                  </div>
                </div>
            </div>

          </div>
        ))}
      </Slider>
    </div>
  );
}

export default SimpleSlider;

