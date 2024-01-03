// import React from 'react'
import { MdArrowOutward } from "react-icons/md";

interface programList {
    img: any;
    title: string;
    desc: string;
    author: string;
    date: string;
    price: string;
}

const ProgramsCard = (props: programList) => {
  return (
    <div className='inline-flex rounded-md cursor-pointer ease-in-out  hover:scale-105 w-[300px] flex-col  gap-2 flex-shrink-0 p-3 border-2'>
        <div className='flex w-full'>
            <img src={props.img} alt="" />
        </div>
        <div className="flex flex-col gap-2">
            <h6 className=' font-semibold text-[#20B486] mt-1'>Design</h6>
            <h4 className="flex w-full font-semibold text-[24px]"><span>{props.title}</span><span className="mt-2 ml-5 text-right"><MdArrowOutward /></span></h4>
            <p className="text-[14px]">{props.desc}</p><br />
            <div className="relative">
                <h6 className="text-[12px] font-semibold">{props.author} <br /> {props.date}</h6>
                <h6 className="absolute bottom-0 right-0 text-[19px] font-semibold text-[#4AC8AE]">{props.price}</h6>
            </div>
        </div>
    </div>
  )
}

export default ProgramsCard