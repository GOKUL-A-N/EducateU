import React from 'react'
import dulingo from "../assets/duolingo.png"
import magicleap from "../assets/magicleap.png"
import usertesting from "../assets/usertesting.png"
import codeconvo from "../assets/codeconvo.png"

const Testimonial:React.FC = () => {
  return (
    <div className='h-[100px] bg-[#a9a9a9] flex items-center justify-around overflow-x-auto'>
        <img className='h-[60px] w-[150px] p-2' src={dulingo} alt="" />
        <img className='h-[60px] w-[150px] p-2' src={magicleap} alt="" />
        <img className='h-[60px] w-[150px] p-2' src={usertesting} alt="" />
        <img className='h-[60px] w-[150px] p-2' src={codeconvo} alt="" />
    </div>
  )
}

export default Testimonial