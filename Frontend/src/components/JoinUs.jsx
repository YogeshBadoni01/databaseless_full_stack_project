import React from 'react'
import JoinUsImg from "../assets/Mern_assignment/JoinUs.jpg"

const JoinUs = () => {
  return (
    <>
        <div className="mt-20 font-[Roboto] flex justify-center ">
        <div className="max-w-[1440px]  w-full px-14 md:px-[133px]  flex justify-center  items-center gap-4 md:flex-row flex-col">

            <div className=" order-2 md:order-1">
                <img src={JoinUsImg} alt="" className='h-[400px] object-cover' />
            </div>

            <div className=" flex flex-col order-1 md:order-2">
                <h2 className='font-bold text-4xl md:text-[48px] leading-[120%] text-[#202020]'>Start Organizing Your Life Today</h2>
                
                <p className='font-normal text-base md:text-[18px] leading-[150%] text-[#202020]'>Join us now and transform your productivity with our intuitive to-do list platform!</p>
                
                
            <div className="flex justify-start  pt-8 gap-4 md:flex-row flex-col">
              <button className="text-themeBtnPrimary border border-themeBtnPrimary bg-themeBtnSecondary px-6 py-3 rounded-sm leading-5">
                SignUp
              </button>
              <button className="text-themeBtnSecondary border border-themeBtnSecondary bg-themeBtnPrimary px-6 py-3 rounded-sm leading-5 ">
                Learn more
              </button>
            </div>
            </div>
</div>
        </div>
    </>
  )
}

export default JoinUs