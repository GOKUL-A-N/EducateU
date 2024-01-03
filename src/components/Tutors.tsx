import React from 'react'
import TutorCard from './TutorCard'
import tutorOne from "../assets/tutorOne.png"
import tutorTwo from "../assets/tutorTwo.png"
import tutorThree from "../assets/tutorThree.png"
import tutorFour from "../assets/tutorFour.png"

const Reviews:React.FC = () => {
  return (
    <div className='relative'>
      <h5 className='text-center font-semibold text-[#20B486]'>Tutors</h5>
      <h2 className='text-center p-2 font-bold text-[32px]'>Meet The Heros</h2>
      <p className='text-[18px] text-[#667085] text-center'>On Weekend UX, instructors from all over the world instruct millions of students. <br /> We offer the knowledge and abilities.</p><br />
      <div className='flex flex-wrap mt-0 justify-around relative'>
        <TutorCard
          img={tutorOne}
          name="Theresa Webb"
          role="Application Support Analyst Lead"
          desc="Lead engineering teams at Figma, Pitch, and Protocol Labs."
        />
        <TutorCard
          img={tutorTwo}
          name="Courtney Henry"
          role="Director, Undergraduate Analytics and Planning"
          desc="Former PM for Linear, Lambda School, and On Deck."
        />
        <TutorCard
          img={tutorThree}
          name="Albert Flores"
          role="Career Educator"
          desc="Former co-founder of Opendoor. Early staff at Spotify and Clearbit."
        />
        <TutorCard
          img={tutorFour}
          name="Marvin McKinney"
          role="Co-op & Internships Program & Operations Manager"
          desc="Former frontend dev for Linear, Coinbase, and Postscript."
        /><div className='circle absolute right-0 top-0'></div>
      </div>
    </div>
  )
}

export default Reviews