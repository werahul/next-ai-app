import React from 'react'
import LeftSection from '@/components/PanormaGeneration/LeftSection'
import PanormaOutput from '@/components/PanormaGeneration/PanormaOutput'
import RightSection from '@/components/PanormaGeneration/RightSection'
import SomeParentComponent from '@/components/PanormaGeneration/SomeParentComponent'


const page = () => {

  const imageUrl = "/panImg.jpg"

  return (
    <div className='px-10 py-8 flex justify-center items-start gap-x-8 pt-10  md:gap-10 lg:pt-10  '>
      <LeftSection/>
      <PanormaOutput imageUrl={imageUrl}/>
      <RightSection/>
    </div>
  )
}

export default page