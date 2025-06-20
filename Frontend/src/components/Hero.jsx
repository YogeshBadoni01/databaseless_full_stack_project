import { Carousel } from "@material-tailwind/react";
import React, {  useState } from "react";
import MyCarousel from "./Carousal";
import Brand1 from "../assets/Mern_assignment/brand1.png";
import Brand2 from "../assets/Mern_assignment/brand2.png";
import Brand3 from "../assets/Mern_assignment/brand3.png";
import Brand4 from "../assets/Mern_assignment/brand4.png";
import Brand5 from "../assets/Mern_assignment/brand5.png";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import FavoriteIcon from '@mui/icons-material/Favorite';

const Hero = ({ onSubmit }) => {

  
  const [formData, setFormData] = useState({id:"", name: "", email: "", pNumber: "" });  
  const [open, setOpen] = useState(false);
  const [Submit, setSubmit] = useState(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const handleSubmit = async(e) => {
    e.preventDefault();
    if (formData.name === "" || formData.email === "" || formData.pNumber === "") {
      setSubmit(false);
      alert("please fill all the requied fill")
    } else {
      // const id=uuids("")
      onSubmit(formData);
      setSubmit(true);
      setOpen(false);
    }
    setFormData({ name: "", email: "", pNumber: "" })
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

 

  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 569,
    bgcolor: "background.paper",
    border: "2px solid #000",
    boxShadow: 24,
    p: 4,
  };

  const style2 = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 522,
    bgcolor: "background.paper",
    border: "2px solid #000",
    boxShadow: 24,
  };
  return (
    <div className="flex justify-center w-full flex-col items-center bg-[#F7F7FB]">
      <div className="max-w-[1440px] w-full px-14 md:px-[133px]  flex justify-center flex-col items-center">
        <div className="pt-8 flex flex-col justify-center w-full items-center max-w-[619px]  text-center px-2.5">
          <h1 className="text-4xl md:text-[50px] font-[roboto] font-bold whitespace-pre-line  text-themeh1  ">
            Simplify Your Life with Our Todo App
          </h1>
          <p className="pt-[25px] text-themep1">
            Stay organized and boost your productivity with our intuitive todo
            website. Experience a modern approach to task management that fits
            your lifestyle.
          </p>

          <div className="flex justify-between max-w-[381px] pt-[84px] gap-6 md:flex-row flex-col">
            <button
              className="text-themeBtnPrimary border border-themeBtnPrimary bg-themeBtnSecondary px-10 py-4 rounded-full leading-5"
              onClick={handleOpen}
            >
              Get Started
            </button>
            <button className="text-themeBtnSecondary border border-themeBtnSecondary bg-themeBtnPrimary px-10 py-4 rounded-full leading-5 ">
              Learn more
            </button>
          </div>
        </div>

        <div className=" pt-[54px] flex gap-4  lg:flex-row flex-col w-full ">
          <div className="bg-themeBtnSecondary rounded-4xl p-[52px]  ">
            <h2 className="flex flex-col text-6xl md:text-7xl lg:text-[99px] whitespace-pre-line text-white font-[roboto] leading-[100%]">
              <span className="opacity-40">Organize.</span>
              <span>Achieve.</span>
              <span>Relax.</span>
            </h2>
            <p className="text-white text-xl pt-9">
              Turn clutter into clarity, chaos into control, and dreams into
              done.bold visions into market success
            </p>

            <div className="flex justify-between max-w-[381px] pt-[84px] gap-6 md:flex-row flex-col">
              <button className="text-themeBtnSecondary border border-themeBtnSecondary bg-themeBtnPrimary px-10 py-4 rounded-full leading-5 ">
                Learn more
              </button>
              <button className="text-themeBtnPrimary border border-themeBtnPrimary bg-themeBtnSecondary px-10 py-4 rounded-full leading-5">
                Get Started
              </button>
            </div>
          </div>
          <div className="md:max-w-[379px] h-full w-full">
            <MyCarousel />
          </div>
        </div>
        <div className="pt-[48px] pb-10 ">
          <div className="flex gap-1 md:gap-12 lg:gap-[100px] flex-col md:flex-row">
            {[Brand1, Brand2, Brand3, Brand4, Brand5].map((i) => (
              <img
                key={i}
                src={`${i}`}
                alt={`${i}`}
                className="w-18 h-18 md:w-24 md:-24 object-contain"
              />
            ))}
          </div>
        </div>
        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="User Data"
          // aria-describedby="modal-modal-description"
          // sx={{width:"00px"}}
        >
          <Box sx={style}>
            <h2 className="font-semibold text-2xl leading-[100%]">
              Get Started Today!
            </h2>
            <h2 className="font-normal text-base leading-[100%] mt-[12px]">
              Fill in your details and take control of your tasks.
            </h2>
            <form className="text-base leading-[150%] mt-[12px]" onSubmit={handleSubmit}>
              <label className="font-medium " htmlFor="name">
                Name
              </label>
              <input
                type="text"
                name="name"
                margin="normal"
                onChange={handleChange}
                className="w-full p-3 border border-gray-300 mb-2.5 bg-themeInput"
                value={formData.name}
                required
              />
              <label className="font-medium " htmlFor="email">
                Email
              </label>
              <input
                type="email"
                name="email"
                margin="normal"
                className="w-full p-3 border border-gray-300 mb-2.5 bg-themeInput"
                value={formData.email}
              onChange={ handleChange}
              required
              />
              <label className="font-medium " htmlFor="Phone Number">
                Phone Number
              </label>
              <input
                type="text"
                name="pNumber"
                margin="normal"
                required
                onChange={ handleChange}
                className="w-full p-3 border border-gray-300 mb-2.5 bg-themeInput"
                value={formData.pNumber}
              />

              <button
                className=".button w-full mt-3 bg-themeBtnSecondary p-3 text-white  "
                type="submit"
              >
                Submit
              </button>
            </form>
          </Box>
        </Modal>

        <Modal open={Submit} onClose={() => setSubmit(!Submit)}>
          <Box sx={style2}>
            <div className="py-10 px-24 flex flex-col justify-center items-center gap-3 text-center">
              <div className="">
                <FavoriteIcon />
              </div>

              <div className="">
                <h3 className="font-semibold text-2xl leading-[100%]">
                  Thank you for connect with us.
                </h3>
              </div>
              <div className="">
                <p className="font-normal text-lg leading-[100%]">
                  Our team will contacting with you soon
                </p>
              </div>
              <div className="w-full">
                <button
                  className=".button mt-3 bg-themeBtnSecondary p-3 text-white  w-full "
                  onClick={() => {
                    setSubmit(!Submit);
                  }}
                >
                  Done
                </button>
              </div>
            </div>
          </Box>
        </Modal>
      </div>
    </div>
  );
};

export default Hero;
