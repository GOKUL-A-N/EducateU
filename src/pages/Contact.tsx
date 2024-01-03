import React from 'react'
import { FaYoutube } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa6";
import { FaSquareInstagram } from "react-icons/fa6";

const Contact:React.FC = () => {
  return (
    <div>
      <div className='flex flex-col sm:flex-row'>
        <div className='w-full sm:w-[50%]'>
        <form className="w-full p-10">
  <div className="flex flex-wrap -mx-3 mb-6">
    <div className ="w-full md:w-1/2 px-3 mb-6 md:mb-0">
      <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
        First Name
      </label>
      <input className="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="grid-first-name" name='first_name' type="text" placeholder="First Name" />
      {/* <p className="text-red-500 text-xs italic">Please fill out this field.</p> */}
    </div>
    <div className="w-full md:w-1/2 px-3">
      <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
        Last Name
      </label>
      <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-last-name" name='last_name' type="text" placeholder="Last Name" />
    </div>
  </div>
  <div className="flex flex-wrap -mx-3 mb-6">
    <div className="w-full px-3">
      <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
        Email Address
      </label>
      <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-email" name='email' type="email" placeholder="********@*****.**" />
    </div>
  </div>
    
    <div className="flex flex-wrap -mx-3 mb-6">
    <div className="w-full px-3">
      <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
        Your Message
      </label>
      <textarea name='message'  className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500">
        
      </textarea>
    </div>
    <div className="flex justify-between w-full px-3">
      <div className="md:flex md:items-center">
        {/* <label class="block text-gray-500 font-bold">
          <input class="mr-2 leading-tight" type="checkbox" />
          <span class="text-sm">
            Send me your newsletter!
          </span>
        </label> */}
      </div>
      <button className='border-2 bg-[#20B486] p-2 rounded-md text-white' type="submit">
        Send Message
      </button>
    </div>
      
  </div>
    
</form>
        </div>
        <div className='w-full sm:w-[50%] flex items-center justify-center text-[18px] '>
          <div className='flex  flex-col gap-3'>
            <h4 className='font-semibold'>EduacteU</h4>
            <p>B 37/3 Ground Floor Double StoryRamesh Nagar ,<br /> Near Raja Garden <br /> Chowk.Delhi: 110015</p>
            <h6>+91 9876543210</h6>
            <h6>info@educateu.edu</h6>
            <button className='flex gap-2'><span><FaSquareInstagram /></span><span><FaFacebook /></span><span><FaLinkedin /></span><span><FaTwitter /></span><span><FaYoutube /></span></button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact