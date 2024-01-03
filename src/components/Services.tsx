import React from 'react'
import ServiceCard from "../components/ServiceCard.tsx"

const Services:React.FC = () => {
  return (
    <div>
      <h5 className='text-center font-semibold text-[#20B486]'>Our Services</h5>
      <h2 className='text-center p-2 font-bold text-[32px]'>Fostering a playful & engaging learning <br /> environment</h2>
      <div className='flex flex-col sm:flex-row justify-around p-3 relative'>
      <ServiceCard 
          title="Interaction Design"
          desc="Lessons on design that cover the most recent developments."
      /><div className='circle absolute left-0 top-0'></div>
      <ServiceCard 
          title="UX Design Course"
          desc="Classes in development that cover the most recent advancements in web."
      />
      <ServiceCard 
          title="User Interface Design"
          desc="User Interface Design courses that cover the most recent  trends"
      />
      </div>
    </div>
  )
}

export default Services