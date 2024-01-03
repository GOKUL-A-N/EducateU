// import React from 'react'
import { FaTwitter } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

interface tutor{
  img: any;
  name: string;
  role: string;
  desc: string;
}

const TutorCard = (props: tutor) => {
  return (
    <div className="flex  w-[230px] flex-col gap-1 cursor-pointer border-2 p-3 items-center ">
        <img src={props.img} alt="" /><br />
        <h4 className="text-[18px] font-semibold">{props.name}</h4>
        <h5 className="text-[#4AC8AE] font-semibold text-center">{props.role}</h5>
        <p className="text-[15px] text-center">{props.desc}</p><br />
        <button className="flex gap-1"><span className="text-[24px]"><FaTwitter /></span><span className="text-[24px]"><FaLinkedin /></span></button>
    </div>
  )
}

export default TutorCard