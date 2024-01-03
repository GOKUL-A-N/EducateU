import React from 'react'
import Benifits from '../components/Benifits';
import aboutUsOne from "../assets/aboutUsOne.png"
import aboutUsTwo from "../assets/aboutUsTwo.png"
import featured from "../assets/featured.png"

const About:React.FC = () => {
  return (
    <div className=''>
      <div>
        <div className='flex flex-col sm:flex-row'>
          <div className='w-full sm:w-1/2 p-6'>
            <h1 className='text-[#1A906B] text-[32px] sm:text-[48px] font-semibold'>About Us</h1>
            <h4 className='text-[35px] font-semibold'><span className='text-[#FF9B26]'>EducateU</span> provides the best opportunities to the students around the globe.</h4>
            <p>Weekend UX, is a UI/UX Design Academy in Delhi involved in User Experience and User Interface Training and Consulting. It was started in 2023 and passionate towards User Interface Design/ User Experience Design, Human Computer Interaction Design. Humanoid is gushing towards competence to acquire knowledge and have a wide understanding towards the sphere through the foremost courses in the area of UI/UX Design, by strengthening up your skills, for your golden future</p><br />
            <button className='border-2 bg-[#20B486] p-2 text-white rounded-full'>Join us {"->"}</button>
          </div>
          <div className='relative flex flex-col h-[400px] w-full  sm:w-[50%] items-center justify-center'>
            
            <div className='absolute top-0 right-0'>
              <img src={aboutUsOne} alt="" />
            </div>
            <div className='w-[250px] h-[50%] bg-[#F2F2F2] border-2'></div>
            <div className='absolute bottom-0 left-0'>
              <img src={aboutUsTwo} alt="" />
            </div>
          </div>
        </div>
        <div className='flex flex-col sm:flex-row-reverse p-4'>
          <div className='flex flex-col w-full sm:w-[50%] p-4'>
          <h5 className='text-left font-semibold text-[#20B486]'>Features</h5>
          <h4 className='text-[35px] font-semibold'><span className='text-[#FF9B26]'>EducateU</span> always working to provide you best of the features in all aspects..</h4>
          <p>At EducateU the chief determination is to clear the minds of our students about their goals, while making them consistent in their ambitions and pushing them to be confident for their journey towards the course of time.</p><br />
          <p>You will find every little thing on the internet in just a click of hand, but here we admire that without knowledge and practice the internet may even also fail you in your life.</p>
          <button className='border-2 bg-[#20B486] w-[145px] p-2 text-white rounded-full'>Learn More{"->"}</button>
          </div>
          <div className='flex flex-col w-full sm:w-[50%] p-4'>
            <img src={featured} className='w-[70%] h-[70%]' alt="" />
          </div>
        </div>
      </div>
      <Benifits />
    </div>
  )
}

export default About