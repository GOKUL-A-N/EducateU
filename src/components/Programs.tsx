import React from 'react'
import ProgramsCard from './ProgramsCard'
import courseOne from "../assets/courseOne.png"
import courseTwo from "../assets/courseTwo.png"
import courseThree from "../assets/courseThree.png"

const Programs:React.FC = () => {
  return (
    <div className='' id='courses'>
      <h5 className='text-center font-semibold text-[#20B486] mt-0'>Explore Programs</h5>
      <h2 className='text-center p-2 font-bold text-[32px]'>Our Most Popular Classes</h2>
      <div className='flex flex-col sm:flex-row p-10 items-center justify-around'>
          <ProgramsCard 
            title="Figma UI UX Design.."
            desc="Use Figma to get a job in UI Design, User Interface, User Experience design."
            author="Jane Coope"
            date="2001 Enrolled"
            price="$17.84"
            img = {courseThree}
          />
          <ProgramsCard 
            title="Building User Interface.."
            desc="Learn how to apply User Experience (UX) principles to your website designs."
            author="Esther Howard"
            date="2000 Enrolled"
            price="$117.84"
            img = {courseTwo}
          />
          <ProgramsCard 
            title="Learn With Shoaib"
            desc="Design Web Sites and Mobile Apps that Your Users Love and Return to Again."
            author="Jenny Wilson"
            date="2001 Enrolled"
            price="$8.84"
            img = {courseOne}
          />
      </div>
    </div>  
  )
}

export default Programs