import React, { useState } from 'react'
import logo from "../assets/Mern assignment/logo.png"
import {MenuRounded,Close} from '@mui/icons-material'
import { Link } from '@mui/material';
import {Button} from '@mui/material'
const Navbar = () => {

  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
        <nav className="bg-white h-20 flex item-center justify-center sticky z-[999] text-black ">
              <div className="max-w-[1440px] px-[10px]  min-[1180px]:px-[150px]  flex items-center justify-between w-full" >

                {/* //for mobile menu btn */}

                <div className="flex items-center  max-h-[100px]">
                  <img src={logo} alt="" className='h-[100px] w-[170px] object-cover'/>
                </div>


                <div className="md:hidden flex items-center justify-between">
                  {
                    !isOpen ? 
                    <MenuRounded className={`text-black ${isOpen?"hidden":"block"}`} onClick={()=> setIsOpen(!isOpen)} />
                 :   <Close className={`text-black ${isOpen?"block":"hidden"}`} onClick={()=> setIsOpen(!isOpen)} />
                  }
          </div>

              <ul className='hidden md:flex items-center justify-center gap-5 min-[992px]:gap-9  list-none ml-auto'>
                  <a href="#" className='font-semibold text-base leading-5 text-themeh2 hover:text-themeBtnSecondary'> About Us</a>
                  <a href="#" className='font-semibold text-base leading-5 text-themeh2 hover:text-themeBtnSecondary'> Features</a>
                  <a href="#" className='font-semibold text-base leading-5 text-themeh2 hover:text-themeBtnSecondary'> More Options</a>
                  <a href="#" className='font-semibold text-base leading-5 text-themeh2 hover:text-themeBtnSecondary'> Contacts</a>
                  
                  <button className='text-themeBtnSecondary border border-themeBtnSecondary bg-themeBtnPrimary px-10 py-[9px] rounded-sm '>Log In</button>
                  <button className='text-themeBtnPrimary border border-themeBtnPrimary bg-themeBtnSecondary px-10 py-[9px] rounded-sm'>SignUp</button>
              </ul>
                  


              {/* //for mobile view menu */}
              {
                isOpen && (
                  <ul className='md:hidden flex flex-col items-center h-screen  justify-center gap-5 absolute top-20 right-0 z-50  list-none ml-auto bg-white w-full'>
                  <a href="#" className='font-semibold text-base leading-5 text-themeh2 hover:text-themeBtnSecondary'> About Us</a>
                  <a href="#" className='font-semibold text-base leading-5 text-themeh2 hover:text-themeBtnSecondary'> Features</a>
                  <a href="#" className='font-semibold text-base leading-5 text-themeh2 hover:text-themeBtnSecondary'> More Options</a>
                  <a href="#" className='font-semibold text-base leading-5 text-themeh2 hover:text-themeBtnSecondary'> Contacts</a>
                  
                <button className='text-themeBtnSecondary border border-themeBtnSecondary bg-themeBtnPrimary px-10 py-[9px] rounded-sm'>Log In</button>
                <button className='text-themeBtnPrimary border border-themeBtnPrimary bg-themeBtnSecondary px-10 py-[9px] rounded-sm'>SignUp</button>
              </ul>
                 
                )
              }

              </div>
            </nav>   
    </>
  )
}

export default Navbar