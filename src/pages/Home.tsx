import React from 'react'
import heroImg from '../assets/heroImg.png'
import { GiPublicSpeaker } from "react-icons/gi";
import { FaBriefcase } from "react-icons/fa6";
import { FaLightbulb } from "react-icons/fa";
import Services from '../components/Services';
import Tutors from '../components/Tutors';
import Testimonial from '../components/Testimonial';
import Programs from '../components/Programs';

const Home:React.FC = () => {
  return (
    <div>
      <div className='flex h-screen flex-col md:flex-row overflow-hidden'>
      <div className='w-full md:w-1/2 flex flex-col pl-5 md:pl-20 justify-center'>
        <h1 className='text-[40px] sm:text-[64px] font-bold'>Up Your <span className='text-[#20B486]'>Skills</span></h1>
        <h1 className='text-[40px] sm:text-[64px] font-bold'>To <span className='text-[#20B486]'>Advance</span> Your</h1>
        <h1 className='text-[40px] sm:text-[64px] font-bold'><span className='text-[#20B486]'>Career</span> Path</h1>
        <p className='text=[#646464]'>Learn new trends with the EducateU platform . The latest online <br /> learning system and  and material that help your knowledge growing.</p><br />
        <div className='flex'>
        <button className='border-2 bg-[#20B486] p-2 rounded-md text-white'>Get Started</button><button className='border-2 ml-3 bg-[#EAFFF9] text-[#20B486]  p-2 rounded-md'>Get Free Trial</button>
        </div><br />
        <div className='flex justify-around relative'>
          
          <h4 className='flex text-[#1D2939B2]'><span className='mt-1 mr-1'><GiPublicSpeaker /></span>Public Speaking</h4>
          <h4 className='flex text-[#1D2939B2]'><span className='mt-1 mr-1'><FaBriefcase /></span>Career Oriented</h4>
          <h4 className='flex text-[#1D2939B2]'><span className='mt-1 mr-1'><FaLightbulb /></span>Creative Thinking</h4>
        </div>
      </div>
      <div className='flex items-center justify-center'>
        <img src={heroImg} alt='leraning logo' />
      </div>
    </div>
    <Testimonial /><br /><br />
    <Services /><br /><br />
    <Programs /><br /><br />
    <Tutors /><br /><br />
    </div>
  )
}

export default Home