import React from 'react'
import EducateUlogo from "../assets/EducateUlogo.png"

const Footer:React.FC = () => {
  return (
    <div className='flex items-center justify-center flex-col h-auto sm:h-[300px] p-3 bg-[#101828] w-full'>
      <div className='w-[80%] flex flex-col sm:flex-row text-white gap-4'>
        <div className='w-full sm:w-[30%]'>
          <img src={EducateUlogo} alt='logo' />
          <p className='text-[#EAECF0]'>Top learning experiences that create more talent in the world.</p>
        </div>
        <div className='w-full sm:w-[15%]'>
          <h6 className='text-[#98A2B3] font-semibold'>Product</h6>
          <ul>
            <li>Overview</li>
            <li>Features</li>
            <li>Solutions</li>
            <li>Tutorials</li>
            <li>Pricing</li>
          </ul>
        </div>
        <div className='w-full sm:w-[15%]'>
          <h6 className='text-[#98A2B3] font-semibold'>Company</h6>
          <ul>
            <li>About Us</li>
            <li>Company</li>
            <li>Press</li>
            <li>News</li>
          </ul>
        </div>
        <div className='w-full sm:w-[15%]'>
          <h6 className='text-[#98A2B3] font-semibold'>Social</h6>
          <ul>
            <li>Twitter</li>
            <li>LinkedIn</li>
            <li>Github</li>
            <li>Dribble</li>
          </ul>
        </div>
        <div className='w-full sm:w-[15%]'> 
          <h6 className='text-[#98A2B3] font-semibold'>Legal</h6>
          <ul>
            <li>Terms</li>
            <li>Privacy</li>
            <li>Cookies</li>
            <li>Contact</li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Footer