import React from "react";
import icon1 from "../assets/Mern_assignment/Icons/icon1.png";
import icon2 from "../assets/Mern_assignment/Icons/icon2.png";
import icon3 from "../assets/Mern_assignment/Icons/icon3.png";
import icon4 from "../assets/Mern_assignment/Icons/Icon4.png";

const Featurs = () => {
  const Features = [
    {
      icon: icon1,
      heading: "User-Friendly Interface",
      peragraph:
        "Our platform offers seamless task management to boost your efficiency.",
    },
    {
      icon: icon2,
      heading: "Collaborate & Share Effortlessly",
      peragraph:
        "Invite team members to work together and achieve your goals faster.",
    },
    {
      icon: icon3,
      heading: "Effortless Collaboration",
      peragraph:
        "Invite team members to work together and achieve your goals faster.",
    },
    {
      icon: icon4,
      heading: " Seamless Access",
      peragraph: "Stay connected and manage your tasks on the go with ease.",
    },
  ];
  return (
    <>
      <div className=" font-[Roboto] flex justify-center ">
        <div className="max-w-[1440px]  w-full px-14 md:px-[133px]  flex justify-center  items-center gap-4 md:flex-row flex-col">
          <div className="text flex justify-center flex-col items-center">
            <h2 className="text-3xl md:text-[40px] font-bold leading-[120%] whitespace-pre-line max-w-[854px] text-center text-themeh2">
              Transform Your Productivity with Our Innovative To-Do List
              Features
            </h2>

            <div className="grid xl:grid-cols-4 md:grid-cols-2 gap-[30px] mb-20 ">
              {Features.map((item, index) => (
                <div className="mt-[50px] relative h-full" key={index}>
                  <div className="flex flex-col gap-5 bg-[#F7F7F7] rounded-[10px] p-[30px] h-full justify-centerxx`">
                    <div className="absolute right-2.5 top-2.5 font-[Raleway]">
                      <h4 className="font-extrabold text-5xl leading-[50px] opacity-10 text-themeh2">
                        0{index + 1}
                      </h4>
                    </div>
                    <div className="w-20 h-20 rounded-[10px] text-themeBtnSecondary bg-white flex justify-center items-center">
                      <img src={item.icon} alt="" />
                    </div>
                    <div className="">
                      <h5 className="font-extrabold text-[18px] leading-[26px] text-themeh2">
                        {item.heading}
                      </h5>
                    </div>
                    <div className="">
                      <div className=" flex gap-2.5">
                        <span className="bg-themeBtnSecondary h-1.5 w-[60px] rounded-full"></span>
                        <span className="bg-themeBtnSecondary h-1.5 w-[20px] rounded-full"></span>
                      </div>
                    </div>
                    <div className="">
                      <p className="text-base leading-[150%]">
                        {item.peragraph}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Featurs;
