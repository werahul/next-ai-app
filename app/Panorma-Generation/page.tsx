import React from 'react'
import LeftSection from '@/components/PanormaGeneration/LeftSection'
import PanormaOutput from '@/components/PanormaGeneration/PanormaOutput'
import RightSection from '@/components/PanormaGeneration/RightSection'

const page = () => {
  return (
    <div className='px-10 py-8 flex justify-center items-start gap-x-8 pt-10  md:gap-10 lg:pt-10  '>
      <LeftSection/>
      <PanormaOutput/>
      <RightSection/>
    </div>
  )
}

export default page