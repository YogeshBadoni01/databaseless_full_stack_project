import React from "react";
import logo from "../assets/Mern_assignment/logo.png";
import { Link } from "@mui/material";
import { Facebook, Instagram, LinkedIn, X, YouTube } from "@mui/icons-material";

const Footer = () => {
  const socialMedia = ["Facebook", "Instagram", "X", "LinkedIn", "Youtube"];
  return (
    <>
      <div className="flex flex-col justify-center gap-[50px] font-[Roboto] md:px-[135px] py-[65px] px-14 max-w-[1440px] m-auto">
        <div className="flex  w-full justify-between items-center xl:gap-[104px] lg:gap-10 max-lg:flex-col  ">
          {/* top-left */}
          <div className="flex justify-start items-start flex-col">
            <div className="flex items-center  max-h-[100px]">
              <img
                src={logo}
                alt=""
                className="h-[100px] w-[170px] object-cover"
              />
            </div>

            <p className="pt-5 text-[13px]">
              Subscribe to our newsletter for the latest features and updates
              delivered to you.
            </p>

            <div className="flex justify-center items-center pt-5 gap-[13px] w-full">
              <input
                type="text"
                name=""
                id=""
                placeholder="Your Email Here ..."
                className="w-full p-2.5 border text-[13px] sm:min-w-[296px] "
              />
              <button className="text-themeBtnPrimary border border-themeBtnPrimary bg-themeBtnSecondary px-5 sm:px-9 py-2.5 rounded-lg text-[13px]">
                Join
              </button>
            </div>
            <p className="text-[10px] pt-2.5">
              By subscribing, you consent to our Privacy Policy and agree to
              receive updates.
            </p>
          </div>
          {/* //top-right */}
          <div className=" flex w-full gap-[32px] max-lg:mt-[26px]">
            <div className="flex flex-col w-full">
              <h2 className="font-semibold text-[13px] leading-[150%]">
                Useful Links
              </h2>
              <ul className="pt-[13px]">
                <li className="font-normal text-[11px] leading-[150%] py-[6.5px]">
                  Home Page
                </li>
                <li className="font-normal text-[11px] leading-[150%] py-[6.5px]">
                  About
                </li>
                <li className="font-normal text-[11px] leading-[150%] py-[6.5px]">
                  Contect Us
                </li>
                <li className="font-normal text-[11px] leading-[150%] py-[6.5px]">
                  Block Posts
                </li>
                <li className="font-normal text-[11px] leading-[150%] py-[6.5px]">
                  FAQs
                </li>
              </ul>
            </div>
            <div className="flex flex-col w-full">
              <h2 className="font-semibold text-[13px] leading-[150%]">
                Resource
              </h2>
              <ul className="pt-[13px]">
                <li className="font-normal text-[11px] leading-[150%] py-[6.5px]">
                  Help Center
                </li>
                <li className="font-normal text-[11px] leading-[150%] py-[6.5px]">
                  User Guid
                </li>
                <li className="font-normal text-[11px] leading-[150%] py-[6.5px]">
                  Community Forum
                </li>
                <li className="font-normal text-[11px] leading-[150%] py-[6.5px]">
                  Feedback
                </li>
                <li className="font-normal text-[11px] leading-[150%] py-[6.5px]">
                  Support
                </li>
              </ul>
            </div>
            <div className="flex flex-col w-full">
              <h2 className="font-semibold text-[13px] leading-[150%]">
                Contact With Us
              </h2>
              <ul className="pt-[13px] flex justify-start flex-col">
                {/* {["Facebook", "Instagram", "X", "LinkedIn", "Youtube"].map(
                  (item) => (
                    <li className="font-normal text-[11px] leading-[150%] py-[6.5px]">
                      <span>{`</${item} >`}</span>
                      <Link href="" sx={{ colors: "black" }}>
                        {" "}
                        {item === "X" ? "Tweeter" : item}
                      </Link>
                    </li>
                  )
                )} */}
                <li className="font-normal text-[11px] leading-[150%] py-[6.5px] flex justify-start">
                  <span className="text-themeBtnSecondary mr-3  ">
                    <Facebook />
                  </span>
                  <span className="hidden  md:flex itcen">

                  <Link href="" sx={{ color: "#000",textDecoration  :"none" }}>
                    {" "}
                    Facebook
                  </Link>
                  </span>
                </li>
                <li className="font-normal text-[11px] leading-[150%] py-[6.5px] flex justify-start">
                  <span className="text-themeBtnSecondary mr-3  ">
                    <Instagram />
                  </span>
                  <span className="hidden  md:flex itcen">

                  <Link href="" sx={{ color: "#000",textDecoration  :"none" }}>
                    {" "}
                    Instagram
                  </Link>
                  </span>
                </li>
                <li className="font-normal text-[11px] leading-[150%] py-[6.5px] flex justify-start">
                  <span className="text-themeBtnSecondary mr-3  ">
                    <X />
                  </span>
                  <span className="hidden  md:flex itcen">

                  <Link href="" sx={{ color: "#000",textDecoration  :"none" }}>
                    {" "}
                    Tweeter
                  </Link>
                  </span>
                </li>
                <li className="font-normal text-[11px] leading-[150%] py-[6.5px] flex justify-start">
                  <span className="text-themeBtnSecondary mr-3  ">
                    <LinkedIn />
                  </span>
                  <span className="hidden  md:flex itcen">

                  <Link href="" sx={{ color: "#000",textDecoration  :"none" }}>
                    {" "}
                    LinkedIn
                  </Link>
                  </span>
                </li>
                <li className="font-normal text-[11px] leading-[150%] py-[6.5px] flex justify-start">
                  <span className="text-themeBtnSecondary mr-3  ">
                    <YouTube />
                  </span>
                  <span className="hidden  md:flex itcen">

                  <Link href="" sx={{ color: "#000",textDecoration  :"none" }}>
                    {" "}
                    Youtube
                  </Link>
                  </span>
                </li>
              </ul>
            </div>
          </div>

        </div>
          {/* down */}
          <div className="">
            
        <div className="bg-black h-[1px] w-full"></div>
          <div className="flex justify-between text-[11px] leading-[150%] mt-[26px] flex-col sm:flex-row  ">
            <div className="">
                <p>© 2024 Osumare. All rights reserved.</p>
            </div>
            <div className="flex">
                <ul className="flex gap-5 md:mt-0 mt-[26px]">
                    {

                        ["Privacy Policy","Terms of Service","Cookie Settings"].map(item => (

                            <li key={item}>
                                {item}
                            </li>
                        ))
                    }
                </ul>
            </div>
          </div>
      </div>
          </div>
    </>
  );
};

export default Footer;
