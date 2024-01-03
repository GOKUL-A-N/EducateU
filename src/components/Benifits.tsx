import React from 'react'
import BenifitCard from './BenifitCard'

const Benifits:React.FC = () => {
  return (
    <div>
        <h5 className='text-center font-semibold text-[#20B486]'>Benifits</h5><br />
        <h4 className='text-[35px] text-center font-semibold'>By Joining WEEKENS UX Platform,<br /> One Can Avail a Lot Of Benefits.</h4><br />
        <p className='text-center'>Install our top-rated dropshipping app to your e-commerce site and get <br /> access to US Suppliers, AliExpress vendors, and the best.</p>
        <div className='flex p-10 flex-wrap gap-10 items-center justify-center'>
        <BenifitCard 
            id= "01"
            name="Standardization"
            desc="When working in a global workplace, it’s often difficult to gauge learners’ training experiences, which are ..."
        />
        <BenifitCard 
            id= "02"
            name="Reduced Costs"
            desc="With Weekend UX, there’s no cost to reproduce materials and, thanks to mobile learning and microlearning "
        />
        <BenifitCard 
            id= "03"
            name="More Customization"
            desc="Just like learners aren’t one-size-fits-all, learning is not a one-size-fits-all experience. By using different"
        />
        <BenifitCard 
            id= "04"
            name="Affordable Price"
            desc="With EducateU, there’s no cost to reproduce materials and, thanks to mobile learning and microlearning"
        />
        <BenifitCard 
            id= "05"
            name="Learner Satisfaction"
            desc="If you really want students to retain what they learn, you’ll need to aim for high satisfaction rates. Bad "
        />
        <BenifitCard 
            id= "06"
            name="Multimedia Materials"
            desc="One of the main reasons why custom eLearning is effective is that it’s the perfect delivery method for "
        />
        </div>
    </div>
  )
}

export default Benifits