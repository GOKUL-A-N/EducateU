// import React from 'react'

interface benifits {
    id: string;
    name: string;
    desc: string;
}

const BenifitCard = (props: benifits) => {
  return (
    <div className='w-[320px] p-4 border-2'>
        <div className="relative flex items-center ">
        <h1 className='text-[#22B286] font-bold text-[34px]'>{props.id}</h1>
        <div className="circle-one absolute top-0"></div>
        </div>
        <h3 className='text-[28px] font-semibold'>{props.name}</h3>
        <p>{props.desc}...<span className='text-[#22B286] cursor-pointer'>Read More</span></p>
    </div>
  )
}

export default BenifitCard