// import React from 'react'
import { PiDesktopTowerDuotone } from "react-icons/pi";

interface service  {
    title: string;
    desc: string;
  };

const ServiceCard= ({ title, desc }: service) => {
  return (
    <div className='border-2 relative p-6 flex-col flex  justify-center h-[200px] w-[300px] text-black hover:text-white gap-2 bg-[#fff] hover:bg-[#4AC8AE] rounded'>
        {/* <div className='circle absolute left-0 top-0'></div> */}
         <h2 className='flex text-[23px] font-semibold'><span className='mt-1 mr-1'><PiDesktopTowerDuotone /></span> {title}</h2>
         <p className=''>{desc}</p>
         <button className='font-semibold self-start'>Learn More {">"}</button>
    </div>
  )
}

export default ServiceCard